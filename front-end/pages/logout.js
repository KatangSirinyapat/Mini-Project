import Head from 'next/head'
import Layout from '../components/layout'
import { useState, useEffect } from 'react'
import axios from 'axios'


const URL = `http://localhost/api/logout`

export default function logout({ token }) {

    const [status, setStatus] = useState('')

    useEffect(() => {
        logout()
    }, [])

    const logout = async () => {
        console.log('remove token: ', token)
        let result = await axios.get(URL, { withCredentials: true })
        setStatus("Logout successful")
    }

    return (
        <Layout>
            <Head>
                <title>Online Community Blog</title>
            </Head>
            <div className='flex flex-col fixed justify-center items-center h-screen w-screen'>
                <div className='text-center divide-y-2 divide-black -mt-28'>
                    <div className='pb-4'>
                        <h1 className='text-6xl font-bold animate-pulse uppercase'>Log out</h1>
                    </div>
                    <div className='pt-4'>
                        <h1 className='text-3xl font-bold animate-pulse'> {status} </h1>
                    </div>
                </div>

            </div>
        </Layout>
    )
}
export function getServerSideProps({ req, res }) {
    // console.log("token from cookie: ",cookie.get("token")) 
    // console.log('req: ', req.headers)
    return { props: { token: req.cookies.token || "" } };
}
