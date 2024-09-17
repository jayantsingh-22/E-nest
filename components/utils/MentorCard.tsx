import Image from "next/image";
import StarRating from "./StarRating";
import "./fonts.css";

const InstructorCard = () => {
  return (
    <div className="w-[90%] rounded-3xl p-7 pt-9 pb-4 bg-white shadow-light mx-auto my-12 flex gap-4 items-center justify-between">
      <div className="w-2/3 flex flex-col gap-1">
            <h1 className="text-secondary mentor outfit">MENTOR</h1>
            <p className="pb-2 indName outfit">Chatur Ramlingam</p>
            <p className="outfit subHead">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard of the industry  dummy text ever
            </p>
            <StarRating rating={4.0} size={"lg"}/>
        </div>
      <div className="w-1/3 flex flex-col gap-4 items-center justify-center">
            <Image
            src="/assets/Chatur.png"
            alt="Instructor"
            width={130}
            height={130}
            className="rounded-full bg-gray-300"
            />
            <span className="flex gap-4 justify-center">
                <Image
                    src="/assets/yt.png"
                    alt="yt"
                    width={22}
                    height={30}
                    className="rounded-full bg-gray-300"
                />
                <Image
                    src="/assets/facebook.png"
                    alt="facebook"
                    width={22}
                    height={30}
                    className="rounded-full bg-gray-300"
                />
                <Image
                    src="/assets/x.png"
                    alt="twitter"
                    width={22}
                    height={30}
                    className="rounded-full bg-gray-300"
                />
                <Image
                    src="/assets/linkedin.png"
                    alt="linkedin"
                    width={22}
                    height={30}
                    className="rounded-full bg-gray-300"
                />
            </span>
      </div>
    </div>
  );
};

export default InstructorCard;
