/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "./Button";
import PText from "./PText";
import AboutImage from "../public/about.jpg";
import AnotherImage from "../public/about-img.png";
import Link from "next/link";

const AboutComponent = () => {
  return (
    <div className="container text-center lg:py-20 " id="about">
      <p className="text-6xl font-bold my-12">About Me </p>
      {/* <div className="flex justify-between sm:justify-center gap-28 flex-wrap"> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className="max-h-4xl bg-blend-overlay">
          <img
            src={AboutImage.src}
            alt="About Img"
            className="rounded-lg"
            style={{ maxHeight: "40rem" }}
          />
        </div>
        <div>
          <div className="text-justify text-2xl max-w-6xl">
            <p>
              I'm a Computer Engineer currently exploring my way into web and
              mobile apps development along with interest on Data Science,
              Crypto and Blockchain stuff.
            </p>
            <br />
            <br />
            <p>
              My hobbies include reading and writing poetry, listening to music,
              watching and playing sports among many others.{" "}
            </p>
            <p>
              To know more about me, my skills and my qualifications, click the
              button below{" "}
            </p>
          </div>
          <div className="my-16 flex justify-center lg:justify-start gap-8 text-2xl">
            {/* <Button btnText="See My Work" btnLink="/projects" outline /> */}
            {/* <Button
              btnText="Know Me More"
              btnLink="/about"
              className="animate-bounce hover:animate-none hover:bg-red-300"
            /> */}
            <Link
              href="/projects"
              className="mt-10 px-8 py-5 text-3xl bg-slate-600 hover:bg-slate-900 border rounded-xl hover:border-blue-400  hover:text-red-300 hover:animate-none animate-pulse "
            >
              See My Work
            </Link>
            <Link
              href="/about"
              className="mt-10 px-8 py-5 bg-slate-900 hover:bg-slate-600 text-3xl border rounded-xl hover:border-blue-400  hover:text-red-300 hover:animate-none animate-pulse "
            >
              Know Me More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
