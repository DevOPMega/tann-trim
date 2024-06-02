"use client";
import { useState } from "react";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import Menu from "./Menu";
import { links } from "./icons/LinkIcons";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [navigation, setNavigation] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const heading = "tann trim";

  const toggleNavigation = () => {
    if (navigation) {
      setNavigation(false);
      enablePageScroll();
    } else {
      setNavigation(true);
      disablePageScroll();
    }
    setShowSearch(false);
  };

  const handleClick = () => {
    if (!navigation) return;

    enablePageScroll();
    setNavigation(false);
  };

  return (
    <div className="relative  px-8 py-6 bg-black z-10 md:px-12 lg:px-24">
      <div className="flex justify-between items-center">
        <div className="flex gap-[9px] text-2xl uppercase ">
          {heading.split("").map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
        </div>
        <nav
          className={`${
            navigation ? "flex" : "hidden"
          } flex-col gap-8 items-center justify-center w-full h-screen absolute top-12 left-0 z-10 bg-black lg:flex lg:flex-row lg:gap-12 lg:static lg:bg-transparent lg:h-full lg:w-auto`}
        >
          <button
            className="flex gap-2 lg:gap-0"
            onClick={() => setShowSearch(!showSearch)}
          >
            <CiSearch size={24} />
            <span className="lg:hidden">SEARCH</span>
          </button>
          {links.map((link, i) => (
            <a
              key={i}
              href={`#${link.name}`}
              className="flex gap-2 lg:gap-0"
              onClick={() => handleClick()}
            >
              {link.iconname}
              <span className="lg:hidden">{link.name.toUpperCase()}</span>
            </a>
          ))}
        </nav>
        <div className="lg:hidden" onClick={toggleNavigation}>
          <Menu navigation={navigation} />
        </div>
        <div
          className={`${
            showSearch ? "" : "hidden"
          } absolute w-full -top-4 -bottom-4   left-0 
          right-0 z-20 bg-black py-2`}
        >
          <div className="flex justify-between items-center mx-auto w-3/4 h-full lg:w-2/5">
            <input
              type="text"
              className="w-[85%] outline-none border-b-[1px] border-b-white bg-transparent py-1 px-1 text-sm focus:border-b-blue-400 "
              placeholder="Search..."
            />
            <CiSearch className="cursor-pointer" size={24} />
            <RxCross1 
             className="cursor-pointer"
             onClick={() =>  setShowSearch(false)}
            size={22}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
