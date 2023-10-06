import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      <nav className="flex justify-between items-center py-5 ">
        <img className="w-28 md:w-40" src={`https://i.ibb.co/vPHWjWg/Logo.png`}/>
        <ul className="flex gap-3 md:gap-5">
          <li className=" text-base font-semibold md:text-xl">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className=" text-base font-semibold md:text-xl">
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A]  underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li className=" text-base font-semibold md:text-xl ">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A]  underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
          <li className=" text-base font-semibold md:text-xl ">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A]  underline"
                  : ""
              }
            >
              Login
            </NavLink>
          </li>
          <li className=" text-base font-semibold md:text-xl ">
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A]  underline"
                  : ""
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
