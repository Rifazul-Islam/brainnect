import AboutUsBanner from "@/components/AboutUsBanner/AboutUsBanner";
import OurGoals from "@/components/OurGoals/OurGoals";

const page = () => {
    return (
        <div>
            <AboutUsBanner></AboutUsBanner>
            <div className="max-w-[90%] lg:max-w-[1300px] mx-auto">
                <OurGoals></OurGoals>
            </div>
        </div>
    );
};

export default page;