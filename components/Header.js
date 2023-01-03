import Image from "next/image";
import {
  MagnifyingGlassIcon,
  Bars4Icon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">

        {/* Left Side (For the icon)  */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="/Instagram_logo.svg.png"
            layout="fill"
            className="object-contain"
            alt="insta logo"
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="/insta-logo-mob-dev.png"
            layout="fill"
            className="object-contain"
            alt="insta logo"
          />
        </div>
      
        {/* Middle Side (For the searchBar) */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rouded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right Side (For extra buttons) */}

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <Bars4Icon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn -rotate-45" />
            <div className="absolute -top-0 -right-2 text-xs w-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              10
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            src="/next.svg"
            alt="avatar logo"
            className="h-10 p-1 bg-red-500 rounded-full cursor-pointer w-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
