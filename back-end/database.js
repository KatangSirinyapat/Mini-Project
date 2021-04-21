const bcrypt = require('bcrypt')

let users = {
    users: [
        { id: 1, username: 'sirinyapat', password: '$2b$10$0AsMSQaUB0AlLnKzgeUOfOE.hWUodtuR4NOU954XLVy2gy3lBWsdO', email: 'sirinyapat@gmail.com', checktoken: 'on' },
        { id: 2, username: 'jaturon', password: '$2b$10$0AsMSQaUB0AlLnKzgeUOfOE.hWUodtuR4NOU954XLVy2gy3lBWsdO', email: 'sirinyapat@gmail.com', checktoken: 'on'}
    ]
}

let commentsFIS = {
    list: [
        { id: 1, name: 'sirinyapat', comment: "สนุกน้า มาเรียนกันเยอะ ๆ ", date: 'Mon Apr 19 2021', time: '07:22:13 PM' },
        { id: 2, name: 'jaturon', comment: "พี่ ๆ รอน้องทุกคนอยู่นะน้อง ๆ 64", date: 'Tue Apr 20 2021', time: '07:22:13 PM' },
    ]
}


let commentsFHT = {
    list: [
        { id: 1, name: 'sirinyapat', comment: "FHT พี่ ๆ รอน้องอยู่ที่ห้องการบินทุกวันเลยนะ", date: 'Mon Apr 19 2021', time: '07:22:13 PM' },
        { id: 2, name: 'jaturon', comment: "อยากปัง ก็ต้องปังแล้วมั้ย พี่ ๆ รออยู่นะที่ FHT", date: 'Tue Apr 20 2021', time: '07:22:13 PM' },
    ]
}


let commentsFTE = {
    list: [
        { id: 1, name: 'sirinyapat', comment: "น้อง ๆ คนไหนมีคำถามก็สามารถ Commet ไว้ได้เลยนะ", date: 'Mon Apr 19 2021', time: '07:22:13 PM' },
        { id: 2, name: 'jaturon', comment: "พี่ครับ พี่ครับ ต้องเตรียมตัวยังไงบ้างครับ", date: 'Tue Apr 20 2021', time: '07:22:13 PM' },
    ]
}

let commentsCOC = {
    list: [
        { id: 1, name: 'sirinyapat', comment: "พี่ ๆ CoC รับน้องดุรึปล่าวครับ", date: 'Mon Apr 19 2021', time: '07:22:13 PM' },
        { id: 2, name: 'jaturon', comment: "กลัวโดนรับน้องหนักจังเลย แง แง", date: 'Tue Apr 20 2021', time: '07:22:13 PM' },
    ]
}


const SECRET = 'your_jwt_secret'
const NOT_FOUND = -1

exports.users = users
exports.commentsFIS = commentsFIS
exports.commentsFHT = commentsFHT
exports.commentsFTE = commentsFTE
exports.commentsCOC = commentsCOC

exports.SECRET = SECRET
exports.NOT_FOUND = NOT_FOUND

exports.setUsers = function(_users) { 
    users = _users;
}

exports.setcommentsFIS = function(_commentsFIS) {
    commentsFIS = _commentsFIS;
}

exports.setcommentsFHT = function(_commentsFHT) {
    commentsFHT = _commentsFHT;
}

exports.setcommentsFTE = function(_commentsFTE) {
    commentsFTE = _commentsFTE;
}

exports.setcommentsCOC = function(_commentsCOC) {
    commentsCOC = _commentsCOC;
}


// === validate username/password ===
exports.isValidUser = async (username, password) => { 
    const index = users.users.findIndex(item => item.username === username) 
    return await bcrypt.compare(password, users.users[index].password)
}

// return -1 if user is not existing
exports.checkExistingUser = (username) => {
    return users.users.findIndex(item => item.username === username)
}