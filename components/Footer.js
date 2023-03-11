import { AiFillGitlab, AiOutlineCopyrightCircle, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return ( 
<footer className="p-4 bg-black rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="flex text-xl text-gray-500 sm:text-center dark:text-gray-400 ml-12"> <AiOutlineCopyrightCircle className="h-6 w-6 mr-2"/> {new Date().getFullYear() + " "} {" "} <a href="https://erpradeepdahal.com.np/" className="hover:underline">{" "} Pradeep Dahal {" "}</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap gap-5 mr-5 items-center mt-3 text-xl text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://instagram.com/peedarplahad"
            target={"_blank"}
                className="text-base font-normal text-gray-600 dark:text-gray-300">
                <AiOutlineInstagram className="h-6 w-6" />
            </a>
        </li>
        <li>
        <a
            href="https://twitter.com/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiOutlineTwitter className="h-6 w-6" />

          </a>        
          </li>
        <li>
        <a
            href="https://linkedin.com/in/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiOutlineLinkedin className="h-6 w-6" />
          </a>        </li>
        <li>
        <a
            href="https://github/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiOutlineGithub className="h-6 w-6" />
          </a>        </li>
  
        <li>
        <a
            href="https://gitlab/dhlpradip" target={"_blank"}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
          >
            <AiFillGitlab className="h-6 w-6" />
          </a>        </li>
        
        
    </ul>
</footer>
     );
}
 
export default Footer;