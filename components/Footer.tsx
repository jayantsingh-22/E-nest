import Image from "next/image";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  const company = [
    "About Us",
    "Why choose us",
    "Policies",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  const security = [
    "Report Concern",
    "Report Security Issue",
    "Trademark Notice",
    "Advertise with us",
    "Help & Support",
  ];

  return (
    <footer className="w-full bg-white mt-6">
      <div className="px-16 py-6">
        <div className="flex justify-evenly">
          <div className="flex flex-col gap-[0.7rem]">
            <Image
              src="/assets/footerlogo.png"
              alt="footer logo"
              width={222}
              height={45}
              className="mb-2"
            />
            <p className="w-[12rem] flex flex-col text-xs font-normal mb-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </p>
            <p className="text-xs font-extrabold mt-5">Contact with us</p>
            <p className="text-xs cursor-pointer">Email</p>
            <p className="text-xs cursor-pointer">Talk to a Councellor</p>
          </div>
          <ul className="flex flex-col gap-[0.6rem]">
            <header className="text-sm font-extrabold">Brand and Security</header>
            {security.map((link, index) => (
              <li key={index} className="text-xs font-normal cursor-pointer">
                {link}
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-[0.6rem]">
            <header className="text-sm font-extrabold">Company</header>
            {company.map((link, index) => (
              <li key={index} className="text-xs font-normal cursor-pointer">
                {link}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-5">
            <Image
              src="/assets/msme.png"
              alt="incubated"
              width={80}
              height={80}
            />
            <Image
              src="/assets/iima.png"
              alt="incubated"
              width={70}
              height={70}
            />
          </div>
        </div>

        <div className="mt-8 px-4 flex items-center justify-around gap-16">
          <div className="font-extrabold text-center mb-2">
            <p className="mb-5 text-primary text-md">Let's get social:</p>
            <span className="ml-8 flex gap-2">
              <Image
                src="/assets/ig.png"
                alt="instagram"
                width={20}
                height={20}
                className="rounded-full bg-gray-300"
              />

              <Image
                src="/assets/yt.png"
                alt="yt"
                width={20}
                height={20}
                className="rounded-full bg-gray-300"
              />
              <Image
                src="/assets/facebook.png"
                alt="facebook"
                width={20}
                height={20}
                className="rounded-full bg-gray-300"
              />

              <Image
                src="/assets/tg.png"
                alt="Telegram"
                width={20}
                height={20}
                className="rounded-full bg-gray-300"
              />

              <Image
                src="/assets/x.png"
                alt="twitter"
                width={20}
                height={20}
                className="rounded-full bg-gray-300"
              />
              <Image
                src="/assets/linkedin.png"
                alt="linkedin"
                width={20}
                height={20}
                className="rounded-full bg-gray-300"
              />
            </span>
          </div>
          <div className="flex gap-5 ml-60">
            <Image
              src="/assets/googleplay.png"
              alt="google play"
              width={174}
              height={59}
            />
            <Image
              src="/assets/appstore.png"
              alt="app store"
              width={174}
              height={59}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-[#3A1757] flex items-center justify-center text-white">
        <p>Copyrights © AgriVision4U Pvt. Ltd. 2024</p>
      </div>
    </footer>
  );
};

export default Footer;