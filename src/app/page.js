import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Navbar from "@/components/Navbar/Navbar";
import OurGoals from "@/components/OurGoals/OurGoals";

import Reviews from "@/components/Reviews/Reviews";
import Services from "@/components/Services/Services";

import TeamInfo from "@/components/TeamInfo/TeamInfo";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <OurGoals></OurGoals>
      <ChooseUs></ChooseUs>
      <Services></Services>
      <TeamInfo></TeamInfo>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
