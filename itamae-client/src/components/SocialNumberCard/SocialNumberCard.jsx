import PropTypes from "prop-types";

const SocialNumberCard = ({ icon, number, title }) => {
  return (
    <div className="rounded border-2 border-yellow-500 p-5">
      <div className="flex flex-col items-center">
        <div className="text-9xl text-yellow-500">{icon}</div>
        <div className="text-4xl font-bold text-red-600">{number}</div>
        <div className="text-xl font-bold text-gray-600">{title}</div>
      </div>
    </div>
  );
};

SocialNumberCard.propTypes = {
  icon: PropTypes.element.isRequired,
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SocialNumberCard;
