import Head from 'next/head' 
import Layout from '../components/layout' 
import Link from 'next/link'

export default function Home({ token }) {
 
  return (
    <Layout>
    <Head>
        <title>Online Community Blog</title>
    </Head>
         
      <div className = 'flex flex-col fixed justify-center items-center h-screen w-screen'>
        <div className = 'flex flex-col -mt-28 font-bold uppercase text-5xl text-center p-8'>
          <a className = 'animate-pulse'>Online Community Blog</a>
          <a className = 'animate-pulse mt-8'>PSU PHUKET</a>   
        </div>
          <div className = 'flex justify-around md:w-96 text-lg mt-8'>
            <Link href = '/login'>
              <button className = 'w-36 h-14 font-semibold border-blue-600 rounded-lg bg-babyblue hover:bg-whiteblue shadow-lg'>Log in</button>
            </Link>
            <Link href = '/register'>
              <button className = 'w-36 h-14 font-semibold border-blue-600 rounded-lg bg-babyblue hover:bg-whiteblue shadow-lg'>Register</button> 
            </Link>
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
