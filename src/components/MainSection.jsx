import React from "react";
import PostCard from "./PostCard";

let stats = [
  { num: 1, text: "Shared Videos" },
  { num: "$9510", text: "Fund Raised" },
  { num: 317, text: "Co-owner community" },
  { num: "$3804", text: "Co-owner Earrings" },
];

const MainSection = () => {
  return (
    <div className="py-[8vw] w-full border-b-2">
      <div className="flex mx-[4rem] items-center justify-between">
        <div>
          <h1 className="text-3xl">Releases</h1>
          <p className="text-[#565656] ">
            Videos that you upload in collaboration with aBit appear here
          </p>
        </div>
        <div className="flex items-center gap-[3vw] ">
          {stats.map((e, i) => {
            return (
              <div key={i} className="flex items-center gap-5">
                <div className=" h-[61px] w-[0px] opacity-40 border border-[#7A7A7A] "></div>
                <div className="w-[70px]">
                  {" "}
                  <h1 className=" text-[#565656] font-bold "> {e.num} </h1>
                  <p className="text-[14px] font-light mt-2"> {e.text} </p>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex ">
        <PostCard isPost />
        <PostCard />
      </div>
    </div>
  );
};

export default MainSection;
