/* eslint-disable @next/next/no-img-element */
import userData from "@/constants/data";
import { useEffect, useState } from "react";
import Button from "./Button";

/* eslint-disable react/no-unescaped-entities */
const ProjectsComponent = ({home}) => {
    const [projects, setProjects] = useState([]);
    // const projects = userData.projects?.slice(0,3);
    useEffect(()=>{
        if(userData){
            if(userData.projects){
                if(home){
                    setProjects(userData.projects?.slice(0,3))
                } else{
                    setProjects(userData.projects);
                }
            }
        }
    },[home])
    
    return ( 
        <div className={home ? "container text-center pt-24 pb-20 lg:py-20  " :"container text-center py-20  "}  id="about">
        <p className="text-6xl font-bold mt-12">Projects  </p>
        <p className="text-3xl font-semibold mt-3 mb-12">Shown below are some of the projects I've been part of</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects?.map((item, i)=>(
            <a key={i} href={item.link} className="basis-1/3 block max-w-full pb-6 bg-gray-300 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img className="h-48 w-full rounded-xl" src={item.imgUrl.src} alt={item.title} />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
            <p className="font-normal text-xl text-gray-700 dark:text-gray-400">{item.desc}</p>
        </a>
        ))}
        </div>
        {home && (
            <div className="animate-pulse my-12">
        <Button btnLink="/projects" btnText="Show Me More" outline />
        </div>
            )}
        </div>
     );
}
 
export default ProjectsComponent;