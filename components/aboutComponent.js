/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Button from "./Button";
import PText from "./PText";
import AboutImage from  "../public/about-img.png"

const AboutComponent = () => {
    return ( 
    <div className="container text-center" style={{height:'85vh'}}>
        <p className="text-6xl font-bold mb-12">About Me</p>
        <div className="flex gap-28 flex-wrap">
            <div>
            <div className="text-justify text-2xl max-w-6xl">
                <p>I'm a Computer Engineer currently exploring my way into web and mobile apps development along with interest on Data Science and Blockchain stuff.</p>
                <br/>
                <p>My hobbies include reading and writing poetry, listening to music, watching and playing sports among many others. </p>
                <p>To know more about me and my qualification, click the button below </p>
            </div>
            <div className="my-5 flex justify-start gap-8 text-2xl">
                <Button btnText="See My Work" btnLink="/projects" outline/>
                <Button btnText="Know Me More" btnLink="/about"  />
            </div>
            </div>
            <div className="max-h-4xl bg-blend-overlay ">
            <Image src={AboutImage} alt="About Img" width={200} height={50} className="rounded-lg"/>
            </div>
        </div>
    </div>
     );
}
 
export default AboutComponent;