import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full md:w-[80vw] px-4 py-2 flex justify-between items-center bg-zinc-100 text-zinc-950 rounded-3xl fixed top-10 left-0 md:left-[10vw]">

      <div className="flex gap-20 justify-center">

        <h1 className="text-xl text-yellow-500 font-extrabold">LinkNext</h1>

        <ul className="flex gap-10 justify-center items-center">
          {
          ["templates", "discover", "about", "pricing"].map( (item, index) => {
            return(
              <li 
                key={index}
                className="capitalize text-sm font-bold cursor-pointer text-zinc-600 hover:text-zinc-950"
              >
                <Link href={"/"}>
                  {item}
                </Link>
              </li>
            )
          })
          }
        </ul>
      </div>

      <div className="flex items-center gap-10">
          <Link href={"/"}>
            Login
          </Link>
          <Link 
            href={"/"}
            className="px-4 py-1 rounded-2xl text-zinc-950 bg-yellow-300 hover:bg-yellow-500 hover:scale-[1.09] "
          >
            Sign in
          </Link>
      </div>
    </div>
  );
};

export default Navbar;
