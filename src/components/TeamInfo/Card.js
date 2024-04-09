import Image from "next/image";
import phoneImg from '@/assets/phone.png'
import envelopeImg from '@/assets/envelope.png'
import facebookImg from '@/assets/facebook.png'
import linkedinImg from '@/assets/linkedin.png'
import portfolioImg from '@/assets/internet.png'
import whatsappImg from '@/assets/whatsapp.png'

const Card = ({ teamInfo }) => {
  const { profile, name, position, email, number } = teamInfo;
  
  return (
    <div className="team_card">
      <div className="flex items-center gap-4 p-5">
        <Image
          className="member_img"
          src={profile}
          width={300}
          height={50}
          alt="team member photo"
        />
        <div>
          <h2>{name}</h2>
          <h3>{position} </h3>
        </div>
      </div>
      <div className="border-b-2"></div>

      {/* 2nd part work */}
      <div className="p-5">
        {
          email ? 
          <div className="flex items-center gap-3">
            <Image
              className="h-5 w-[21px]"
              src={envelopeImg}
              alt="email"
            />
            <p className="text-gray-600 text-lg font-medium break-all"> {email} </p>
          </div>
          :
          ''
        }
        {
          number ?
          <div className="flex items-center gap-3 my-3">
            <Image
              className="h-5 w-5 rotate-90"
              src={phoneImg}
              alt="phone"
            />
            <p className="text-gray-600 text-lg font-medium"> +880 {number} </p>
          </div> 
          :
          ''
        }
        <div className="flex gap-4 mt-5 mb-1">
          <div className="border-2 border-[#1877F2] border-opacity-60 rounded-2xl p-1.5">
            <Image
              className="h-7 w-7 cursor-pointer"
              src={facebookImg}
              alt="facebook"
            />
          </div>

          <div className="border-2 border-[#007AB9] border-opacity-60 rounded-2xl p-1.5">
            <Image
              className="h-7 w-7 cursor-pointer"
              src={linkedinImg}
              alt="linkedin"
            />
          </div>

          <div className="border-2 border-[#FC4772] border-opacity-60 rounded-2xl p-1.5">
            <Image
              className="h-7 w-7 cursor-pointer"
              src={portfolioImg}
              alt="portfolio"
            />
          </div>

          <div className="border-2 border-[#39AE41] border-opacity-60 rounded-2xl p-1.5">
            <Image
              className="h-7 w-7 cursor-pointer"
              src={whatsappImg}
              alt="whatsapp"
            />
          </div>
        </div>
      </div>

      {/* three part work */}

    </div>
  );
};

export default Card;
