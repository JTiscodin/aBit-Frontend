import React from "react";
import ProfileIcon from "./ProfileIcon";

const Nav = ({profile}) => {
  return (
    <div className="bg-nav-background opacity-[98%] h-[110px] flex justify-between items-center border border-[#000000]">
      <div className="mx-[123px] text-[24px] text-[#292D32] font-bold">
        aBit
      </div>
      <div className="flex items-center gap-5 mx-[68px]">
        <button className="text-[#764CC2] text-[12px] font-bold flex items-center text-center h-[39px]   border-[2px] pt-[18px] pr-[22px] pb-[18px] pl-[22px] rounded-[60px] gap-[10px] border-[#764CC2]">
          Share new Video
        </button>
        <img
          className="aspect-square h-[28px]  opacity-[32%]"
          src="/images/wallet-icon.png"
        />
        <img
          className="aspect-square h-[36px]  opacity-[32%]"
          src="/images/bell-icon.png"
        />
        <div className="flex items-center gap-2">
          <ProfileIcon profile={profile} />
          <img
            className="aspect-square h-[24px]  opacity-[32%]"
            src="/images/options-icon.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
