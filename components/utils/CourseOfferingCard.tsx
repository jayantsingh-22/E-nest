import { LuCalendarDays } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

import "./fonts.css";

const CourseOfferingCard = ({ title, cardClassName}) => {
  return (
    <div className="w-[25rem] h-[20rem] bg-white flex flex-col shadow-light rounded-3xl">
      <div className="pb-2 ml-6 mt-8 title outfit flex relative">{title}</div>
      <div className="outfit duration pb-2 ml-6 mt-1 relative">
        Duration 45 min
      </div>
      <div className="outfit duration pb-2 ml-6 mt-1 relative">
        {" "}
        <span className="line-through text-gray-500">₹1000</span>{" "}
        <span className="text-green-500">40% off</span>{" "}
      </div>

      <div className={`flex outfit font-normal justify-between items-center p-4 text-bookCardText hover:cursor-pointer`}>
        <div className={`w-[21rem] h-[5rem] flex items-center justify-between px-4 rounded-full ${cardClassName}`}>
          <div className="flex items-center gap-2">
            <LuCalendarDays className="text-lg" />
            <p className="text-lg font-semibold">Book Now</p>
          </div>
          <div className={`flex items-center gap-2 border-2 border-bookCardText rounded-full p-2`}>
            <p className="text-lg font-semibold">₹600</p>
            <FaArrowRight className="inline-block" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseOfferingCard;
