import Banner from "@/components/Banner/Banner";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import ContactUs from "@/components/ContactUs/ContactUs";
import Navbar from "@/components/Navbar/Navbar";
import OurGoals from "@/components/OurGoals/OurGoals";
import Projects from "@/components/Projects/Projects";

import Reviews from "@/components/Reviews/Reviews";
import Services from "@/components/Services/Services";

import TeamInfo from "@/components/TeamInfo/TeamInfo";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Banner></Banner>
      <OurGoals></OurGoals>
      <ChooseUs></ChooseUs>
      <Services></Services>
      <Projects></Projects>
      <TeamInfo></TeamInfo>
      <ContactUs></ContactUs>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
