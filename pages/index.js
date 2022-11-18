import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Home() {
  return (
    //HTML
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"
  >
    <source src="videoplayback.mp4" type="video/mp4" />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video>
      <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"
  >
    <source src="video.mp4" type="video/mp4" />
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video>

  <script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
      
=======
  <script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
      //mess
      <main>
        <Header title="Welcome to my app!" />
        //EDITED
        <script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
        <video
          id="my-video"
          class="video-js"
          controls
          preload="auto"
          width="640"
          height="264"
          poster="MY_VIDEO_POSTER.jpg"
          data-setup="{}"
      >
          <source src="/pages/video.mp4" type="video/mp4" />
          <source src="pages/video.mp4" type="video/mp4" />
          <source src="video.mp4" type="video/mp4" />
          <p class="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank"
            >supports HTML5 video</a
          >
    </p>
  </video>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    //HTML
  
      <Footer />
    </div>
    //HTML
  )
}
