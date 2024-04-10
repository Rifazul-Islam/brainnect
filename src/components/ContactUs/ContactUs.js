import contactUs from "@/assets/contactUs.png";
import facebook from "@/assets/facebook.png";
import linkedin from "@/assets/linkedin.png";
import whatsapp from "@/assets/whatsapp.png";
import sendImg from "@/assets/send.png";
import Image from 'next/image'
import Link from 'next/link'

const ContactUs = () => {
    return (
        <div className="py-5 mt-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-5 ">
            <div className="md:hidden lg:block">
                <Image width={650} height={350} src={contactUs} alt="Contact us Image" />
            </div>
            <div>
                <h3 className="text-2xl font-semibold">Contact us via social media</h3>
                <div className="flex flex-wrap gap-3 mt-4">
                    <div className="border-2 border-[#1877F2] border-opacity-60 transition-all hover:border-opacity-100 cursor-pointer p-1.5 rounded-xl">
                        <Link className="flex items-center gap-2" href={"#"}>
                            <Image width={25} height={25} src={facebook} alt="facebook"></Image>
                            <p className="font-semibold">Facebook</p>
                        </Link>
                    </div>
                    <div className="border-2 border-[#007AB9] border-opacity-60 transition-all hover:border-opacity-100 cursor-pointer p-1.5 rounded-xl">
                        <Link className="flex items-center gap-2" href={"#"}>
                            <Image width={25} height={25} src={linkedin} alt="facebook"></Image>
                            <p className="font-semibold">Linkedin</p>
                        </Link>
                    </div>
                    <div className="border-2 border-[#39AE41] border-opacity-60 transition-all hover:border-opacity-100 cursor-pointer p-1.5 rounded-xl">
                        <Link className="flex items-center gap-2" href={"#"}>
                            <Image width={25} height={25} src={whatsapp} alt="facebook"></Image>
                            <p className="font-semibold">Whatsapp</p>
                        </Link>
                    </div>
                </div>
                <h3 className="text-2xl font-semibold mt-5">Or send us an email</h3>
                <form>
                    <input className="border-2 border-primary border-opacity-40 py-2.5 px-3 w-full bg-[#fff6f8] rounded-xl mt-3 lg:mt-5 outline-none" type="text" placeholder="Your name" />
                    <input className="border-2 border-primary border-opacity-40 py-2.5 px-3 w-full bg-[#fff6f8] rounded-xl mt-3 lg:mt-5 outline-none" type="text" placeholder="Your email" />
                    <input className="border-2 border-primary border-opacity-40 py-2.5 px-3 w-full bg-[#fff6f8b8] rounded-xl mt-3 lg:mt-5 outline-none" type="text" placeholder="Your subject" />
                    <textarea className="border-2 border-primary border-opacity-40 py-2.5 px-3 h-28 w-full bg-[#fff6f8] rounded-xl mt-3 lg:mt-5 resize-none outline-none" placeholder="Your Message" />
                    <button className="primary-btn mt-3 lg:mt-5 flex items-center gap-2">
                        <span>Send Message</span>
                        <Image src={sendImg} alt="send icon" className=" w-4 h-4"></Image>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;