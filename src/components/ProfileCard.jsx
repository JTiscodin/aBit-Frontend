import React from "react";

const ProfileCard = () => {
  return (
    <div className=" absolute bottom-[-3rem] mx-[4rem] w-[571px] h-[234px] overflow-hidden flex bg-nav-background rounded-[24px]">
      <img className="w-[234px]" src="/images/profile-img.jpeg" />
      <div className="flex flex-col mx-7 mt-6 gap-6">
        <div className="flex gap-7 items-center">
          <h1 className="text-[24px] font-bold">DAN MACE</h1>
          <p className="text-[#696969] ">/Johny_Films/</p>
        </div>
        <div className="text-[#696969] font-[14px] ">
          <h1 className="font-bold">Bio</h1>
          <p>
            Simply a film fan creating original content for YouTube. Let
            Collaborate.
          </p>
        </div>
        <div className="w-[256px] h-[29px] overflow-hidden border border-[#000000] bg-[#000000] rounded-[4px] opacity-[65%]">
          <button className="w-[129px] rounded-[4px]  h-[29px] border border-[#000000]  text-black bg-white">
            Creator
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
