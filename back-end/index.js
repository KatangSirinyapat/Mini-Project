const express = require('express'),
    app = express(),
    passport = require('passport'),
    port = process.env.PORT || 80,
    cors = require('cors'),
    cookie = require('cookie')

const bcrypt = require('bcrypt')

const db = require('./database.js')
let users = db.users
let commentsFIS = db.commentsFIS
let commentsFHT = db.commentsFHT
let commentsFTE = db.commentsFTE
let commentsCOC = db.commentsCOC


require('./passport.js')

const router = require('express').Router(),
    jwt = require('jsonwebtoken')

app.use('/api', router)
router.use(cors({ origin: 'http://localhost:3000', credentials: true }))
// router.use(cors())
router.use(express.json())
router.use(express.urlencoded({ extended: false }))


router.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        console.log('Login: ', req.body, user, err, info)
        if (err) return next(err)
        if (user) {
            let expi = (req.body.checktoken == 'on') ? '7d' : '1d'
            const token = jwt.sign(user, db.SECRET, {
                expiresIn: expi
            })
            // req.cookie.token = token
            res.setHeader(
                "Set-Cookie",
                cookie.serialize("token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== "development",
                    maxAge: 60 * 60,
                    sameSite: "strict",
                    path: "/",
                })
            );
            res.statusCode = 200
            return res.json({ user, token })
        } else
            return res.status(422).json(info)
    })(req, res, next)
})

router.get('/logout', (req, res) => {
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", '', {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: -1,
            sameSite: "strict",
            path: "/",
        })
    );
    res.statusCode = 200
    return res.json({ message: 'Logout successful' })
})

/* GET user profile. */
router.get('/profile',
    passport.authenticate('jwt', { session: false }),
    (req, res, next) => {
        res.send(req.user)
    });

router.post('/register',
    async (req, res) => {
        try {
            const SALT_ROUND = 10
            const { username, email, password } = req.body
            if (!username || !email || !password)
                return res.json({ message: "Cannot register with empty string" })
            if (db.checkExistingUser(username) !== db.NOT_FOUND)
                return res.json({ message: "Duplicated user" })

            let id = (users.users.length) ? users.users[users.users.length - 1].id + 1 : 1
            hash = await bcrypt.hash(password, SALT_ROUND)
            users.users.push({ id, username, password: hash, email })
            res.status(200).json({ message: "Register success" })
        } catch {
            res.status(422).json({ message: "Cannot register" })
        }
    })

router.get('/alluser', (req, res) => res.json(db.users.users))

router.get('/', (req, res, next) => {
    res.send('Respond without authentication');
});

/* -----------------------------------------------------------FIS-------------------------------------------------------- */
router.route('/fis')
    .get((req, res) => res.send(commentsFIS))
    .post((req, res) => {
        let date = new Date().toDateString()
        let time = new Date().toLocaleTimeString()
        let allnewstdCom = {}
        allnewstdCom.id = (commentsFIS.list.length) ? commentsFIS.list[commentsFIS.list.length - 1].id + 1 : 1
        allnewstdCom.name = req.body.name
        allnewstdCom.comment = req.body.comment
        allnewstdCom.date = date
        allnewstdCom.time = time
        commentsFIS = { "list": [...commentsFIS.list, allnewstdCom] }

        res.send(commentsFIS)
    })

router.route('/fis/:comment_id')
    .get((req, res) => {
        const commentId = req.params.comment_id
        const id = commentsFIS.list.findIndex(item => +item.id === +commentId)
        if (id >= 0) {
            res.send(commentsFIS.list[id])
        }
        else {
            res.send({ Status: "Can't found !!" })
        }

    })

    .put((req, res) => {
        let date = new Date().toDateString()
        const commentId = req.params.comment_id
        const id = commentsFIS.list.findIndex(item => +item.id === +commentId)
        if (id >= 0) {
            commentsFIS.list[id].name = req.body.name
            commentsFIS.list[id].comment = req.body.comment
            commentsFIS.list[id].date = date

            res.send(commentsFIS)
        }
        else {
            res.send({ Status: "Can't found !!" })
        }

    })

    .delete((req, res) => {
        const commentId = req.params.comment_id
        const id = commentsFIS.list.findIndex(item => +item.id === +commentId)
        if (id >= 0) {
            commentsFIS.list = commentsFIS.list.filter(item => +item.id !== +commentId)
            res.send(commentsFIS)
        }
        else {
            res.send({ Status: "Can't found !!" })
        }

    })

/* -----------------------------------------------------------FHT-------------------------------------------------------- */
router.route('/fht')
    .get((req, res) => res.send(commentsFHT))
    .post((req, res) => {
        let date = new Date().toDateString()
        let allnewstdCom = {}
        allnewstdCom.id = (commentsFHT.list.length) ? commentsFHT.list[commentsFHT.list.length - 1].id + 1 : 1
        allnewstdCom.name = req.body.name
        allnewstdCom.comment = req.body.comment
        allnewstdCom.date = date
        commentsFHT = { "list": [...commentsFHT.list, allnewstdCom] }

        res.send(commentsFHT)
    })

