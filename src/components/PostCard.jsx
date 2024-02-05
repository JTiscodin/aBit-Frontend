import React from "react";

import { FaPlus } from "react-icons/fa";

const PostCard = ({ isPost }) => {
  return (
    <>
      {isPost ? (
        <div className=" relative w-[283px] mx-[4rem] mt-[4vh] flex justify-center items-center h-[312px] rounded-[24px] bg-[#D8D8D8] ">
          <FaPlus className="aspect-square opacity-20 h-[32px] w-[32px]" />
          <h1 className="text-[14px] absolute bottom-10 w-[222px] text-[#A0A0A0]">
            You havent uploaded any videos with aBit yet. Add now!
          </h1>
        </div>
      ) : (
        <div className="relative w-[283px] mt-[4vh] h-[312px] rounded-[24px] overflow-hidden">
          <img
            className="absolute object-cover  h-[312px]"
            src="/images/post-img.png"
          />
          <h1 className="absolute text-white m-4 font-bold">
            The Sound of Silence
          </h1>
          <div className=" text-[12px] m-4 gap bg-white/30 backdrop-blur-md h-[52px] left-[1.7%] w-[246px] rounded-[12px] gap-7 absolute text-white bottom-[2%] flex justify-center items-center">
            <div className="">
              <h1 className="font-light">Shares</h1>
              <p className="font-bold">317</p>
            </div>
            <div>
              <h1 className="font-light">Offered</h1>
              <p className="font-bold">75%</p>
            </div>
            <div>
              <h1 className="font-light">Raised</h1>
              <p className="font-bold">$9510</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostCard;
