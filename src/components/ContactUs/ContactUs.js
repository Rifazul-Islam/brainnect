"use client"
import contactUs from "@/assets/contactUs.png";
import facebook from "@/assets/facebook.png";
import linkedin from "@/assets/linkedin.png";
import sendImg from "@/assets/send.png";
import whatsapp from "@/assets/whatsapp.png";
import emailjs from "@emailjs/browser";
import Image from 'next/image';
import Link from 'next/link';
import toast, { Toaster } from "react-hot-toast";
const ContactUs = () => {
    const handleSendEmail = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const contactInfo = {
            to_name: "brainnect",
            from_name: name,
            from_email: email, 
            subject: subject,
            message: message,
        }
        emailjs
      .send(
        "service_op447xu",
        "template_ykz3aa6",
        contactInfo,
        "c8NW96YZKgbGfzo3W"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Email sent successfully!");
          form.reset();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

    }
    return (
        <div className="py-5 mt-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-5 ">
            <Toaster />
            <div className="md:hidden lg:block">
                <Image width={650} height={350} src={contactUs} alt="Contact us Image" />
            </div>
            <div>
                <h3 className="text-2xl font-semibold">Contact us via social media</h3>
                
                <div className="flex flex-wrap gap-3 mt-4">
                    <div className="border-2 border-[#1877F2] border-opacity-60 transition-all hover:border-opacity-100 cursor-pointer p-1.5 rounded-xl">
                        <Link className="flex items-center gap-2" href={"https://www.facebook.com/brainnect"}>
                            <Image width={25} height={25} src={facebook} alt="facebook"></Image>
                            <p className="font-semibold">Facebook</p>
                        </Link>
                    </div>
                    <div className="border-2 border-[#007AB9] border-opacity-60 transition-all hover:border-opacity-100 cursor-pointer p-1.5 rounded-xl">
                        <Link className="flex items-center gap-2" href={"https://www.linkedin.com/in/brainnect-software-a47632304"}>
                            <Image width={25} height={25} src={linkedin} alt="facebook"></Image>
                            <p className="font-semibold">Linkedin</p>
                        </Link>
                    </div>
                    <div className="border-2 border-[#39AE41] border-opacity-60 transition-all hover:border-opacity-100 cursor-pointer p-1.5 rounded-xl">
                    <a className="flex items-center gap-2" href="https://wa.me/+8801795350190?text=Hello how can we help you?" target="_blank" rel="noopener noreferrer" >
                            <Image width={25} height={25} src={whatsapp} alt="facebook"></Image>
                            <p className="font-semibold">Whatsapp</p>
                    </a>
                    </div>
                </div>
                <h3 className="text-2xl font-semibold mt-5">Or send us an email</h3>
                <form onSubmit={handleSendEmail}>
                    <input className="border-2 border-primary border-opacity-40 py-2.5 px-3 w-full bg-[#fff6f8] rounded-xl mt-3 lg:mt-5 outline-none" name="name" type="text" placeholder="Your name" />
                    <input className="border-2 border-primary border-opacity-40 py-2.5 px-3 w-full bg-[#fff6f8] rounded-xl mt-3 lg:mt-5 outline-none" name="email" type="text" placeholder="Your email" />
                    <input className="border-2 border-primary border-opacity-40 py-2.5 px-3 w-full bg-[#fff6f8b8] rounded-xl mt-3 lg:mt-5 outline-none" name="subject" type="text" placeholder="Your subject" />
                    <textarea className="border-2 border-primary border-opacity-40 py-2.5 px-3 h-28 w-full bg-[#fff6f8] rounded-xl mt-3 lg:mt-5 resize-none outline-none" name="message" placeholder="Your Message" />
                    <button type="submit" className="primary-btn mt-3 lg:mt-5 flex items-center gap-2">
                        <span>Send Message</span>
                        <Image src={sendImg} alt="send icon" className=" w-4 h-4"></Image>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;