import { useContext } from "react";
import Branding from "../../components/Branding/Branding";
import NavBar from "../../components/NavBar/NavBar";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { isLoading } = useContext(AuthContext);

  return (
    <header className="container mx-auto my-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <Branding />

        {!isLoading && <NavBar />}
      </div>
    </header>
  );
};

export default Header;
