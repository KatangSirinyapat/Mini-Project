import Head from 'next/head'
import Layout from '../components/layout'
import { useEffect, useState } from 'react'
import axios from 'axios'


import useSWR, { mutate } from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

const URL = `http://localhost/api/fht`

export default function Fht({ token }) {

  const [comment, setcomment] = useState('')



  const { data, error } = useSWR(URL, fetcher, { revalidateOnFocus: false })
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log('Home: ', data)


  const showstdcomment = async () => {
    try {
      // console.log('token: ', token)
      const fiscomments = await axios.get(URL)
      // console.log('user: ', users.data)
      setStdcomments(fiscomments.data)
    }
    catch (e) {
      console.log(e)
    }
  }

  const addStdcomment = async (comment) => {
    let stdcomment = await axios.post(URL, { comment })

    mutate(URL)
  }

  const printStdcomments = (stdcomments) => {
    return (stdcomments.map((item, index) =>
    (
      <div key={index} className='flex flex-wrap w-1/4 h-1/2 m-5 mt-8' >
        <div className='w-full h-full pl-2 -mt-5 break-all overflow-auto border-4 border-green-600 rounded-lg'>
          <a className='font-semibold'>Blog : </a> {index + 1} <br />
          <a className='font-semibold'>User : </a> {item.id} <br />
          {item.comment} <br />
          <a className='font-semibold'>Date : </a> {item.date} <br />
          <a className='font-semibold'>Time : </a> {item.time}
        </div>
      </div>
    )
    ))
  }

  return (
    <Layout>
      <Head>
        <title>Online Community Blog</title>
      </Head>

      <div className='md:flex flex-col fixed justify-start items-center h-screen w-screen mt-10'>
        <div className=' border-double border-8 border-pink-800 p-4 rounded-lg bg-palepink'>
          <h1 className='text-3xl font-bold tracking-wider uppercase text-pink-800'>Faculty of Hospitality and Tourism</h1>
        </div>

        <div className='flex flex-wrap justify-evenly w-4/5 h-2/5 mt-10 overflow-auto'>
          {printStdcomments(data.list)}
        </div>

        <div className='flex flex-row items-end w-2/5 h-1/6 mt-10'>
          <textarea className='w-full h-full resize-none rounded-xl bg-palepink border-transparent border-4 border-pink-800 focus:outline-none 
              focus:ring-4 focus:ring-pink-600 focus:border-transparent pl-2 placeholder-gray-500 placeholder-opacity-100'
            placeholder="Comment ..." onChange={(e) => setcomment(e.target.value)} />
          <button className='w-28 h-10 ml-4 font-bold border-4 border-pink-800 focus:outline-none rounded-md hover:bg-palepink'
            onClick={() => addStdcomment(comment)}>
            Comment
          </button>
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