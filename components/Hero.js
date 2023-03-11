import PText from "./PText";
import {CgScrollV} from "react-icons/cg"
import Button from "./Button";

const Hero = () => {
    return ( 
        <div className="text-center overflow-hidden" style={{height: "100vh"}}>
            <div className="lg:mt-64 md:mt-64 mt-64   ">
            <p className="font-light text-4xl ">Hello, I am</p>
            <h1 className="font-semibold text-8xl mt-2 mb-4">Pradeep Dahal</h1>
            <div className="flex justify-center mt-12">
            <PText>I am currently working as a front end Software Engineer at <a href="https://techkunja.com" className="font-semibold">Tech Kunja</a>. Welcome to my little nook filled with Passion, Positivity and Poetry</PText>
            </div>
            </div>

            <Button btnText="View My Resume" btnLink="" outline />
            <div className="text-center z-100">
                <p className="text-2xl rotate-90 tracking-widest">SCROLL</p>
                <div className="flex justify-center">

                <CgScrollV className="text-center w-10 h-20"/>
                </div>

                </div>

        </div>
     );
}
 
export default Hero;