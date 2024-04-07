import contactUs from "@/assets/contactUs.png";
import facebook from "@/assets/facebook.png";
import linkedin from "@/assets/linkedin.png";
import whatsapp from "@/assets/whatsapp.png";
import Image from 'next/image'
import Link from 'next/link'
const ContactUs = () => {
    return (
        <div className="max-w-[1300px] mx-auto py-5 mt-10 flex items-center gap-10 ">
            <div className="flex-1">
                <Image width={650} height={350} src={contactUs} alt="Contact us Image" />
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-semibold">Contact us via social media</h3>
                <div className="flex gap-3 mt-4">
                    <div className="border border-[#1877F2] p-1.5 rounded-xl"><Link className="flex items-center gap-2" href={"#"}><Image width={25} height={25} src={facebook} alt="facebook"></Image><p className="font-semibold">Facebook</p></Link></div>
                    <div className="border border-[#1877F2] p-1.5 rounded-xl"><Link className="flex items-center gap-2" href={"#"}><Image width={25} height={25} src={linkedin} alt="facebook"></Image><p className="font-semibold">Linkedin</p></Link></div>
                    <div className="border border-[#1877F2] p-1.5 rounded-xl"><Link className="flex items-center gap-2" href={"#"}><Image width={25} height={25} src={whatsapp} alt="facebook"></Image><p className="font-semibold">Whatsapp</p></Link></div>
                </div>
                <h3 className="text-xl font-semibold mt-5">Or send us an email</h3>
                <form>
                    <input className="border py-2.5 px-3 w-full border-[#fc477178] bg-[#fc47711a] rounded-xl mt-5 outline-none" type="text" placeholder="Your name" />
                    <input className="border py-2.5 px-3 w-full border-[#fc477178] bg-[#fc47711a] rounded-xl mt-5 outline-none" type="text" placeholder="Your email" />
                    <input className="border py-2.5 px-3 w-full border-[#fc477178] bg-[#fc47711a] rounded-xl mt-5 outline-none" type="text" placeholder="Your subject" />
                    <textarea className="border py-2.5 px-3 h-28 w-full border-[#fc477178] bg-[#fc47711a] rounded-xl mt-5 resize-none outline-none" placeholder="Your Message" />
                    <button className="bg-[#FC4772] text-white px-5 py-2.5 rounded-[10px] mt-5">Send Email</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;