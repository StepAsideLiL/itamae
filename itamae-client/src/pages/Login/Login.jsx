import { useContext } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toastErrorMessage } from "../../utils/toastErrorMessage";

const Login = () => {
  const {
    setUser,
    auth,
    login,
    googleProvider,
    githubProvider,
    loginWithGoogle,
    loginWithGithub,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLoginFormSubmission = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    login(auth, email, password)
      .then((userInfo) => {
        console.log(userInfo.user);
        setUser(userInfo.user);
        navigate(from);
      })
      .catch((error) => {
        toastErrorMessage("Wrong email and password!");
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle(auth, googleProvider)
      .then((userInfo) => {
        console.log(userInfo.user);
        setUser(userInfo.user);
        navigate(from);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubLogin = () => {
    loginWithGithub(auth, githubProvider)
      .then((userInfo) => {
        console.log(userInfo.user);
        setUser(userInfo.user);
        navigate(from);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="mx-auto mb-12 w-full space-y-8 px-4 md:w-2/6 md:px-0">
      <div className="space-y-4 rounded border border-gray-300 p-6">
        <h1 className="text-3xl font-bold">Login</h1>

        <form className="space-y-6" onSubmit={handleLoginFormSubmission}>
          <div>
            <input
              className="w-full border-b-2 py-3 focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-0"
              type="text"
              name="email"
              placeholder="Email"
            />
          </div>

          <div>
            <input
              className="w-full border-b-2 py-3 focus-visible:border-b-2 focus-visible:border-black focus-visible:outline-0"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>

          <div className="text-right">
            <button className="text-yellow-500 underline">
              Forget Password
            </button>
          </div>

          <div>
            <input
              className="w-full cursor-pointer rounded bg-yellow-500 py-4 font-semibold"
              type="submit"
              value="Login"
            />
          </div>

          <div className="text-center">
            Don&apos;t have an account?{" "}
            <Link className="text-yellow-500 underline" to="/signup">
              Create an account
            </Link>
          </div>
        </form>
      </div>

      <div className="mx-auto w-11/12 space-y-8">
        <div className="flex items-center justify-center gap-3">
          <div className="h-[2px] w-full flex-1 bg-gray-400/80"></div>
          <span>Or</span>
          <div className="h-[2px] w-full flex-1 bg-gray-400/80"></div>
        </div>

        <div className="space-y-2 text-center font-medium">
          <button
            className="block w-full rounded-full border border-gray-300 py-2"
            onClick={handleGoogleLogin}
          >
            <BsGoogle className="mr-2 inline" /> Continue With Google
          </button>
          <button
            className="block w-full rounded-full border border-gray-300 py-2"
            onClick={handleGithubLogin}
          >
            <BsGithub className="mr-2 inline" /> Continue With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
