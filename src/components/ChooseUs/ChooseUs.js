import checkImg from '@/assets/check.png';
import chooseImg from '@/assets/choose-img.png';
import Image from "next/image";

const ChooseUs = () => {
  return (
    <div className="py-5 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div>
          <Image
            className="w-full md:hidden lg:block"
            src={chooseImg}
            alt="image"
          />
        </div>
        <div className="space-y-6">
          <span className="our_badge">
            Why Choose Us
          </span>

          <h2 className="primary_title">
            Take on any challenges of the digital world
          </h2>
          <div className="space-y-2">
            <div className="choose_item">
              <Image
                src={checkImg}
                width={300}
                height={50}
                alt=""
              />
              <p>Skilled professionals for superior web solutions </p>
            </div>
            <div className="choose_item">
              <Image
                src={checkImg}
                width={300}
                height={50}
                alt=""
              />
              <p>Collaborative & Proven Results </p>
            </div>
            <div className="choose_item">
              <Image
                src={checkImg}
                width={300}
                height={50}
                alt=""
              />
              <p>Our track record speaks for itself </p>
            </div>
            <div className="choose_item">
              <Image
                src={checkImg}
                width={300}
                height={50}
                alt=""
              />
              <p>Work closely with us for success </p>
            </div>
          </div>

          <div className="pt-3">
          <a className="flex items-center gap-2" href="https://wa.me/+8801795350190?text=Hello how can we help you?" target="_blank" rel="noopener noreferrer" >
            <button className="primary-btn">
              Get Started
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
