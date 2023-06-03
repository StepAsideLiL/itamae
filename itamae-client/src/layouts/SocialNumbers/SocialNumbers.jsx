import SocialNumberCard from "../../components/SocialNumberCard/SocialNumberCard";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiCampCookingPot, GiCook } from "react-icons/Gi";
import { TfiWrite } from "react-icons/Tfi";

const SocialNumbers = () => {
  return (
    <div className="container mx-auto my-32 space-y-8">
      <h1 className="text-center text-3xl font-bold">Our Pride in Numbers</h1>

      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
        <SocialNumberCard
          icon={<BsFillPeopleFill />}
          number={"300"}
          title={"Members"}
        />

        <SocialNumberCard
          icon={<GiCampCookingPot />}
          number={"130"}
          title={"Recipes"}
        />

        <SocialNumberCard icon={<GiCook />} number={"80"} title={"Chefs"} />

        <SocialNumberCard icon={<TfiWrite />} number={"150"} title={"Blogs"} />
      </div>
    </div>
  );
};

export default SocialNumbers;
