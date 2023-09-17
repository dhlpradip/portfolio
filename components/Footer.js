import { AiFillGitlab, AiFillHeart, AiOutlineCopyrightCircle, AiOutlineGithub, AiOutlineHeart, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import {GiCoffeeCup} from "react-icons/gi"

const Footer = () => {
    return ( 
<footer className=" w-full p-4 bg-gray-800 rounded-lg shadow-sm flex justify-between md:items-center md:justify-between md:p-6">
<span className="text-xl text-gray-500 dark:text-gray-30 text-center">© <a href="https://erpradeepdahal.com.np/" className="">Hacked</a> {new Date().getFullYear()}
        </span>
    <ul className="flex flex-wrap gap-5 mr-5 items-center  text-xl text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://instagram.com/peedarplahad"
            target={"_blank"}
                className="text-base font-normal text-gray-600 dark:text-gray-300">
                <AiOutlineInstagram className="h-7 w-7" />
            </a>
        </li>
        <li>
        <a
            href="https://twitter.com/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiOutlineTwitter className="h-7 w-7" />

          </a>        
          </li>
        <li>
        <a
            href="https://linkedin.com/in/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiOutlineLinkedin className="h-7 w-7" />
          </a>        </li>
        <li>
        <a
            href="https://github/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiOutlineGithub className="h-7 w-7" />
          </a>        </li>
  
        <li>
        <a
            href="https://gitlab/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiFillGitlab className="h-7 w-7" />
          </a>        </li>
        
        
    </ul>
</footer>
     );
}
 
export default Footer;