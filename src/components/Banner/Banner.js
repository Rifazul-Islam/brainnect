import BannerImg from '@/assets/banner-bg.jpg'
import PlayIcon from '@/assets/play.png'
import Image from 'next/image'

const Banner = () => {

    return (
        <div className="banner">
            <div className="max-w-[90%] lg:max-w-[1200px] mx-auto">
                <span className="our_badge">
                    Digital Dreams
                </span>
                <h2>Crafting Digital Masterpieces That Tell Your Brand{"'"}s Story with Impact</h2>
                <p>Crafting impactful digital experiences. Our thoughtful design, strategic development, and seamless user experiences drive measurable results, connecting you with your audience.</p>
                <div className='btn-container'>
                    <button className='primary-btn'>get a quote</button>
                    <button className='second-btn'>
                        <Image src={PlayIcon} alt='banner' className='w-4 h-4'></Image>
                        <span>Watch Video</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;