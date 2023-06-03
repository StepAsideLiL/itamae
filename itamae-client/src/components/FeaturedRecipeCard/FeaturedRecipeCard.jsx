import LazyLoad from "react-lazy-load";

const FeaturedRecipeCard = () => {
  return (
    <div className="space-y-4 rounded border-2 border-gray-300 p-4">
      <div className="h-[450px] overflow-hidden">
        <LazyLoad height={450}>
          <img
            className="h-full w-full rounded object-cover"
            src="https://k7d2p7y5.stackpathcdn.com/cuisine-wp/wp-content/uploads/2017/05/35.jpg"
            alt="Healthy Breakfast Meals"
          />
        </LazyLoad>
      </div>

      <div className="space-y-2 text-center">
        <h1 className="text-xl font-bold">Healthy Breakfast Meals</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
          consequuntur.
        </p>
        <button className="inline-block rounded bg-yellow-500 px-5 py-2 font-semibold">
          Visit
        </button>
      </div>
    </div>
  );
};

export default FeaturedRecipeCard;
