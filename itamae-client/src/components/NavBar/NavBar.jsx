import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import UserProfile from "../UserProfile/UserProfile";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="flex items-center justify-center gap-4">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive
            ? "inline-block px-5 py-2 font-medium text-black underline"
            : "inline-block px-5 py-2 font-medium text-gray-500 hover:text-black hover:underline";
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/blog"
        className={({ isActive }) => {
          return isActive
            ? "inline-block px-5 py-2 font-medium text-black underline"
            : "inline-block px-5 py-2 font-medium text-gray-500 hover:text-black hover:underline";
        }}
      >
        Blog
      </NavLink>

      {user ? (
        <Link to="/profile">
          <UserProfile user={user} />
        </Link>
      ) : (
        <Link
          to="/login"
          className="inline-block rounded bg-yellow-500 px-5 py-2 font-semibold"
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default NavBar;
