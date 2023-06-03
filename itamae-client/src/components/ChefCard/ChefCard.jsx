import PropTypes from "prop-types";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {
    id,
    chef_picture,
    chef_name,
    years_of_experience,
    num_recipes,
    likes,
  } = chef;

  return (
    <div className="space-y-3 rounded border-2 border-yellow-500 p-3">
      <div className="h-[250px] overflow-hidden rounded">
        <LazyLoad height={250}>
          <img
            className="inline-block h-full w-full object-cover"
            src={chef_picture}
            alt={chef_name}
          />
        </LazyLoad>
      </div>

      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-semibold">{chef_name}</h1>

          <p className="text-gray-500">
            Experience:{" "}
            <span className="font-semibold text-black">
              {years_of_experience} years
            </span>
          </p>

          <p className="text-gray-500">
            Recipes:{" "}
            <span className="font-semibold text-black">{num_recipes}</span>
          </p>

          <p className="text-gray-500">
            Likes: <span className="font-semibold text-black">{likes}</span>
          </p>
        </div>

        <div>
          <button>
            <Link
              to={`/chef/${id}`}
              className="inline-block rounded bg-yellow-500 px-5 py-2 font-semibold"
            >
              View Recipes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

ChefCard.propTypes = {
  chef: PropTypes.object.isRequired,
};

export default ChefCard;
