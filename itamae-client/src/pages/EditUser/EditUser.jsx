import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const { auth, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { displayName, photoURL } = user;

  const handleUpdataBtn = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const photoURL = event.target.photoURL.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("Profile updated");
        navigate("/profile");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mx-auto mb-12 w-full space-y-8 px-4 md:w-2/6 md:px-0">
      <div className="space-y-4 rounded border border-gray-300 p-6">
        <h1 className="text-3xl font-bold">Change Your Info</h1>

        <form className="space-y-6" onSubmit={handleUpdataBtn}>
          <div>
            <input
              className="w-full border-b-2 py-3 focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-0"
              type="text"
              name="name"
              placeholder={displayName}
              required
            />
          </div>

          <div>
            <input
              className="w-full border-b-2 py-3 focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-0"
              type="url"
              name="photoURL"
              placeholder={photoURL}
              required
            />
          </div>

          <div>
            <input
              className="w-full cursor-pointer rounded bg-yellow-500 py-4 font-semibold"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
