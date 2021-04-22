import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'


const URL = `http://localhost/api/login`

export default function Login({ token }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')
  const [checktoken, setCheckbox] = useState('')
  const router = useRouter()

  const login = async (req, res) => {
    try {
      let result = await axios.post(URL,
        { username, password, checktoken },
        { withCredentials: true })
      console.log('result: ', result)
      console.log('result.data:  ', result.data)
      console.log('token:  ', token)
      router.push('/menu')
      // setStatus(result.status + ': ' + result.data.user.username)
    }
    catch (e) {
      console.log('error: ', JSON.stringify(e.response))
      // setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
      setStatus('User or Password invalid')
    }
  }

  const copyText = () => {
    navigator.clipboard.writeText(token)
    console.log("copytoken:", token);
  }



  return (
    <Layout>
      <Head>
        <title>Online Community Blog</title>
      </Head>
      <div className='flex flex-col fixed justify-start items-center h-screen w-screen'>
        <div className='flex flex-col justify-center items-center w-1/4 h-24 mt-24 rounded-t-xl bg-bluesea divide-y-2 divide-black '>
          <span className='text-xl  font-bold uppercase tracking-wider pb-1 text-center'>Log in</span>
          <span className='text-lg font-bold uppercase tracking-wide text-center pt-2'>From Admin</span>
        </div>
        <div className='flex flex-col justify-start items-center w-1/4 bg-egg rounded-b-xl shadow-xl'>
          <div className='flex flex-col justify-center items-start w-4/5 mt-8'>
            <label className='font-semibold'>Username</label>
            <input className='w-full h-8 mt-2 border-2 border-gray-500 ring ring-gray-400  
              rounded-md pl-2 focus:outline-none' placeholder='Foo'
              onChange={(e) => setUsername(e.target.value)} />
            <label className='mt-4 font-semibold'>Password</label>
            <input className='w-full h-8 mt-2 border-2 border-gray-500 ring ring-gray-400 
              rounded-md pl-2 focus:outline-none' type='password' placeholder='****'
              onChange={(e) => setPassword(e.target.value)} />
            <label className = 'mt-2 text-red-600 font-medium text-sm italic'>{status}</label>
            <div className='flex items-center mt-6 text-sm'>
              <input className='w-4 h-4' type='checkbox'
                onChange={(e) => setCheckbox(e.target.value)} />
              <label className='ml-2'>Remember Me</label>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center w-4/5 mt-5 pb-6'>
            <button className='w-full h-8 font-semibold border-2 border-blue-600 ring rounded-md 
              hover:bg-babyblue focus:outline-none' onClick ={login}>
              Log in
            </button>
            <div className='flex flex-row mt-6'>
              Don't have an account?
              <Link href='/register'>
                <a className='ml-2 font-semibold'>Register</a>
              </Link>
            </div>
          </div>
        </div>
        {/* <button onClick={copyText}> Copy token </button> */}

        <button onClick={copyText} className='flex justify-end items-center w-full mt-8 focus:outline-none'>
          <img className='mr-16 transition duration-700 transform hover:-translate-y-1 hover:scale-110' src="/top-secret.svg" />
        </button>

      </div>
    </Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
