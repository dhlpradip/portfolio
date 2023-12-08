import Button from "./Button";
import PText from "./PText";
import Link from "next/link";

const ContactComponent = () => {
  return (
    <div
      className="container text-center py-20"
      style={{ height: "auto" }}
      id="about"
    >
      <p className="text-6xl font-bold my-12">Contact Me </p>
      <div className="container px-20 mx-20 py-20 my-20 bg-black rounded-xl">
        <PText className="text-2xl text-gray-300">
          Want to hire me? or have you got something to tell me? Click the
          button below
        </PText>
        <div className="my-10 hover:my-12">
          {/* <Button btnLink="/contact" btnText="Contact Now" /> */}
          <Link
            href="/contact"
            className="px-8 hover:px-10 py-5 hover:py-6 text-4xl hover:text-5xl bg-gray-600 hover:bg-blue-100 border rounded-xl hover:border-blue-400  hover:text-orange-600 hover:animate-none animate-pulse "
          >
            Contact Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
