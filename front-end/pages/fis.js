import Head from 'next/head'
import Layout from '../components/layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import authFis from '../components/authfis'

const URL = `http://localhost/api/fis`

const Fis = ({ token }) => {

    const [stdcomments, setStdcomments] = useState({
        list: [
            { id: 1, name: 'sirinyapat', comment: "GOOD", date: 'Mon Apr 19 2021', time: '07:22:13 PM' },
            { id: 2, name: 'jaturon', comment: "VERY GOOD", date: 'Tue Apr 20 2021', time: '07:22:13 PM' },
        ]
    })

    const [stdcomment, setStdcomment] = useState([])
    const [name, setname] = useState('')
    const [comment, setcomment] = useState('')

    useEffect(() => {
        showstdcomment()
    }, [])

    const showstdcomment = async () => {
        try {
            // console.log('token: ', token)
            const fiscomments = await axios.get(URL)
            // console.log('user: ', users.data)
            setStdcomments(fiscomments.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    // const getStdcomment = async (id) => {
    //     let stdcomment = await axios.get(`${URL}/${id}`)
    //     setStdcomment(stdcomment.data)
    // }

    const addStdcomment = async (comment) => {
        let stdcomment = await axios.post(URL, { comment })
        setStdcomments(stdcomment.data)
    }

    const updateStdcomment = async (id) => {
        let stdcomment = await axios.put(`${URL}/${id}`, { comment })
        setStdcomments(stdcomment.data)
    }

    const deleteStdcomment = async (id) => {
        let stdcomment = await axios.delete(`${URL}/${id}`)
        setStdcomments(stdcomment.data)
    }

    const printStdcomments = () => {
        return (stdcomments.list.map((item, index) =>
        (
            <div className='flex flex-wrap w-1/4 h-1/2 m-5 mt-8' key={index}>
                <div className='w-full h-full pl-2 -mt-5 break-all overflow-auto border-4 border-green-600 rounded-lg'>
                    <a className='font-semibold'>User : </a> {index + 1} <br />
                    {item.comment} <br />
                    <a className='font-semibold'>Date : </a> {item.date} <br />
                    <a className='font-semibold'>Time : </a> {item.time}
                </div>
                <div className='flex justify-end w-full mt-2'>
                    <button className='border-2 border-green-900 bg-green w-16 h-8 rounded-md hover:bg-babygreen focus:outline-none' onClick={() => updateStdcomment(item.id)}>Edit</button>
                    <button className='border-2 border-red-900 bg-darkred w-16 h-8 ml-4 rounded-md hover:bg-babyred focus:outline-none' onClick={() => deleteStdcomment(item.id)}>Delete</button>
                </div>
            </div>
        )
        ))
    }

    return (
        <Layout>
            <Head>
                <title>Online Community Blog</title>
            </Head>

            <div className='md:flex flex-col fixed justify-start items-center h-screen w-screen mt-10'>
                <div className=' border-double border-8 border-yellow-800 p-4 rounded-lg bg-sunglow'>
                    <h1 className='text-3xl font-bold tracking-wider uppercase text-yellow-800'>Faculty of International Studies</h1>
                </div>

                <div className='flex flex-wrap justify-evenly w-4/5 h-2/5 mt-10 overflow-auto'>
                    {printStdcomments()}
                </div>

                <div className='flex flex-row items-end w-2/5 h-1/6 mt-10'>
                    <textarea className='w-full h-full resize-none rounded-xl bg-sunglow border-transparent border-4 border-yellow-800 focus:outline-none 
                        focus:ring-4 focus:ring-yellow-600 focus:border-transparent pl-2 placeholder-gray-500 placeholder-opacity-100'
                        placeholder="Comment ..." onChange={(e) => setcomment(e.target.value)} />
                    <button className='w-28 h-10 ml-4 font-bold border-4 border-yellow-800 focus:outline-none rounded-md hover:bg-sunglow'
                        onClick={() => addStdcomment(comment)}>
                        Comment
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default authFis(Fis)
export function getServerSideProps({ req, res }) {
    // console.log("token from cookie: ",cookie.get("token"))
    // console.log('req: ', req.headers)
    return { props: { token: req.cookies.token || "" } };
}