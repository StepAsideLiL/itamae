import PropTypes from "prop-types";
import ChefCard from "../../components/ChefCard/ChefCard";

const ChefSection = ({ chefData }) => {
  return (
    <div className="container mx-auto my-28 space-y-8">
      <h1 className="text-center text-3xl font-bold">
        Meet Our Most Experienced chefs
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {chefData.map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

ChefSection.propTypes = {
  chefData: PropTypes.array.isRequired,
};

export default ChefSection;
