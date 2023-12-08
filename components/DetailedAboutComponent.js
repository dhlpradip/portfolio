/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "./Button";
import AboutImage from "../public/about-img.png";
import userData from "@/constants/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";

const DetailedAboutComponent = () => {
  return (
    <div
      className="container text-center"
      style={{ height: "100%" }}
      id="about"
    >
      <p className="text-6xl font-bold mb-12">About Me </p>
      {/* <div className="flex justify-between sm:justify-center gap-28 flex-wrap"> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div
          className="max-h-4xl bg-blend-overlay "
          style={{ maxHeight: "60rem" }}
        >
          <img src={AboutImage.src} alt="About Img" className="rounded-lg" />
        </div>
        <div>
          <div className="text-justify text-2xl max-w-6xl">
            <p>Welp, where do I begin.</p>
            <p>
              So, My name is Pradeep Dahal. I originally come from the eastern
              hills of Nepal, currently looking for the purpose and meaning of
              life in this city of dreams, Kathmandu.
            </p>
            <p>
              I'm a Computer Engineer currently exploring my way into web and
              mobile apps development and have about two years of on-field
              experience during which I've touched various areas of frontend web
              development in and around React. It included JavaScript, a little
              of TypeScript, React in both JS and TS, NextJS, Redux, Bootstrap,
              Tailwind and so on. Apart from the world of browsers, I sometimes
              tend to delve into the world of BlockChain and Crypto with akin
              interest on Data Science.
            </p>
            <br />
            <p>Other than Javascript, Python, C and C++, </p>
            <p>I can speak English,</p>
            <p>म नेपाली बोल्न सक्छु, </p>
            <p>मैँ हिन्दी बोल सक््ता हुँ, </p>
            <p>und Ich kann ein bisschen Deutsch sprechen.</p> <br />
            <p>
              Apart from the self obsession above, I love poetry and can kill
              for a good poem. I love to listen any kind of music, mainly
              HipHop, and I'm a sucker for books, memes and a little on the dark
              side of jokes.{" "}
            </p>
          </div>
          <div className="mt-20"></div>
        </div>
      </div>
      <div className="my-20">
        <p className="text-5xl font-bold mb-12">What do I know </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="">
            <p className="text-3xl font-semibold">Tech Stack</p>
            <div className="flex flex-wrap justify-center">
              {userData.techStack.map((item, i) => (
                <div key={i}>
                  <p className="border border-gray-600 p-2 m-2 text-xl hover:border-blue-300 hover:text-2xl hover:text-red-300 hover:p-4 ">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <p className="text-3xl font-semibold">Other Skills</p>
            <div className="flex flex-wrap justify-center">
              {userData.otherSkills.map((item, i) => (
                <div key={i}>
                  <p className="border border-gray-600 p-2 m-2 text-xl hover:border-blue-300 hover:text-2xl hover:text-red-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="my-20">
        <p className="text-5xl font-bold mb-12">Education</p>
        <VerticalTimeline animate={true}>
          {userData.education.map((item, i) => (
            <VerticalTimelineElement
              key={i}
              // date={item.duration}
              contentStyle={{
                backgroundColor: "#262620",
                border: true,
                borderColor: "gray",
              }}
              iconStyle={{ backgroundColor: "black", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="text-gray-300 font-bold text-2xl">
                {item.school}
              </h3>
              <p className="text-xl font-semibold">{item.level}</p>
              <p className="text-xl font-semibold">{item.duration}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default DetailedAboutComponent;
