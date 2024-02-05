import React from "react";
import ProfileCard from "./ProfileCard";


const BannerSection = () => {
  return (
    <div className="relative">
        <ProfileCard  />
      <div className="w-full h-[420px] overflow-hidden">
        <img src="/images/banner.png" className="mt-[-200px]" />
      </div>
      <div className="w-full  flex justify-center items-center font-gloria-hallelujah-regular text-[#FFFFFF] text-[24px] h-[85px] bg-[#292828]">
        John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill /
        Creator / Moved to NYC / 27.11.22 / Live now / John Bill /
      </div>
    </div>
  );
};

export default BannerSection;
