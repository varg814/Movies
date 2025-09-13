import React from "react";
import HomeIcon from "../atoms/icons/HomeIcon";
import MoviesIcon from "../atoms/icons/MoviesIcon";
import TvSeriesIcon from "../atoms/icons/TvSeriesIcon";
import BookmarksIcon from "../atoms/icons/BookmarksIcon";
import Logo from "../atoms/icons/Logo";
import NavLink from "../molecules/NavLink";
import UserIcon from "../atoms/icons/UserIcon";

const navLinks = [
  { href: "/", Icon: HomeIcon },
  { href: "/movies", Icon: MoviesIcon },
  { href: "/tvseries", Icon: TvSeriesIcon },
  { href: "/bookmarks", Icon: BookmarksIcon },
];

const Navbar = () => {
  return (
    <nav className="p-8 max-md:p-6 max-sm:p-4">
      <div className="bg-[#161D2F] rounded-[20px] py-8 px-7 flex flex-col h-[calc(100vh-64px)] w-fit justify-between items-center max-md:w-full max-md:flex-row max-md:py-5 max-md:px-4 max-sm:p-4 max-md:h-auto">
        <Logo className="max-sm:w-[25px] max-sm:h-5" />
        <div className="flex flex-col flex-1 gap-10 mt-[75px] items-center max-md:flex-row max-md:gap-8 max-md:mt-0 max-md:flex-none max-sm:gap-6">
          {navLinks.map(({ href, Icon }) => (
            <NavLink key={href} href={href}>
              <Icon />
            </NavLink>
          ))}
        </div>
        <UserIcon />
      </div>
    </nav>
  );
};

export default Navbar;
