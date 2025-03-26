import Image from "next/image";
import Signup from '../lib/images/image.jpg'

export default function Home() {
  return (
    <>
        <div className="w-full relative mt-13 bg-linear-to-b from-blue-200 to-blue-100">
      <div className="flex justify-center">
          <h2>MacBook Air</h2>

      </div>
    </div>
                <div className="w-full md:m-10 md:mx-auto md:w-2xl">
              <div className="m-2 p-1 bg-zinc-900 rounded-md flex flex-col md:flex-row items-center">
              <Image className="object-cover md:object-fit h-60 md:w-1/3 
              rounded-md hover:scale-102 transform  duration-200" src={Signup} alt="val"/>
                  <div className="max-w-xs mt-5 w-full md:ml-5 md:w-2/3">
                    <div className="text-xl text-zinc-100 font-semibold  text-center md:text-left"><h1>Get diet and fitness tips on your inbox</h1></div>
                    <div className="my-2 text-sm text-center md:text-left text-zinc-100 font-light"><p>Eat beter and exercise better</p></div>
                    <div className="flex flex-col md:flex-row">
                        <input placeholder="Enter Email" className="
                          w-full placeholder:text-xs placeholder:text-zinc-400 placeholder:text-center p-1 rounded-xl bg-zinc-700
                          text-center text-zinc-200 focus:outline-none m-0
                        "></input>
                        <div className="w-full mt-3 md:mt-0 md:ml-3 text-center bg-lime-500 text-sm text-black py-1 px-2 rounded-md hover:bg-zinc-800 hover:text-zinc-300">Submit</div>
                    </div>
                  </div>
              </div>
          </div>
          <div className="flex  items-center justify-center min-h-screen bg-slate-800 ">
            <div className="flex flex-col md:flex-row space-y-6 md:space-x-6 ">
              <div className="bg-slate-700 rounded-xl text-white">
                <div className="mt-3 mx-3 p-8 rounded-t-xl bg-slate-800">
                  <div className="text-center uppercase">Basic</div>
                  <h2 className="font-serif text-5xl text-center mt-10">100GB</h2>
                </div>
              </div>
              <div>g</div>
              <div>g</div>
            </div>
          </div>
    </>

  );
}
