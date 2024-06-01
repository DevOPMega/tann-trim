"use client";
import { useState } from "react";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import Menu from "./Menu";
import {links} from "./icons/LinkIcons";

const Header = () => {
  const [navigation, setNavigation] = useState(false);
  const heading = "tann trim";

  const toggleNavigation = () => {
    if (navigation) {
      setNavigation(false);
      enablePageScroll();
    } else {
      setNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!navigation) return;

    enablePageScroll();
    setNavigation(false);
  }

  return (
    <div className="px-8 py-6 bg-black z-10 md:px-12 lg:px-24">
      <div className="relative flex justify-between items-center">
        <div className="flex gap-[9px] text-2xl uppercase ">
          {heading.split("").map((letter, i) => (
            <span key={i} >{letter}</span>
          ))}
        </div>
        <nav
          className={`${
            navigation ? "flex" : "hidden"
          } flex-col gap-8 items-center justify-center w-full h-screen absolute top-12 z-10 bg-black lg:flex lg:flex-row lg:gap-12 lg:static lg:bg-transparent lg:h-full lg:w-auto`}
        >
          {links.map((link, i) => (
            <a
              key={i}
              href={`#${link.name}`}
              className="flex gap-2 lg:gap-0"
              onClick={() => setNavigation(false)}
            >
              {link.iconname}
              <span className="lg:hidden">{link.name.toUpperCase()}</span>
            </a>
          ))}
        </nav>
        <div className="lg:hidden" onClick={toggleNavigation}>
          <Menu navigation={navigation} />
        </div>
      </div>
    </div>
  );
};

export default Header;
