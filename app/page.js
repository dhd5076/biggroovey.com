import Image from 'next/image'

export default function Home() {
  return (
    <main className="-auto">
      <div className="flex flex-col max-w-7xl backdrop-grayscale mx-auto">
        <nav className="w-full opacity-95 p-8 sm:flex shadow sm:justify-between bg-[url(/img/skyline.png)] bg-cover shadow-xl shadow-black/50 z-50">
          <h1 className="font-black my-auto text-6xl text-white mb-4 sm:mb-0 mr-6">
            Big Groovey
          </h1>
          <ul className="my-auto uppercase block text-white flex space-x-4 font-black text-sm md:text-lg">
            <a href="#music" className="pb-2 hover:underline">Music</a>
            <a href="#videos" className="pb-2 hover:underline">Videos</a>
            <a href="#photos" className="pb-2 hover:underline">Photos</a>
            <a href="#bio" className="pb-2 hover:underline">Bio</a>
            <a href="#contact" className="pb-2 hover:underline">Contact</a>
          </ul>
        </nav>
        <div className="backdrop-grayscale-0 bg-red-500 h-full w-full md:flex">
          <div className="relative md:w-1/2">
            <img src="/img/will.png" className="w-full object-cover h-full" alt="Big Groovey" />
            <div className="absolute bottom-0 w-full bg-black/75 p-4 flex justify-center items-center space-x-10">
              <a href="link_to_facebook" className="text-white text-3xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="link_to_twitter" className="text-white text-3xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/biggroovey/" className="text-white text-3xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="mr-0 w-full p-4 h-full">
            <h1 className="text-white font-black text-4xl pb-4" id="music"> Music </h1>
            <div className="musicFrame shadow-lg shadow-black/50 rounded-lg"><iframe src="https://embed.music.apple.com/us/album/look-at-me-now-2-deluxe/1612318961" allowfullscreen allow="encrypted-media; fullscreen; clipboard-write;"></iframe></div>
          </div>
        </div>
        <div className="md:flex">
          <div className="grow bg-white p-4 md:w-1/2">
            <h1 className="text-black font-black text-4xl pb-4" id="videos">Videos</h1>
            <div className="space-y-6">
              <div className="videoContainer"><iframe className="rounded-xl shadow-lg shadow-black/50" src="https://www.youtube.com/embed/aaFNi2onaEU" allowfullscreen scrolling="no" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"></iframe></div>
              <div className="videoContainer"><iframe className="rounded-xl shadow-lg shadow-black/50" src="https://www.youtube.com/embed/mU6F2243YlA?rel=0" allowfullscreen scrolling="no" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"></iframe></div>
            </div>
          </div>
          <div className="md:w-1/2 bg-black p-4">
            <h1 className="text-white font-black text-4xl pb-4" id="photos">Photos</h1>
            <div className="flex flex-wrap">
              <div className="w-1/2 p-2">
                <img src="/img/pic1.jpg" alt="Photo 1" className="object-cover w-full h-full rounded-lg border-4" />
              </div>
              <div className="w-1/2 p-2">
                <img src="/img/pic2.jpg" alt="Photo 2" className="object-cover w-full h-full rounded-lg border-4" />
              </div>
              <div className="w-1/2 p-2">
                <img src="/img/will.jpg" alt="Photo 3" className="object-cover w-full h-full rounded-lg border-4" />
              </div>
              <div className="w-1/2 p-2">
                <img src="/img/pic3.jpg" alt="Photo 4" className="object-cover w-full h-full rounded-lg border-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-500 p-2 text-center">
          <small className="text-xs">Made With &#x2764; By <a href="https://dylandunn.me" className="underline">Dylan Dunn</a></small>
        </div>
      </div>
    </main>
  )
}
