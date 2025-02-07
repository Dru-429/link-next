"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {

  const [handel, setHandel] = useState("")
  const router = useRouter()

  return (
    <main className="bg-zinc-950 text-zinc-100 min-h-screen min-w-screen ">
      <section className="md:mx-[10vw] md:grid grid-cols-2 min-h-screen mt-20">
        <div className="flex flex-col items-start justify-center gap-5 ">
          <p className="text-6xl text-yellow-500 font-bold leading-none tracking-tight">
            Everything you are. In one, simple link in bio.
          </p>
          <p className="text- text-yellow-500 font-medium text-md">
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>

          <div className="flex justify-start items-center  gap-5 mt-10">
            <input
              type="text"
              placeholder="your handle"
              value={handel}
              onChange={ (e) => {
                return(
                  setHandel(e.target.value)
                )
              }}
              className="px-2 py-1 rounded-lg focus:outline-yellow-500 bg-zinc-100 h-8 border-none text-zinc-900"
            />

            <button 
              className="px-4 py-1 rounded-2xl text-zinc-950 bg-yellow-300 hover:bg-yellow-500 hover:scale-[1.09]"
              onClick={ () => {
                router.push(`/generate?handel=${handel}`)
              }}
            >
              Claim now
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center md:pl-10">
          <img src={"home.png"} alt="image" />
        </div>
      </section>

      <section className="min-h-screen bg-yellow-300"></section>
    </main>
  );
};

export default page;
