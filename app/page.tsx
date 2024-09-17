"use client";

import DetailCard from "@/components/DetailCard";
import CourseOffering from "@/components/pages/CourseOffering";
import Reviews from "@/components/pages/Reviews";
import MentorCard from "@/components/utils/MentorCard";
import ProfileCardGroup from "@/components/utils/ProfileCardGroup";

import "../components/utils/fonts.css";

export default async function Home() {
  return (
    <main className="w-full h-fit flex flex-col items-center gap-6">
      <MentorCard />

      <section className="flex flex-col items-center mb-10">
        <CourseOffering />
      </section>

      <section className="w-full flex flex-col items-center mb-10">
        <DetailCard />
      </section>

      <section className="w-full flex flex-col items-center mb-20 mx-auto">
        <h1 className="text-4xl text-primary text-center font-medium mb-10 outfit">
          Impact of my mentorship
        </h1>
        <Reviews />
      </section>

      <section className="w-full flex flex-col items-center mt-10 mb-20">
        <h1 className="text-4xl text-primary outfit font-medium text-center mb-10">
          People also liked their mentorship
        </h1>
        <ProfileCardGroup />
      </section>
    </main>
  );
}
