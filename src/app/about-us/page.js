import AboutUsBanner from "@/components/AboutUsBanner/AboutUsBanner";
import OurGoals from "@/components/OurGoals/OurGoals";
import TeamInfo from "@/components/TeamInfo/TeamInfo";

const page = () => {
    return (
        <div>
            <AboutUsBanner></AboutUsBanner>
            <div className="max-w-[90%] lg:max-w-[1200px] mx-auto">
                <OurGoals></OurGoals>
                <TeamInfo></TeamInfo>
            </div>
        </div>
    );
};

export default page;