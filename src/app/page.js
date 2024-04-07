import ChooseUs from "@/components/ChooseUs/ChooseUs";
import ContactUs from "@/components/ContactUs/ContactUs";
import Navbar from "@/components/Navbar/Navbar";
import OurGoals from "@/components/OurGoals/OurGoals";
import TeamInfo from "@/components/TeamInfo/TeamInfo";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <OurGoals></OurGoals>
      <ChooseUs></ChooseUs>
      <TeamInfo></TeamInfo>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
