import {
  AiFillGitlab,
  AiFillHeart,
  AiOutlineCopyrightCircle,
  AiOutlineGithub,
  AiOutlineHeart,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { GiCoffeeCup } from "react-icons/gi";
import { Tooltip } from "./Tooltip";

const Footer = () => {
  return (
    <footer className=" w-full  mx-auto px-4 p-4 bg-gray-800 rounded-lg shadow-sm flex justify-between md:items-center md:justify-between md:p-6">
      <span className="text-xl text-gray-500 dark:text-gray-30 text-center">
        ©{" "}
        <a
          href="https://erpradeepdahal.com.np/"
          className="hover:text-red-300 hover:text-2xl"
        >
          Pradeep Dahal
        </a>{" "}
        {new Date().getFullYear()}
      </span>

      <div className="space-x-4 flex flex-row items-center">
        <a
          href="https://instagram.com/peedarplahad"
          target={"_blank"}
          className="text-base font-normal"
        >
          <Tooltip message={"Instagram"} background="#ae337b" isAtTop>
            <AiOutlineInstagram className="h-8 w-8  hover:fill-pink-400" />
          </Tooltip>
        </a>
        <a
          href="https://twitter.com/dhlpradip"
          target={"_blank"}
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          <Tooltip message={"Twitter"} background={"#1DA1F2"} isAtTop>
            <AiOutlineTwitter className="h-8 w-8  hover:fill-blue-400" />
          </Tooltip>
        </a>
        <a
          href="https://linkedin.com/in/dhlpradip"
          target={"_blank"}
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          <Tooltip message={"LinkedIn"} background="#0071B1" isAtTop>
            <AiOutlineLinkedin className="h-8 w-8  hover:fill-[#0E65C3]" />
          </Tooltip>
        </a>

        <a
          href="https://github.com/dhlpradip"
          target={"_blank"}
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          <Tooltip message={"Github"} background="#0f172a" isAtTop>
            <AiOutlineGithub
              className="h-8 w-8  hover:fill-neutral-950"
              title="Find my work on Github"
            />
          </Tooltip>
        </a>

        <a
          href="https://gitlab.com/dhlpradip"
          target={"_blank"}
          className="text-base font-normal text-gray-600 dark:text-gray-300"
        >
          <Tooltip message={"Gitlab"} background="#f97316" isAtTop>
            <AiFillGitlab
              className="h-8 w-8  hover:fill-[#E2432A]"
              title="Find my work on Gitlab"
            />
          </Tooltip>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
