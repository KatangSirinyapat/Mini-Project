import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
// import styles from '../styles/Home.module.css'


export default function Home({ token }) {
 
  return (
    <Layout>
    <Head>
        <title>Online Community Blog</title>
    </Head>
     
      <div>
          <Navbar /> 
      </div>    
      <div className = 'flex flex-col justify-center items-center text-5xl md:w-auto md:h-auto font border-2 border-red-600'>
        <h2>Online Community Blog</h2>
        <h2>PSU PHUKET</h2>
      </div>
         
     
    </Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