router.route('/fht/:comment_id')
    .get((req, res) => {
        const commentId = req.params.comment_id
        const id = commentsFHT.list.findIndex(item => +item.id === +commentId)
        if (id >= 0) {
            res.send(commentsFHT.list[id])
        }
        else {
            res.send({ Status: "Can't found !!" })
        }

    })

    .put((req, res) => {
        let date = new Date().toDateString()
        const commentId = req.params.comment_id
        const id = commentsFHT.list.findIndex(item => +item.id === +commentId)
        if (id >= 0) {
            commentsFHT.list[id].name = req.body.name
            commentsFHT.list[id].comment = req.body.comment
            commentsFHT.list[id].date = date

            res.send(commentsFHT)
        }
        else {
            res.send({ Status: "Can't found !!" })
        }

    })

    .delete((req, res) => {
        const commentId = req.params.comment_id
        const id = commentsFHT.list.findIndex(item => +item.id === +commentId)
        if (id >= 0) {
            commentsFHT.list = commentsFHT.list.filter(item => +item.id !== +commentId)
            res.send(commentsFHT)
        }
        else {
            res.send({ Status: "Can't found !!" })
        }

    })

/* -----------------------------------------------------------FTE-------------------------------------------------------- */
router.route('/fte')
    .get((req, res) => res.send(commentsFTE))
    .post((req, res) => {
        let date = new Date().toDateString()
        let allnewstdCom = {}
        allnewstdCom.id = (commentsFTE.list.length) ? commentsFTE.list[commentsFTE.list.length - 1].id + 1 : 1
        allnewstdCom.name = req.body.name
        allnewstdCom.comment = req.body.comment
        allnewstdCom.date = date
        commentsFTE = { "list": [...commentsFTE.list, allnewstdCom] }

        res.send(commentsFTE)
    })

router.route('/fte/:comment_id')
    .get((req, res) => {
        const commentId = req.params.comment_id
        const id = commentsFTE.list.findIndex(item => +item.id === +commentId)
        if (id >= 0) {
            res.send(commentsFTE.list[id])
        }
        else {
            res.send({ Status: "Can't found !!" })
        }

    })

    .put((req, res) => {
        let date = new Date().toDateString()
        const commentId = req.params.comment_id
        const id = commentsFTE.list.findIndex(item => +item.id === +commentId)
        if (id >= 0) {
            commentsFTE.list[id].name = req.body.name
            commentsFTE.list[id].comment = req.body.comment
            commentsFTE.list[id].date = date

            res.send(commentsFTE)
        }
        else {
            res.send({ Status: "Can't found !!" })
        }

    })

    .delete((req, res) => {
        const commentId = req.params.comment_id
        const id = commentsFTE.list.findIndex(item => +item.id === +commentId)
        if (id >= 0) {
            commentsFTE.list = commentsFTE.list.filter(item => +item.id !== +commentId)
            res.send(commentsFTE)
        }
        else {
            res.send({ Status: "Can't found !!" })
        }

    })
/* -----------------------------------------------------------COC-------------------------------------------------------- */
router.route('/coc')
    .get((req, res) => res.send(commentsCOC))
    .post((req, res) => {
        let date = new Date().toDateString()
        let time = new Date().toLocaleTimeString()
        let allnewstdCom = {}
        allnewstdCom.id = (commentsCOC.list.length) ? commentsCOC.list[commentsCOC.list.length - 1].id + 1 : 1
        allnewstdCom.name = req.body.name
        allnewstdCom.comment = req.body.comment
        allnewstdCom.date = date
        allnewstdCom.time = time
        commentsCOC = { "list": [...commentsCOC.list, allnewstdCom] }

        res.send(commentsCOC)
    })

router.route('/coc/:comment_id')
    .get((req, res) => {
        const commentId = req.params.comment_id
        const id = commentsCOC.list.findIndex(item => +item.id === +commentId)
        if (id >= 0) {
            res.send(commentsCOC.list[id])
        }
        else {
            res.send({ Status: "Can't found !!" })
        }

    })

    .put((req, res) => {
        let date = new Date().toDateString()
        const commentId = req.params.comment_id
        const id = commentsCOC.list.findIndex(item => +item.id === +commentId)
        if (id >= 0) {
            commentsCOC.list[id].name = req.body.name
            commentsCOC.list[id].comment = req.body.comment
            commentsCOC.list[id].date = date

            res.send(commentsCOC)
        }
        else {
            res.send({ Status: "Can't found !!" })
        }

    })

    .delete((req, res) => {
        const commentId = req.params.comment_id
        const id = commentsCOC.list.findIndex(item => +item.id === +commentId)
        if (id >= 0) {
            commentsCOC.list = commentsCOC.list.filter(item => +item.id !== +commentId)
            res.send(commentsCOC)
        }
        else {
            res.send({ Status: "Can't found !!" })
        }

    })

// Error Handler
app.use((err, req, res, next) => {
    let statusCode = err.status || 500
    res.status(statusCode);
    res.send({
        error: {
            status: statusCode,
            message: err.message,
        }
    });
});

// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`))

