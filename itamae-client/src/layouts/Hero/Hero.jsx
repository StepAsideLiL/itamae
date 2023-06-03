import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Hero = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div className="relative overflow-hidden">
      <img
        className="h-full w-full object-contain"
        src={heroImage}
        alt="Hero background"
      />

      <div className="absolute inset-0 bg-black/75"></div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-2 text-center">
        <div className="katana-shadow space-y-1">
          <h1 className="mx-auto w-fit bg-white text-lg md:text-5xl">
            Find The Best Chef From{" "}
            <span className="text-yellow-500">Japan</span>
          </h1>
          <h1 className="mx-auto w-fit bg-white text-xl md:text-7xl">&</h1>
          <h1 className="mx-auto w-fit bg-white text-lg md:text-5xl">
            Enjoy Your <span className="text-yellow-500">Japanese</span> Cuisine
          </h1>
        </div>

        {!user && (
          <Link className="inline-block" to="/login">
            <button className="inline-block rounded bg-yellow-500 px-3 py-1 text-base font-semibold md:px-5 md:py-2 md:text-lg">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
