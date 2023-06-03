import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Branding = () => {
  return (
    <div>
      <Link className="inline-block" to="/">
        <img className="mx-auto block w-10" src={logo} alt="Site Logo" />
        <h1 className="text-lg font-semibold">Itamae</h1>
      </Link>
    </div>
  );
};

export default Branding;
