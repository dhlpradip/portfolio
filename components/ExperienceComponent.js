/* eslint-disable @next/next/no-img-element */
import userData from "@/constants/data";
import { useRouter } from "next/router";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

const ExperienceComponent = () => {
    const router = useRouter()
    return ( 
        <div className="container text-center pt-20 h-screen"  id="about">
        <p className="text-6xl font-bold my-12">My Work Experiences  </p>
        <VerticalTimeline animate={true}>
            {userData.experience.map((item, i)=>(
              <VerticalTimelineElement
              key={i}
              onTimelineElementClick={()=>window.open(item.companyLink, "_blank")}
              // date={item.duration}
              contentStyle={{backgroundColor: "#262620",border: true, borderColor: 'gray', cursor:"pointer"}}
              iconStyle={{ backgroundColor:'black' ,color: '#fff' }}
              icon={<img src={item.logo.src} alt={item.company} className="rounded-full"/>} 
              >
              <h3 className="text-gray-300 font-bold text-2xl">{item.title}</h3>
              <h3 className="text-gray-300 font-bold text-xl">{item.company}</h3>
              <p className="text-xl font-semibold">
                {item.year}
              </p>
              <p className="text-xl font-semibold">
                {item.desc}
              </p>
            </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
        </div>
     );
}
 
export default ExperienceComponent;