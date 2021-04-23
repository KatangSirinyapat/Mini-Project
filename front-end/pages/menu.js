import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Menu({ token }) {

  return (
    <Layout>
      <Head>
        <title>Online Community Blog</title>
      </Head>
      <div className = 'flex justify-center mt-14 text-4xl font-bold uppercase tracking-wider'>
        Online Community Blog</div>
      <div className = 'flex justify-center mt-4 text-md font-medium uppercase tracking-wider italic animate-pulse'>
        " Please select the faculty "</div>

      <div className='md:flex flex-row fixed justify-evenly items-start mt-36 h-screen w-screen'>  
      <Link href='/fis'>
          <a className='flex flex-col w-56 h-60 bg-sunglow shadow-lg rounded-lg transition duration-700 
            ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <div className='-m-10'>
              <img src="/pin.svg"/>
            </div>
             <div className= 'text-xl font-bold text-center pt-16 tracking-wider leading-relaxed'>
              Faculty of International Studies
             </div>
             <div className= 'text-3xl font-bold text-center pt-8 tracking-wider'>
               FIS
             </div>
          </a>
        </Link>
     
        <Link href='/fht'>
          <a className='flex flex-col w-56 h-60 bg-palepink shadow-lg rounded-lg transition duration-700 
            ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <div className='-m-10'>
              <img src="/aeroplane.svg"/>
            </div>
             <div className= 'text-xl font-bold text-center pt-16 tracking-wider leading-relaxed'>
               Faculty of Hospitality and Tourism  
             </div>
             <div className= 'text-3xl font-bold text-center pt-8 tracking-wider'>
               FHT
             </div>
          </a>
        </Link>

        <Link href='/fte'>
          <a className='flex flex-col w-56 h-60 bg-purple shadow-lg rounded-lg transition duration-700 
          ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <div className='-m-10'>
              <img src="/hiring.svg"/>
            </div>
             <div className= 'text-xl font-bold text-center pt-16 tracking-wider leading-relaxed'>
                Faculty of Technology and Environment
             </div>
             <div className= 'text-3xl font-bold text-center pt-8 tracking-wider'>
               FTE
             </div>
          </a>
        </Link>

        <Link href='/coc'>
          <a className='flex flex-col w-56 h-60 bg-red shadow-lg rounded-lg transition duration-700 
          ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <div className='-m-10'>
              <img src="/analytics.svg"/>
            </div>
             <div className= 'text-xl font-bold text-center pt-16 tracking-wider leading-relaxed'>
              College of Computing  
             </div>
             <div className= 'text-3xl font-bold text-center pt-16 tracking-wider'>
               COC
             </div>
          </a>
        </Link>
      </div>

    </Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token"))
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
