import React from 'react';
import ProfileCard from './ProfileCard';

const profileData = {
  name: "Chatur Ramlingam",
  title: "Prof. at FSSAI",
  experience: "10+ Years",
  imageUrl: "/assets/Chatur.png"
};

const ProfileCardGroup: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <ProfileCard {...profileData} bgColor="bg-mentorColor1" />
      <ProfileCard {...profileData} bgColor="bg-mentorColor2" />
      <ProfileCard {...profileData} bgColor="bg-mentorColor3" />
      <ProfileCard {...profileData} bgColor="bg-mentorColor4" />
    </div>
  );
};

export default ProfileCardGroup;
