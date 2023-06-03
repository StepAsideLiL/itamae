import FeaturedRecipeCard from "../../components/FeaturedRecipeCard/FeaturedRecipeCard";

const FeaturedRecipes = () => {
  return (
    <div className="container mx-auto my-32 space-y-8">
      <h1 className="text-center text-3xl font-bold">Our Featured Recipes</h1>

      <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <FeaturedRecipeCard />

        <FeaturedRecipeCard />

        <FeaturedRecipeCard />
      </div>
    </div>
  );
};

export default FeaturedRecipes;
