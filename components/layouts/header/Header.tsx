"use client";
import { Button, Logo, Menu } from "@/components";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import cx from "classnames";
import { useWindScreenowSize } from "@/hooks/useWindowSize";
import useDetectScroll from "@smakss/react-scroll-direction";
import headerData from "@/data/Header.json";

export const Header = () => {
  const { scrollDir } = useDetectScroll();
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
    <header
      className={cx(
        "border-b sm:border-b border-primary-300 fixed bg-secondary-950 w-full py-6 z-50 duration-300",
        scrollDir === "down" ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container flex justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="z-10">
            <Logo />
          </Link>
          <nav
            className={cx(
              "flex list-none absolute sm:relative sm:h-fit sm:w-fit h-screen w-screen top-0 sm:translate-y-0 text-white sm:flex-row flex-col items-center justify-center bg-secondary-950 sm:bg-transparent right-0 gap-8 duration-300 ease-out",
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
          <Button
            onClick={toggleMenu}
            variant={"tertiary-reversed"}
            className={size.width > 768 ? "opacity-0" : "opacity-100"}
          >
            <Menu />
          </Button>
          <Button variant={"secondary"}>Get in touch</Button>
        </div>
      </div>
    </header>
  );
};
