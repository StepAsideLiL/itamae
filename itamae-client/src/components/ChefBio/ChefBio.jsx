import PropTypes from "prop-types";
import LazyLoad from "react-lazy-load";

const ChefBio = ({ chef }) => {
  const {
    chef_picture,
    chef_name,
    description,
    years_of_experience,
    num_recipes,
    likes,
  } = chef;

  return (
    <div className="flex flex-col items-start gap-4 bg-gray-200 p-8 md:flex-row">
      <div>
        <div className="h-[300px] w-[300px] overflow-hidden rounded border-4 border-yellow-500">
          <LazyLoad height={300} width={300}>
            <img
              className="h-full w-full rounded object-cover"
              src={chef_picture}
              alt={chef_name}
            />
          </LazyLoad>
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">{chef_name}</h1>

        <p>{description}</p>

        <div className="text-xl">
          <p className="text-gray-600">
            Likes: <span className="font-medium text-black">{likes}</span>
          </p>

          <p className="text-gray-600">
            Total Recipes:{" "}
            <span className="font-medium text-black">{num_recipes}</span>
          </p>

          <p className="text-gray-600">
            Exprience:{" "}
            <span className="font-medium text-black">
              {years_of_experience} years
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

ChefBio.propTypes = {
  chef: PropTypes.object.isRequired,
};

export default ChefBio;
