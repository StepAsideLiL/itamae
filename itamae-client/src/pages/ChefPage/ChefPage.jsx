import { useLoaderData } from "react-router-dom";
import ChefBio from "../../components/ChefBio/ChefBio";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const ChefPage = () => {
  const { chef, chefRecipe } = useLoaderData();

  return (
    <div>
      <ChefBio chef={chef} />

      <div className="container mx-auto my-28 space-y-8">
        <h1 className="text-center text-3xl font-bold">Recipes</h1>

        <div className="grid grid-cols-1 gap-6 px-2 md:grid-cols-3 md:px-0">
          {chefRecipe.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefPage;
