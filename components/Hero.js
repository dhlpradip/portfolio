import PText from "./PText";
import { HiChevronDoubleDown } from "react-icons/hi2";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className=" overflow-hidden relative"
      style={{ height: "100vh" }}
      id="home"
    >
      <div className="text-center lg:mt-64 md:mt-64 mt-64">
        <p className="font-light text-4xl ">Hello, I am</p>
        <h1 className="font-semibold text-8xl mt-2 mb-20 hover:text-transparent bg-clip-text hover:bg-gradient-to-br from-slate-400 to-red-600">
          Pradeep Dahal
        </h1>
        <div className="my-16">
          <PText>
            I am currently working as a front end Software Engineer at{" "}
            <a href="https://techkunja.com" className="font-semibold">
              Tech Kunja
            </a>
            . Welcome to my little nook filled with Passion, Positivity and
            Poetry
          </PText>
          <div className="mt-16 ">
            <Link
              href="https://drive.google.com/file/d/1hZPvPEkjdV0MuLVNkvDwW1xU2VKPfF1h/view?usp=sharing"
              className="mt-10 px-8 py-5 text-3xl border rounded-2xl hover:border-blue-400 hover:text-5xl hover:px-16 hover:py-12 hover:text-red-300 animate-pulse"
              target="_blank"
            >
              View My Resume
            </Link>
          </div>
        </div>
        <Link className="flex justify-center mt-48" href="#about">
          <HiChevronDoubleDown className="animate-bounce hover:fill-red-300 h-24 w-24 hover:h-48 hover:w-48" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
