import PropTypes from "prop-types";
import { BsPersonCircle } from "react-icons/bs";

const UserProfile = ({ user }) => {
  const { displayName, photoURL } = user;

  return (
    <div>
      {photoURL ? (
        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-yellow-500">
          <img
            className="h-full w-full object-cover"
            src={photoURL}
            alt={`Profile Picture of ${displayName}`}
          />
        </div>
      ) : (
        <BsPersonCircle className="text-3xl text-yellow-500" />
      )}
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserProfile;
