import Head from 'next/head' 
import Layout from '../components/layout' 

export default function Login({ token }) {
 
  return (
    <Layout>
    <Head>
        <title>Online Community Blog</title>
    </Head>

    </Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
