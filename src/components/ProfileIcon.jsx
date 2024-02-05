import React from 'react'

const ProfileIcon = ({profile}) => {
  return (
    <div className="aspect-square h-[32px] border overflow-hidden border-[#000000] rounded-full " >
        <img src={profile} />
    </div>
  )
}

export default ProfileIcon