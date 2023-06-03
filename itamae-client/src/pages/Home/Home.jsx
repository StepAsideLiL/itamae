import { useLoaderData } from "react-router-dom";
import ChefSection from "../../layouts/ChefSection/ChefSection";
import Hero from "../../layouts/Hero/Hero";
import FeaturedRecipes from "../../layouts/FeaturedRecipes/FeaturedRecipes";
import SocialNumbers from "../../layouts/SocialNumbers/SocialNumbers";

const Home = () => {
  const chefData = useLoaderData();

  return (
    <div className="">
      <Hero />

      <ChefSection chefData={chefData} />

      <FeaturedRecipes />

      <SocialNumbers />
    </div>
  );
};

export default Home;
