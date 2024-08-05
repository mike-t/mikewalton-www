import { type NextPage } from "next";
import Link from "next/link";
import Image from 'next/image';
import profilePic from '../img/avatar-mikewalton.png';

const Home: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-dark to-black">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Image
            src={profilePic}
            alt="Author be wishing he look like his avatar"
            // width={500} automatically provided
            // height={500} automatically provided
            placeholder="blur" // Optional blur-up while loading
            className="animate-bounce once hover:animate-pulse" 
          />
          <h1 className="antialiased text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] font-special">
            Mike <span className="text-pink">Walton</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="#"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">LinkedIn →</h3>
              <div className="text-lg">
              Bacon ipsum dolor amet boudin burgdoggen pork loin bresaola.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="#"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">GitHub →</h3>
              <div className="text-lg">
              Pig pork belly ribeye shank buffalo venison.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;