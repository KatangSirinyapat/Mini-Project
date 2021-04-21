import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/navbar'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head> 
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@200;300;700&family=Roboto+Mono:wght@700&display=swap" rel="stylesheet" />
        </Head>
        <body className = 'h-screen w-screen bg-gradient-to-b from-gray-50 to-gray-300'>
          <Navbar />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument