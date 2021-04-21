import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Contectus({ token }) {

    return (
        <Layout>
            <Head>
                <title>Online Community Blog</title>
            </Head>

            <div className='md:flex fixed justify-evenly items-start h-screen w-screen mt-20'>
                <div className = 'grid grid-flow-col w-3/4 grid-cols-2 grid-rows-2 gap-10'>
                    <div className='flex flex-col w-full h-60 bg-sunglow shadow-lg rounded-lg'>
                        <div className='text-2xl font-bold text-center pt-6 tracking-wider leading-relaxed'>
                            Faculty of International Studies 
                        </div>
                        <div className='flex flex-row items-center pl-10 pt-10 text-lg font-medium tracking-wider'>
                            <img className='-mt-3' src="/web-browser.svg" />
                            <a className='ml-4 -mt-3 bg-palepink rounded-lg w-2/5 h-8 pl-3 pt-1' href="https://www.fis.psu.ac.th/en/">FIS Website</a> 
                        </div>
                        <div className='flex flex-row items-center pl-10 pt-10 text-lg font-medium tracking-wider'>
                            <img className='-mt-3' src="/speech-bubble.svg" />
                            <a className='ml-4 bg-palepink rounded-lg w-2/5 h-8 pl-3 pt-1' href="https://www.facebook.com/fis.psu.ac.th">FIS FacebookPage</a> 
                        </div>
                    </div>

                    <div className='flex flex-col w-full h-60 bg-purple shadow-lg rounded-lg'>
                        <div className='text-2xl font-bold text-center pt-6 tracking-wider leading-relaxed '>
                            Faculty of Technology and Environment
                        </div>
                        <div className='flex flex-row items-center  pl-10 pt-10 text-lg font-medium tracking-wider'>
                            <img className='-mt-3' src="/web-browser.svg" />
                            <a className='ml-4 -mt-3 bg-whiteblue rounded-lg  w-2/5 h-8 pl-3 pt-1' href="https://te.psu.ac.th/">FTE Website</a> 
                        </div>
                        <div className='flex flex-row items-center  pl-10 pt-10 text-lg font-medium tracking-wider'>
                            <img className='-mt-3' src="/speech-bubble.svg" />
                            <a className='ml-4 bg-whiteblue rounded-lg  w-2/5 h-8 pl-3 pt-1' href="https://www.facebook.com/SAMO.FTE.PSUPK">FTE FacebookPage</a> 
                        </div>
                    </div>

                    <div className='flex flex-col w-full h-60 bg-palepink shadow-lg rounded-lg'>
                        <div className='text-2xl font-bold text-center pt-6 tracking-wider leading-relaxed'>
                            Faculty of Hospitality and Tourism 
                        </div>
                        <div className='flex flex-row items-center  pl-10 pt-10 text-lg font-medium tracking-wider'>
                            <img className='-mt-3' src="/web-browser.svg" />
                            <a className='ml-4 -mt-3 bg-sunglow rounded-lg  w-2/5 h-8 pl-3 pt-1' href="https://fht.psu.ac.th/?lang=th">FHT Website</a> 
                        </div>
                        <div className='flex flex-row items-center  pl-10 pt-10 text-lg font-medium tracking-wider'>
                            <img className='-mt-3' src="/speech-bubble.svg" />
                            <a className='ml-4 bg-sunglow rounded-lg  w-2/5 h-8 pl-3 pt-1' href="https://www.facebook.com/fht.psu.hkt">FHT FacebookPage</a> 
                        </div>
                    </div>

                    <div className='flex flex-col w-full h-60 bg-red shadow-lg rounded-lg'>
                        <div className='text-2xl font-bold text-center pt-6 tracking-wide leading-relaxed'>
                            College of Computing
                        </div>
                        <div className='flex flex-row items-center  pl-10 pt-10 text-lg font-medium tracking-wider'>
                            <img className='-mt-3'src="/web-browser.svg" />
                            <a className='ml-4 -mt-3 bg-babyred rounded-lg  w-2/5 h-8 pl-3 pt-1' href="https://computing.psu.ac.th/th/">COC Website</a> 
                        </div>
                        <div className='flex flex-row items-center  pl-10 pt-10 text-lg font-medium tracking-wider'>
                            <img className='-mt-3' src="/speech-bubble.svg" />
                            <a className='ml-4 bg-babyred rounded-lg  w-2/5 h-8 pl-3 pt-1' href="https://www.facebook.com/groups/316789945469085">COC FacebookPage</a> 
                        </div>
                    </div>

                </div>


            </div>
        </Layout >
    )
}

export function getServerSideProps({ req, res }) {
    // console.log("token from cookie: ",cookie.get("token"))
    // console.log('req: ', req.headers)
    return { props: { token: req.cookies.token || "" } };
}
