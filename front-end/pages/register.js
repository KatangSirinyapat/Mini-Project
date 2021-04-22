import Head from 'next/head'
import Layout from '../components/layout'
import {useState} from 'react'
import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/router'

const URL = `http://localhost/api/register`

export default function Register({ token }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')
    const [confpassword, setConfpassword] = useState('')
    const router = useRouter()

    const register = async (req, res) => {
        try {
            let result = await axios.post(URL,
                { username, email, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            // setStatus(result.data.message)
        }
        catch (e) {
            console.log(e)
        }

    }

    const checkPassword = () =>{
        if(password === confpassword && password.length != 0)
        {
            console.log("True");
            setStatus("")
            register()
            router.push('/login')
        }
        else
        {
            console.log("Password isn't Same ");
            setStatus('Enter Password agains')

        }
    }

    return (
        <Layout>
            <Head>
                <title>Online Community Blog</title>
            </Head>
          
            <div className='flex flex-col fixed justify-start items-center h-screen w-screen'>  
                <div className='flex flex-col justify-center items-center w-1/4 h-24 mt-16 rounded-t-xl 
                bg-bluesea divide-y-2 divide-black '>
                    <span className='text-xl  font-bold uppercase tracking-wider pb-1 text-center'>Register</span>
                    <span className='text-lg font-bold uppercase tracking-wide text-center pt-2'>From Admin</span>
                </div>
                <div className='flex flex-col justify-start items-center w-1/4 bg-egg rounded-b-xl shadow-xl'>
                    <div className='flex flex-col justify-center items-start w-4/5 mt-8'>
                        <label className='-mt-2 font-semibold'>Username</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring 
                            ring-gray-400 rounded-md pl-2 focus:outline-none' placeholder='Foo' 
                            onChange = {(e) => setUsername(e.target.value)}/>
                        <label className='mt-4 font-semibold'>E-mail</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring 
                            ring-gray-400  rounded-md pl-2 focus:outline-none' placeholder='Foo@gmail.com' 
                            onChange = {(e) => setEmail(e.target.value)}/>
                        <label className='mt-4 font-semibold'>Password</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring 
                            ring-gray-400 rounded-md pl-2 focus:outline-none' type='password' placeholder='****' 
                            onChange = {(e) => setPassword(e.target.value)}/>
                        <label className='mt-4 font-semibold'>Confirm Password</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring 
                            ring-gray-400 rounded-md pl-2 focus:outline-none' type='password' placeholder='****' 
                            onChange = {(e) => setConfpassword(e.target.value)}/>
                        <label className = 'mt-2 text-red-600 font-medium text-sm italic'>{status}</label>
                    </div>
                    <div className='flex w-4/5 mt-8 pb-8'>  
                        <button className='w-full h-8 font-semibold border-2 border-blue-600 ring rounded-md 
                            hover:bg-babyblue focus:outline-none' onClick={checkPassword}>
                            Create Account
                        </button>
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
