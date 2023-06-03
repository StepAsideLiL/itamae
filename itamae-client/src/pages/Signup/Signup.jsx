import { Link, useNavigate } from "react-router-dom";
import { toastErrorMessage } from "../../utils/toastErrorMessage";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

// https://images2.imgbox.com/c8/e2/H7KO77Nh_o.png

const Signup = () => {
  const { auth, createUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignupFormSubmission = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // console.log(name, photoURL, email, password);

    if (password.length < 6) {
      toastErrorMessage("Password must be 6 character long!");
      return;
    }

    createUser(auth, email, password)
      .then((userInfo) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            console.log("Account created and Profile updated");
          })
          .catch((error) => {
            console.error(error);
          });
        console.log(userInfo.user);
        logout(auth);
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mx-auto mb-12 w-full space-y-8 px-4 md:w-2/6 md:px-0">
      <div className="space-y-4 rounded border border-gray-300 p-6">
        <h1 className="text-3xl font-bold">Create an account</h1>

        <form className="space-y-6" onSubmit={handleSignupFormSubmission}>
          <div>
            <input
              className="w-full border-b-2 py-3 focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-0"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>

          <div>
            <input
              className="w-full border-b-2 py-3 focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-0"
              type="url"
              name="photoURL"
              placeholder="Photo URL"
              required
            />
          </div>

          <div>
            <input
              className="w-full border-b-2 py-3 focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-0"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <input
              className="w-full border-b-2 py-3 focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-0"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <div>
            <input
              className="w-full cursor-pointer rounded bg-yellow-500 py-4 font-semibold"
              type="submit"
              value="Create an account"
            />
          </div>

          <div className="text-center">
            Have an account?{" "}
            <Link className="text-yellow-500 underline" to="/log">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
