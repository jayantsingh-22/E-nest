// src/components/ProfileCard.tsx
import React from 'react';

import "./fonts.css";

type ProfileCardProps = {
  name: string;
  title: string;
  experience: string;
  imageUrl: string;
  bgColor: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, experience, imageUrl, bgColor }) => {
  return (
    <div className="relative w-[17rem] h-[26rem] rounded-2xl overflow-hidden shadow-lg p-4 bg-white">
      {/* Ellipse Background */}
      <div className={`absolute top-0 left-0 right-0 h-32 ${bgColor} rounded-b-[50%]`}></div>
      
      <div className="flex justify-center mt-10 mb-4 relative z-10">
        <img className="w-[8rem] h-[8rem] rounded-full object-cover border-4 border-white" src={imageUrl} alt={name} />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-3">{name}</h2>
        <p className="text-gray-500 text-sm font-semibold mb-4">{title}</p>
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-sm font-medium text-gray-500 bg-white-100
          border-[1px] border-gray-500 rounded-full mb-3">{experience}</span>
        </div>
        <button className="w-[11rem] mt-4 bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 text-sm font-semibold">
          Know More
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
