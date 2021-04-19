import Head from 'next/head'
import Layout from '../components/layout'

export default function Menu({ token }) {

  return ( 
    <Layout>
    <Head>
      <title>Online Community Blog</title>
    </Head>

    <div className = 'md:flex flex-col fixed justify-start items-center h-screen w-screen mt-10'>
        <div className = ' border-double border-8 border-pink-800 p-4 rounded-lg bg-palepink'>
            <h1 className = 'text-3xl font-bold tracking-wider uppercase text-pink-800'>Faculty of Hospitality and Tourism</h1> 
        </div>
        <div className = 'flex flex-row items-end w-2/5 h-1/6 mt-96'>
            <textarea className = 'w-full h-full resize-none rounded-xl border-transparent border-4 border-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-600 focus:border-transparent pl-2 placeholder-gray-500 placeholder-opacity-100' placeholder = "Comment ..."/>
            <button className = 'w-24 h-10 ml-4 font-bold border-4 border-pink-800 focus:outline-none rounded-md hover:bg-palepink'>Enter</button> 
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