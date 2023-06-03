import { ClipLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="bg-gray-800 py-28 text-center">
      <ClipLoader color="#f2f20c" size={100} speedMultiplier={1} />
    </div>
  );
};

export default LoadingPage;
