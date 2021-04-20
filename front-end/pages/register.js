import Head from 'next/head'
import Layout from '../components/layout'

export default function Register({ token }) {

    return (
        <Layout>
            <Head>
                <title>Online Community Blog</title>
            </Head>
            <div className='flex flex-col fixed justify-start items-center h-screen w-screen mt-20'>
               
                <div className='flex flex-col justify-start items-center h-2/3 w-1/5 bg-bluesea rounded-xl shadow-xl'>
                    <div className='flex flex-col justify-start items-center w-full mt-4 bg-bluesea divide-y-2 divide-black '>
                        <span className='text-xl  font-bold uppercase tracking-wider pb-1 text-center'>Register</span>
                        <span className='text-lg font-bold uppercase tracking-wide text-center pt-2'>From Admin</span>
                    </div>
                    <div className = 'flex flex-col justify-center items-start mt-6'>
                        <label className='-mt-2'>Username</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 rounded-md pl-2 focus:outline-none' placeholder='Foo' />
                        <label className='mt-4'>E-mail</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500  rounded-md pl-2 focus:outline-none' placeholder='Foo@gmail.com' />
                        <label className='mt-4'>Password</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500  rounded-md pl-2 focus:outline-none' type='password' placeholder='****' />
                        <label className='mt-4'>Confirm Password</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500  rounded-md pl-2 focus:outline-none' type='password' placeholder='****' />
                    </div>
                        
                    <div className='mt-8 pb-2'>
                        <button className='font-semibold border-4 ring border-blue-600 p-2 rounded-xl hover:bg-babyblue focus:outline-none'>Create Account</button>
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
