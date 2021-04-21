import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Register({ token }) {

    return (
        <Layout>
            <Head>
                <title>Online Community Blog</title>
            </Head>
            <div className='flex flex-col fixed justify-start items-center h-screen w-screen'>
                <div className='flex flex-col justify-center items-center w-1/4 h-24 mt-16 rounded-t-xl bg-bluesea divide-y-2 divide-black '>
                    <span className='text-xl  font-bold uppercase tracking-wider pb-1 text-center'>Register</span>
                    <span className='text-lg font-bold uppercase tracking-wide text-center pt-2'>From Admin</span>
                </div>
                <div className='flex flex-col justify-start items-center w-1/4 bg-egg rounded-b-xl shadow-xl'>
                    <div className='flex flex-col justify-center items-start w-4/5 mt-8'>
                        <label className='-mt-2 font-semibold'>Username</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring ring-gray-400 rounded-md pl-2 focus:outline-none' placeholder='Foo' />
                        <label className='mt-4 font-semibold'>E-mail</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring ring-gray-400  rounded-md pl-2 focus:outline-none' placeholder='Foo@gmail.com' />
                        <label className='mt-4 font-semibold'>Password</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring ring-gray-400 rounded-md pl-2 focus:outline-none' type='password' placeholder='****' />
                        <label className='mt-4 font-semibold'>Confirm Password</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring ring-gray-400 rounded-md pl-2 focus:outline-none' type='password' placeholder='****' />
                    </div>
                    <div className='flex w-4/5 mt-8 pb-8'>
                        <Link href = '/login'>
                            <button className='w-full h-8 font-semibold border-2 border-blue-600 ring rounded-md hover:bg-babyblue focus:outline-none'>Create Account</button>
                        </Link>
                        
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
