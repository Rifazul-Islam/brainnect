import Banner from "@/components/Banner/Banner";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import ContactUs from "@/components/ContactUs/ContactUs";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Reviews from "@/components/Reviews/Reviews";
import Services from "@/components/Services/Services";
import TeamInfo from "@/components/TeamInfo/TeamInfo";
import Video from "@/components/Video/Video";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="max-w-[90%] lg:max-w-[1200px] mx-auto">
        <Video></Video>
        <Services></Services>
        <ChooseUs></ChooseUs>
        <Projects></Projects>
        <TeamInfo></TeamInfo>
        <Reviews></Reviews>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
