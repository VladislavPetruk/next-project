import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";

const Nav = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const Links = [
    {
      link: "/about",
      title: "About",
    },
    {
      link: "/services",
      title: "Services",
    },
    {
      link: "/skills",
      title: "Skills",
    },
    {
      link: "/portfolio",
      title: "Portfolio",
    },
    {
      link: "/contacts",
      title: "Contacts",
    },
  ];

  return (
    <nav>
      <ul className="flex flex-wrap items-center gap-8">
        {Links.map(({ link, title }) => (
          <li key={title}>
            <Link href={link}>
              <a className="text-2xl">{title}</a>
            </Link>
          </li>
        ))}
        <li>
          <MdDarkMode
            onClick={switchTheme}
            className={
              theme === "dark"
                ? "fill-white text-[20px]"
                : "fill-black text-[20px]"
            }
          />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
