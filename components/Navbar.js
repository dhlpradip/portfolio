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
    <div className="container sticky top-0 max-w-6xl  mx-auto px-4 py-10 md:py-20">
      <div className="flex  md:flex-row justify-between items-center">

        <div className="space-x-8 hidden md:block">
        <Link
            href="/"
            className={`text-2xl  ${
              router.asPath === "/"
                ? "text-gray-300 font-bold dark:text-gray-300"
                : "text-gray-300 dark:text-gray-300 font-normal "
            }`}
          >
            Home{" "}
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
            {router.asPath === "/projects" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-4 w-4"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            )}
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
            <AiOutlineInstagram className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiOutlineTwitter className="h-6 w-6" />

          </a>
          <a
            href="https://linkedin.com/in/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiOutlineLinkedin className="h-6 w-6" />
          </a>

          <a
            href="https://github.com/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiOutlineGithub className="h-6 w-6" />
          </a>

          <a
            href="https://gitlab.com/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiFillGitlab className="h-6 w-6" />
          </a>
          
         
        </div>
      </div>
      <div className="space-x-8 block md:hidden mt-4">
      <Link
          href="/"
          className="text-xl font-semibold text-gray-600 dark:text-gray-600"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-xl font-semibold text-gray-600 dark:text-gray-600"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="text-xl font-semibold text-gray-600 dark:text-gray-600"
        >
          Projects
        </Link>
        <Link
          href="/experience"
          className="text-xl font-semibold text-gray-600 dark:text-gray-600"
        >
          Experience
        </Link>
        <Link
          href="/contact"
          className="text-xl font-semibold text-gray-600 dark:text-gray-600"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}