import Link from "next/link";
import { useRouter } from 'next/router';
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import {BsFillPersonFill} from "react-icons/bs";
import {MdOutlineMiscellaneousServices} from "react-icons/md"
import {GiSkills} from "react-icons/gi"
import {AiFillContacts, AiOutlineFundProjectionScreen} from "react-icons/ai"

const Links = [
  {
    link: "/about",
    title: "About",
    icon: <BsFillPersonFill className="md:hidden white dark:black" />
  },
  {
    link: "/services",
    title: "Services",
    icon: <MdOutlineMiscellaneousServices className="md:hidden white dark:black" />
  },
  {
    link: "/skills",
    title: "Skills",
    icon: <GiSkills className="md:hidden white dark:black" />
  },
  {
    link: "/portfolio",
    title: "Portfolio",
    icon: <AiOutlineFundProjectionScreen className="md:hidden white dark:black" />
  },
  {
    link: "/contacts",
    title: "Contacts",
    icon: <AiFillContacts className="md:hidden white dark:black" />
  },
];

const Nav = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  

  return (
    <nav className="fixed z-10 w-full px-3 -translate-x-1/2 bottom-20 md:p-0 left-2/4 md:static md:w-auto md:left-0 md:translate-x-0">
      <ul className="flex flex-wrap items-center justify-center gap-8 p-3 rounded-2xl bg-black/10 dark:bg-slate-100/30 md:p-0 md:bg-inherit md:dark:bg-inherit">
        {Links.map(({ link, title, icon }) => (
          <li key={title}>
            <Link href={link}>
              <a className={`text-3xl ${router.pathname === link ? "text-main-color" : null}`}><span className="hidden md:block">{title}</span>{icon}</a>
            </Link>
          </li>
        ))}
        <li>
          <MdDarkMode
            onClick={switchTheme}
            className={
              theme === "dark"
                ? "fill-white text-[20px] cursor-pointer"
                : "fill-black text-[20px] cursor-pointer"
            }
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
