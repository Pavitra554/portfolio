import React from "react";

//Framer Motion
import { motion } from "framer-motion";

//Components
import NavLink from "./NavLink";
import MobileNav from "../MobileNav/MobileNav";

//icons
import { MoonIcon, SunIcon, MenuAlt4Icon } from "@heroicons/react/outline";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toggle } from "../../reducers/themeSlice";

//Data
import { NAV_DATA } from "../../data/navlinks";

const NavBar = () => {
  const value = useSelector(selectTheme);
  const dispatch = useDispatch();
  return (
    <div
      className={`mt-16 flex flex-row justify-between max-w-screen-md mx-4 md:mx-auto`}
    >
      <div>
        <div className="text-neutral-100 text-2xl font-semibold">
          Pavitra Behara
        </div>
        <div className="text-neutral-400 text-xs tracking-widest leading-4">
          Developer / Programmer
        </div>
      </div>

      <div>

      </div>
    </div>
  );
};

export default NavBar;
