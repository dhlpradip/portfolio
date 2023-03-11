import PText from "./PText";
import {CgScrollV} from "react-icons/cg"
import Button from "./Button";

const Hero = () => {
    return ( 
        <div className=" overflow-hidden relative" style={{height: "100vh"}}>
            <div className="text-center lg:mt-64 md:mt-64 mt-64   ">
            <p className="font-light text-4xl ">Hello, I am</p>
            <h1 className="font-semibold text-8xl mt-2 mb-4">Pradeep Dahal</h1>
            <div>
            <PText>I am currently working as a front end Software Engineer at <a href="https://techkunja.com" className="font-semibold">Tech Kunja</a>. Welcome to my little nook filled with Passion, Positivity and Poetry</PText>
            <Button btnText="View My Resume"  outline
            btnLink="https://drive.google.com/file/d/14U7nQCSYyQd7tsuEWtrVHt9p5RGZVt95/view?usp=sharing" blank />
            </div>
            <div className="mt-24 absolute bottom-48 left-1/2">
                <p className="text-2xl rotate-90" style={{marginLeft:'-2.75rem'}}>S C R O L L</p>
                <div className="mt-12">
                <CgScrollV className="h-28 w-16" />
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Hero;