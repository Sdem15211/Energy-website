"use client";
import { Logo, Menu } from "@/components";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import cx from "classnames";
import { useWindScreenowSize } from "@/hooks/useWindowSize";
import headerData from "@/data/Header.json";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const size = useWindScreenowSize();

  useEffect(() => {
    if (size.width > 768) {
      setShowMenu(false);
    }
  }, [size.width]);
  return (
    <header className="border-b sm:border-none border-white fixed bg-secondary-950 sm:bg-transparent w-full py-6">
      <div className="container flex justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="z-10">
            <Logo />
          </Link>
          <nav
            className={cx(
              "flex list-none absolute sm:relative sm:h-fit sm:w-fit h-screen w-screen top-0 sm:translate-y-0 text-white sm:flex-row flex-col items-center justify-center bg-secondary-950 right-0 gap-8 duration-300 ease-out",
              showMenu === true ? "translate-y-0" : "-translate-y-full"
            )}
          >
            {headerData.header.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              );
            })}
          </nav>
        </div>
        <div className="flex gap-4 z-10">
          <button
            onClick={toggleMenu}
            className="sm:hidden p-3 flex justify-center items-center border rounded-full text-white"
          >
            <Menu />
          </button>
          <button className="py-3 px-5 bg-primary-300 text-secondary-950 hover:bg-primary-400 duration-300 rounded-full text-white">
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
};
