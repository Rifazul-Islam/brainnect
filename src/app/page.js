import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Navbar from "@/components/Navbar/Navbar";
import OurGoals from "@/components/OurGoals/OurGoals";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <OurGoals></OurGoals>
      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;
