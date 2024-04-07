
import AboutImg2 from '@/assets/2.png'
import Image from 'next/image'

const AboutUsBanner = () => {
    return (
        <div className="about_banner">
            <div className="about_container">
                <div>
                    <span className="our_badge">about us</span>
                    <h2 className="font-semibold text-4xl leading-normal mt-5">Elevate Your Digital Presence with Tailored Web Development Solutions from BrainNect</h2>
                    <p className="font-medium text-slate-700 leading-normal text-lg mt-3">Transform your online presence with BrainNect. From sleek websites to intuitive apps, we specialize in creating tailored solutions that drive growth. Let{"'"}s embark on your digital journey together.</p>
                    <button className="primary-btn mt-7">get a quote</button>
                </div>
                <div>
                    <Image src={AboutImg2} alt='about' className='about_img'></Image>  
                </div>            
            </div>
        </div>
    );
};

export default AboutUsBanner;