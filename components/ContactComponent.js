import Button from "./Button";
import PText from "./PText";

const ContactComponent = () => {
    return ( 
        <div className="container text-center py-20" style={{height:'auto'}} id="about">
        <p className="text-6xl font-bold my-12">Contact Me  </p>
        <div className="container px-20 mx-20 py-20 my-20 bg-black rounded-xl">
            <PText className="text-2xl text-gray-300">Want to hire me? or have you got something to tell me? Click the button below</PText>
            <div className="my-8">
            <Button btnLink="/contact" btnText="Contact Now" />
            </div>
        </div>
        </div>
     );
}
 
export default ContactComponent;