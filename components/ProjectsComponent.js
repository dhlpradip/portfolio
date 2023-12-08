/* eslint-disable @next/next/no-img-element */
import userData from "@/constants/data";
import { useEffect, useState } from "react";
import Button from "./Button";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
const ProjectsComponent = ({ home }) => {
  const [projects, setProjects] = useState([]);
  // const projects = userData.projects?.slice(0,3);
  useEffect(() => {
    if (userData) {
      if (userData.projects) {
        if (home) {
          setProjects(userData.projects?.slice(0, 3));
        } else {
          setProjects(userData.projects);
        }
      }
    }
  }, [home]);

  return (
    <div
      className={
        home
          ? "container text-center pt-24 pb-20 lg:py-20  "
          : "container text-center py-20  "
      }
      id="about"
    >
      <p className="text-6xl font-bold mt-12">Projects </p>
      <p className="text-3xl font-semibold mt-3 mb-12">
        Shown below are some of the projects I've been part of
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            className="h-88 hover:h-96 basis-1/3 block max-w-full pb-6 bg-gray-300 border border-gray-600  rounded-lg drop-shadow-xl hover:drop-shadow-2xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <img
              className="h-64 w-full rounded-md border-none"
              src={item.imgUrl.src}
              alt={item.title}
            />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
            <p className="font-normal text-xl text-gray-700 dark:text-gray-400">
              {item.desc}
            </p>
          </a>
        ))}
      </div>
      {home && (
        <div className="my-12 hover:my-16">
          {/* <Button btnLink="/projects" btnText="Show Me More" outline /> */}
          <Link
            href="/projects"
            className="px-8 py-5 text-4xl hover:mt-16 hover:text-5xl hover:px-10 hover:py-8 bg-slate-600 hover:bg-slate-900 border rounded-xl hover:border-blue-400  hover:text-red-300  "
          >
            Show Me More
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectsComponent;
