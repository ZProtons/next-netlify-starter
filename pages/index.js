import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Home() {
  return (
    <div>
      <h2>NextJs VideoPlayer - GeeksforGeeks</h2>
      <ReactPlayer url='https://www.youtube.com/watch?v=wWgIAphfn2U' />
    </div>
  )
}
