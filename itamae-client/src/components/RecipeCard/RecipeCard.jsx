import PropTypes from "prop-types";
import { useState } from "react";
import LazyLoad from "react-lazy-load";

const RecipeCard = ({ recipe }) => {
  const [isDisable, setIsDisable] = useState(false);
  const { recipe_name, thumbnail, ingredients, cooking_method, rating } =
    recipe;

  return (
    <div className="space-y-3 rounded border-2 border-yellow-500 p-5">
      <h1 className="text-2xl font-semibold">{recipe_name}</h1>

      <LazyLoad>
        <img
          className="mx-auto inline-block w-full"
          src={thumbnail}
          alt={recipe_name}
        />
      </LazyLoad>

      <div>
        <h3 className="text-lg font-semibold">Ingredients</h3>
        <p>{ingredients.join(", ")}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Cooking Method</h3>
        <p>{cooking_method}</p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div>
          <span className="font-bold">{rating}</span>
        </div>

        <div>
          <button
            className="inline-block rounded bg-yellow-500 px-5 py-2 font-semibold disabled:bg-gray-300 disabled:text-gray-400"
            onClick={() => setIsDisable(true)}
            disabled={isDisable}
          >
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeCard;
