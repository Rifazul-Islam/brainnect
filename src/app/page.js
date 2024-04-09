import Banner from "@/components/Banner/Banner";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import ContactUs from "@/components/ContactUs/ContactUs";
import Navbar from "@/components/Navbar/Navbar";
import OurGoals from "@/components/OurGoals/OurGoals";

import Reviews from "@/components/Reviews/Reviews";
import Services from "@/components/Services/Services";

import TeamInfo from "@/components/TeamInfo/TeamInfo";
import Video from "@/components/Video/Video";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Video></Video>
      <OurGoals></OurGoals>
      <ChooseUs></ChooseUs>
      <Services></Services>
      <TeamInfo></TeamInfo>
      <ContactUs></ContactUs>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
