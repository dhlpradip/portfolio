import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import {
  AiFillGitlab,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Tooltip } from "./Tooltip";

export default function Navbar() {
  const router = useRouter();

  console.log("R", router.pathname);

  return (
    <div
      className="container sticky top-0 max-w-6xl  mx-auto px-4 pt-8 pb-3 md:py-10 bg-gray-800 "
      style={{ zIndex: "100000" }}
    >
      <div className="flex  md:flex-row justify-between items-center">
        <div className="space-x-8 hidden md:block">
          <Link
            href="/"
            className={`text-2xl hover:text-4xl   ${
              router.pathname === "/"
                ? "text-red-300 font-bold text-4xl "
                : "text-gray-400 dark:text-gray-300 font-normal hover:text-emerald-100"
            }`}
          >
            {"<Pradeep/>"}{" "}
          </Link>
          <Link
            href="/about"
            className={`text-2xl hover:text-4xl   ${
              router.asPath === "/about"
                ? "text-red-300 font-bold text-4xl "
                : "text-gray-400 dark:text-gray-300 font-normal hover:text-emerald-100"
            }`}
          >
            About{" "}
          </Link>
          <Link
            href="/projects"
            className={`text-2xl hover:text-4xl   ${
              router.asPath === "/projects"
                ? "text-red-300 font-bold text-4xl "
                : "text-gray-400 dark:text-gray-300 font-normal hover:text-emerald-100"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className={`text-2xl hover:text-4xl   ${
              router.asPath === "/experience"
                ? "text-red-300 font-bold text-4xl "
                : "text-gray-400 dark:text-gray-300 font-normal hover:text-emerald-100"
            }`}
          >
            Experience{" "}
          </Link>
          <Link
            href="/contact"
            className={`text-2xl hover:text-4xl   ${
              router.asPath === "/contact"
                ? "text-red-300 font-bold text-4xl "
                : "text-gray-400 dark:text-gray-300 font-normal hover:text-emerald-100"
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <a
            href="https://instagram.com/peedarplahad"
            target={"_blank"}
            className="text-base font-normal"
          >
            <Tooltip message={"Follow me on Instagram"} background="#ae337b">
              <AiOutlineInstagram className="h-8 w-8 hover:h-12 hover:w-12 hover:fill-pink-400" />
            </Tooltip>
          </a>
          <a
            href="https://twitter.com/dhlpradip"
            target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <Tooltip
              message={"Follow me on Twitter (sorry brother Musk 😉)"}
              background={"#1DA1F2"}
            >
              <AiOutlineTwitter className="h-8 w-8 hover:h-12 hover:w-12 hover:fill-blue-400" />
            </Tooltip>
          </a>
          <a
            href="https://linkedin.com/in/dhlpradip"
            target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <Tooltip
              message={"Let's get connected on LinkedIn"}
              background="#0071B1"
            >
              <AiOutlineLinkedin className="h-8 w-8 hover:h-12 hover:w-12 hover:fill-[#0E65C3]" />
            </Tooltip>
          </a>

          <a
            href="https://github.com/dhlpradip"
            target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <Tooltip
              message={"View My Projects on Github? 😬"}
              background="#0f172a"
            >
              <AiOutlineGithub
                className="h-8 w-8 hover:h-12 hover:w-12 hover:fill-neutral-950"
                title="Find my work on Github"
              />
            </Tooltip>
          </a>

          <a
            href="https://gitlab.com/dhlpradip"
            target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <Tooltip
              message={"View My Projects on Gitlab? 😱"}
              background="#f97316"
            >
              <AiFillGitlab
                className="h-8 w-8 hover:h-12 hover:w-12 hover:fill-[#E2432A]"
                title="Find my work on Gitlab"
              />
            </Tooltip>
          </a>
        </div>
      </div>
      <div className="space-x-8 block md:hidden mt-4">
        <Link
          href="/"
          className={
            router.pathname === "/"
              ? "text-xl font-semibold text-gray-300 dark:text-gray-300"
              : "text-xl font-semibold text-gray-600 dark:text-gray-600"
          }
        >
          Home
        </Link>
        <Link
          href="/about"
          className={
            router.asPath === "/about"
              ? "text-xl font-semibold text-gray-300 dark:text-gray-300"
              : "text-xl font-semibold text-gray-600 dark:text-gray-600"
          }
        >
          About
        </Link>
        <Link
          href="/projects"
          className={
            router.asPath === "/projects"
              ? "text-xl font-semibold text-gray-300 dark:text-gray-300"
              : "text-xl font-semibold text-gray-600 dark:text-gray-600"
          }
        >
          Projects
        </Link>
        <Link
          href="/experience"
          className={
            router.asPath === "/experience"
              ? "text-xl font-semibold text-gray-300 dark:text-gray-300"
              : "text-xl font-semibold text-gray-600 dark:text-gray-600"
          }
        >
          Experience
        </Link>
        <Link
          href="/contact"
          className={
            router.asPath === "/contact"
              ? "text-xl font-semibold text-gray-300 dark:text-gray-300"
              : "text-xl font-semibold text-gray-600 dark:text-gray-600"
          }
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
