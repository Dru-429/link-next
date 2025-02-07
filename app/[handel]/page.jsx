import React from "react";
import Link from "next/link";
import clientPromise from "@/lib/mongodb";

const page = async ({ params }) => {

  const { handel } = params

  const client = await clientPromise
  

  const item = {
    _id: {
      $oid: "6729e97390cf30c8f66c4c68",
    },
    links: [
      {
        link: "https://www.instagram.com/codewithharry/?hl=en",
        linktext: "Instagram",
      },
      {
        link: "https://www.codewithharry.com",
        linktext: "Website",
      },
      {
        link: "https://www.YouTube.com/codewithharry/?hl=en",
        linktext: "YouTube",
      },
    ],
    handle: "Dru",
    pic: "https://avatars.githubusercontent.com/u/146123722?s=400&u=8d1f74e617db5be4e02507c09758b624fed4bdac&v=4",
    desc: "Hisashiburi...Watashi wa Dru 💫 I'm Dru, passionate frontend developer from India"
  };

  return (
    <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">

      {item && (
        <div className="photo flex justify-center flex-col items-center gap-4">
          <img src={item.pic} alt="profile-pic" className="h-[10vh] w-[10vh] rounded-full" />
          <span className="font-bold text-xl">{handel}</span>
          <span className="desc w-80 text-center text-zinc-900">{item.desc}</span>
          <div className="links">
            {item.links.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  <div className="bg-purple-100 py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-3 text-zinc-900">
                    {item.linktext}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};

export default page;
