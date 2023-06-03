import { Outlet, useNavigation } from "react-router-dom";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import LoadingPage from "../components/LoadingPage/LoadingPage";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />

      {navigation.state === "loading" ? <LoadingPage /> : <Outlet />}

      <Footer />
    </div>
  );
};

export default Root;
