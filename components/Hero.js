import PText from "./PText";
import {HiChevronDoubleDown} from "react-icons/hi2"
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
    return ( 
        <div className=" overflow-hidden relative" style={{height: "100vh"}} id="home">
            <div className="text-center lg:mt-64 md:mt-64 mt-64">
            <p className="font-light text-4xl ">Hello, I am</p>
            <h1 className="font-semibold text-8xl mt-2 mb-20">Pradeep Dahal</h1>
            <div className="my-16">
            <PText>I am currently working as a front end Software Engineer at <a href="https://techkunja.com" className="font-semibold">Tech Kunja</a>. Welcome to my little nook filled with Passion, Positivity and Poetry</PText>
            <div className="mt-16">
            <Button btnText="View My Resume"  outline
            btnLink="https://drive.google.com/file/d/14U7nQCSYyQd7tsuEWtrVHt9p5RGZVt95/view?usp=sharing" blank />
            </div>
            </div>
            <Link className="flex justify-center mt-48" href="#about">
            <HiChevronDoubleDown className="animate-bounce   h-24 w-24"/>
            </Link>
            </div>
        </div>
     );
}
 
export default Hero;