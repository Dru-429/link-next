"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const generate = () => {
  //   const [link, setLink] = useState("");
  //   const [linkText, setLinkText] = useState("");

  const [handel, setHandel] = useState("");
  const [picture, setPicture] = useState("");
  const [links, setLinks] = useState([
    {
      link: "",
      linkText: "",
    },
  ]);

  const handelChangeLink = (currIndex, currLink, currLinkText) => {
    setLinks((prev) => {
      const updatedList = [...prev];
      updatedList[currIndex] = { link: currLink, linkText: currLinkText };

      return updatedList;
    });
  };

  const addLink = () => {
    setLinks((prev) => [...prev, { link: "", linkText: "" }]);
  };

  const submitLinks = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const raw = JSON.stringify({
        links,
        handler: handel,
        pic: picture,
      });
  
      const response = await fetch("http://localhost:3000/api/add", {
        method: "POST",
        headers: myHeaders,
        body: raw,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error submitting data.");
      }
  
      const result = await response.json();
  
      if (result.success) {
        toast.success(result.message);
        // Clear form fields after successful submission
        setLinks([{ link: "", linkText: "" }]); 
        setHandel("");
        setPicture("");
      } else {
        toast.error(result.message);
      }
  
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("An error occurred while submitting data.");
    }
  };
  
  return (
    <div className="grid grid-cols-2 w-full min-h-screen">
      <div className="col-1 border-yellow-300 border-r-2 rounded-r-xl max-h-screen overflow-y-auto flex flex-col gap-10 justify-center items-center">
        <h1 className="font-bold text-5xl text-yellow-400 capitalize tracking-tighter leading-none ">
          claim your own Link Next
        </h1>
        <ToastContainer />

        <div className="flex flex-col justify-start items-start text-lg gap-7 ">
          {/* //step1: claiming handel  */}
          <div className="flex flex-col gap-3 ">
            <h2 className="font-medium text-yellow-400 capitalize tracking-tight leading-none">
              Step 1: Claim your handel
            </h2>
            <input
              type="text"
              placeholder="Enter your handel "
              onChange={(e) => setHandel(e.target.value)}
              value={handel}
              className="px-4 py-1 mx-10 bg-yellow-50 focus:outline-yellow-400 rounded-2xl text-zinc-900 text-sm "
            />
          </div>

          {/* //step2: adding links*/}
          <div className="flex flex-col gap-3 ">
            <h2 className="font-medium text-yellow-400 capitalize tracking-tight leading-none ">
              Step 2: Add Links
            </h2>

            {links &&
              links.map((item, index) => {
                return (
                  <div key={index} className="flex items-start gap-5 mx-10">
                    <input
                      type="text"
                      placeholder="Enter link text"
                      onChange={(e) =>
                        handelChangeLink(index, item.link, e.target.value)
                      }
                      //   value={item.linkText}
                      className="px-4 py-1 bg-yellow-50 focus:outline-yellow-400 rounded-2xl text-zinc-900 text-sm "
                    />
                    <input
                      type="text"
                      placeholder="Enter link"
                      onChange={(e) =>
                        handelChangeLink(index, e.target.value, item.linkText)
                      }
                      //   value={item.link}
                      className="px-4 py-1 bg-yellow-50 focus:outline-yellow-400 rounded-2xl text-zinc-900 text-sm "
                    />
                  </div>
                );
              })}

            <button
              className="px-4 py-1 mx-10 w-fit text-sm rounded-2xl text-zinc-950 bg-yellow-300 hover:bg-yellow-500 hover:scale-[1.09]"
              onClick={() => addLink()}
            >
              Add Link +
            </button>
          </div>

          {/* //step3: done*/}
          <div className="flex flex-col gap-3 ">
            <h2 className="font-medium text-yellow-400 capitalize tracking-tight leading-none">
              Step 3: Add picture url & submit
            </h2>
            <input
              type="text"
              placeholder="Enter your image url "
              onChange={(e) => setPicture(e.target.value)}
              value={picture}
              className="px-4 py-1 mx-10 bg-yellow-50 focus:outline-yellow-400 rounded-2xl text-zinc-900 text-sm "
            />

            <button
              className=" mt-10 px-4 py-1 mx-10 w-fit text-sm rounded-2xl text-zinc-950 bg-yellow-300 hover:bg-yellow-500 hover:scale-[1.09]"
              onClick={() => {
                submitLinks();
              }}
            >
              Done...
            </button>
          </div>
        </div>
      </div>

      <div className="col-2 hidden md:flex justify-center items-end pb-10 box-border h-screen">
        <img
          src="generate.png"
          alt="generate-img"
          className="w-[70%] h-[80%] object-fill bg-yellow-300 rounded-lg"
        />
      </div>
    </div>
  );
};

export default generate;
