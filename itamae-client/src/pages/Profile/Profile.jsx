import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Profile = () => {
  const { auth, user, setUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const { displayName, photoURL, email } = user;

  const handleSignOut = () => {
    logout(auth)
      .then(() => {
        setUser(null);
        navigate("/", { replace: true });
        console.log("Logout");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="my-14 flex flex-col items-start gap-4 bg-gray-200 p-8 md:flex-row">
        <div>
          <div className="h-[300px] w-[300px] overflow-hidden rounded border-4 border-yellow-500">
            <LazyLoad height={300} width={300}>
              <img
                className="h-full w-full rounded object-cover"
                src={photoURL}
                alt={"ass"}
              />
            </LazyLoad>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">{displayName}</h1>

          <p>{email}</p>

          <Link to="/edit-user" className="block">
            <button className="inline-block rounded bg-yellow-500 px-5 py-2 font-semibold">
              Edit Profile
            </button>
          </Link>

          <button
            className="block rounded bg-gray-500 px-5 py-2 font-semibold text-white"
            onClick={handleSignOut}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
