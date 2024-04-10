import Image from 'next/image'
import sendImg from '@/assets/send.png'
import phoneImg from '@/assets/phone.png'
import envelopeImg from '@/assets/envelope.png'
import facebookImg from '@/assets/facebook.png'
import linkedinImg from '@/assets/linkedin.png'
import portfolioImg from '@/assets/internet.png'
import whatsappImg from '@/assets/whatsapp.png'

const ContactUs = () => {
    return (
        <div className='grid grid-cols-2 gap-5 items-center pt-5 pb-10'>
            <div>
                <h3 className="text-2xl font-semibold mt-5 capitalize">Get In Touch</h3>
                <div className="flex items-center gap-3 my-3">
                    <Image
                    className="h-5 w-5 rotate-90"
                    src={phoneImg}
                    alt="phone"
                    />
                    <p className="text-gray-600 text-lg font-medium">+880 01643876985</p>
                </div> 
                <div className="flex gap-3 my-3">
                    <Image
                    className="h-5 w-5"
                    src={envelopeImg}
                    alt="email"
                    />
                    <div>
                        <p className="text-gray-600 text-lg font-medium -mt-0.5">brainnect.software@gmail.com</p>
                        <p className="text-gray-600 text-lg font-medium">support@brainnect.com</p>
                    </div>
                </div> 
                <h3 className="text-2xl font-semibold mt-5 capitalize">our social media links</h3>
                <div className="flex gap-4 mt-5 mb-1">
                    <div className="border-2 border-[#1877F2] border-opacity-60 transition-all hover:border-opacity-100 cursor-pointer rounded-2xl p-1.5">
                        <Image
                        className="h-6 w-6 cursor-pointer"
                        src={facebookImg}
                        alt="facebook"
                        />
                    </div>

                    <div className="border-2 border-[#007AB9] border-opacity-60 transition-all hover:border-opacity-100 cursor-pointer rounded-2xl p-1.5">
                        <Image
                        className="h-6 w-6 cursor-pointer"
                        src={linkedinImg}
                        alt="linkedin"
                        />
                    </div>

                    <div className="border-2 border-[#39AE41] border-opacity-60 transition-all hover:border-opacity-100 cursor-pointer rounded-2xl p-1.5">
                        <Image
                        className="h-6 w-6 cursor-pointer"
                        src={whatsappImg}
                        alt="whatsapp"
                        />
                    </div>
                    </div>
            </div>
            <div>
                <h3 className="text-2xl font-semibold mt-5">Send us an email</h3>
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