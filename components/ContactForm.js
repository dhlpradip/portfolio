import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import {GoLocation} from "react-icons/go"
import PText from "./PText";
import { KEY_WEB_3 } from "@/constants/sec";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
// import { useForm, ValidationError } from "@formspree/react";
// import { useEffect } from "react";

/* eslint-disable react/no-unescaped-entities */
const ContactForm = () => {
    const router = useRouter()
    // const [state, handleSubmit] = useForm('xoqzldwk');

    // useEffect(()=>{
    //     if(state){
    //         if(state.succeeded){
    //             Swal.fire(
    //                 {
    //                     title:'Thank you',
    //                     text:'I have received your message',
    //                     icon:'success',
    //                     showCancelButton:false,
    //                     confirmButtonColor: '#3085d6',
    //                 }).then((res)=>{
    //                     if(res.isConfirmed){
    //                         router.push("/")
    //                     }
    //                 })
    //             }
    //         }
    // },[router, state, state.succeeded])

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: KEY_WEB_3,
                subject: e.target.subject.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            Swal.fire(
                {
                    title:'Thank you',
                    text:'I have received your message',
                    icon:'success',
                    showCancelButton:false,
                    confirmButtonColor: '#3085d6',
                }).then((res)=>{
                    if(res.isConfirmed){
                        router.push("/")
                    }
                })
        }
    }

    return ( 
        <section className="container" style={{height: "100vh"}}>
        <div className="py-20 lg:py-16 mx-auto  max-w-screen">
      <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-gray-300 dark:text-white">Contact Me</h2>
      <PText className="my-8 lg:mb-16 text-3xl font-light text-center text-gray-400 dark:text-gray-400 sm:text-xl">Have Something to say? feel free. I'll try to get back asap</PText>
      {/* <div className="flex flex-row justify-between mx-48 gap-20 my-20"> */}
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-20">
            <div className="mt-3">
                <div className="w-full ">
                <a href="mailto:erpradeepdahal@gmail.com" className="flex bg-black rounded-lg max-w-auto px-5 py-5 my-5">
                    {/* <MdEmail className="h-10 w-10 mr-8" /> */}
                    <p className="text-4xl font-semibold">erpradeepdahal@gmail.com</p>
                </a>
                </div>

                <div className="w-full ">
                <a href="tel:+9779815927737" className="flex bg-black rounded-lg max-w-auto px-5 py-5 my-5">
                    <AiFillPhone className="h-10 w-10 mr-8" />
                    <p className="text-4xl font-semibold">+977 9815927737</p>
                </a>
                </div>

                <div className="w-full ">
                <div className="flex bg-black rounded-lg max-w-auto px-5 py-5 my-5">
                    <GoLocation className="h-10 w-10 mr-8" fill="white"/>
                    <p className="text-4xl font-semibold">Kathmandu, Nepal</p>
                </div>
                </div>

            </div>
      <form onSubmit={handleSubmit} className="space-y-8 flex-1">
          <div>
              <label for="email" className="block mb-2 text-lg font-medium text-gray-300 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-2.5 py-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required />
          </div>
          <div>
              <label for="subject" className="block mb-2 text-lg font-medium text-gray-300 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 px-2.5 py-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-lg font-medium text-gray-300 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit"  className="py-3 px-5 text-2xl border bg-gray-300 font-medium text-center text-gray-900 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
      </div>
  </div>
</section>
     );
}
 
export default ContactForm;