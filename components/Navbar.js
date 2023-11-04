import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "../constants/data"
import {AiFillGitlab, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter} from "react-icons/ai"

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="container sticky top-0 max-w-6xl  mx-auto px-4 pt-8 pb-3 md:py-10 bg-gray-800 " style={{ zIndex:'100000'}}>
      <div className="flex  md:flex-row justify-between items-center">
        <div className="space-x-8 hidden md:block">
        <Link
            href="/"
            className={`text-2xl  ${
              router.asPath === "/"
                ? "text-gray-300 font-bold dark:text-gray-300"
                : "text-gray-400 dark:text-gray-300 font-normal "
            }`}
          >
            {"<Pradeep/>"}{" "}
          </Link>
          <Link
            href="/about"
            className={`text-2xl  ${
              router.asPath === "/about"
                ? "text-gray-300 font-bold dark:text-gray-300"
                : "text-gray-400 dark:text-gray-300 font-normal "
            }`}
          >
            About{" "}
          </Link>
          <Link
            href="/projects"
            className={`text-2xl  ${
              router.asPath === "/projects"
                ? "text-gray-300 font-bold dark:text-gray-300"
                : "text-gray-400 dark:text-gray-300 font-normal "
            }`}
          >
            Projects
            
          </Link>
          <Link
            href="/experience"
            className={`text-2xl  ${
              router.asPath === "/experience"
                ? "text-gray-300 font-bold dark:text-gray-300"
                : "text-gray-400 dark:text-gray-300 font-normal "
            }`}
          >
            Experience{" "}
          </Link>
          <Link
            href="/contact"
            className={`text-2xl  ${
              router.asPath === "/contact"
                ? "text-gray-300 font-bold dark:text-gray-300"
                : "text-gray-400 dark:text-gray-300 font-normal "
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <a href="https://instagram.com/peedarplahad"
          target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"

           >
            <AiOutlineInstagram className="h-8 w-8" />
          </a>
          <a
            href="https://twitter.com/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiOutlineTwitter className="h-8 w-8" />

          </a>
          <a
            href="https://linkedin.com/in/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiOutlineLinkedin className="h-8 w-8" />
          </a>

          <a
            href="https://github.com/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiOutlineGithub className="h-8 w-8" />
          </a>

          <a
            href="https://gitlab.com/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiFillGitlab className="h-8 w-8" />
          </a>
          
         
        </div>
      </div>
      <div className="space-x-8 block md:hidden mt-4">
      <Link
          href="/"
          className={router.asPath === '/' ?  "text-xl font-semibold text-gray-300 dark:text-gray-300":"text-xl font-semibold text-gray-600 dark:text-gray-600"}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={router.asPath === '/about' ?  "text-xl font-semibold text-gray-300 dark:text-gray-300":"text-xl font-semibold text-gray-600 dark:text-gray-600"}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={router.asPath === '/projects' ?  "text-xl font-semibold text-gray-300 dark:text-gray-300":"text-xl font-semibold text-gray-600 dark:text-gray-600"}
        >
          Projects
        </Link>
        <Link
          href="/experience"
          className={router.asPath === '/experience' ?  "text-xl font-semibold text-gray-300 dark:text-gray-300":"text-xl font-semibold text-gray-600 dark:text-gray-600"}
        >
          Experience
        </Link>
        <Link
          href="/contact"
          className={router.asPath === '/contact' ?  "text-xl font-semibold text-gray-300 dark:text-gray-300":"text-xl font-semibold text-gray-600 dark:text-gray-600"}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}