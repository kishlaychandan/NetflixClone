// import React, { useState } from "react";
// import { IoMdArrowDropdown, IoMdMenu, IoMdClose } from "react-icons/io";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { API_END_POINT } from "../utils/constant";
// import { setUser } from "../redux/userSlice";
// import { setToggle } from "../redux/movieSlice";

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state
//   const user = useSelector((store) => store.user.user);
//   const toggle = useSelector((store) => store.movie.toggle);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const logoutHandler = async () => {
//     try {
//       const res = await axios.get(`${API_END_POINT}/logout`);
//       if (res.data.success) {
//         toast.success(res.data.message);
//       }
//       dispatch(setUser(null));
//       navigate("/");
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   const toggleHandler = () => {
//     dispatch(setToggle(!toggle));
//   };

//   return (
//     <div className="absolute z-10 flex w-full items-center justify-between bg-gradient-to-b from-black to-transparent p-4 md:px-8">
//       {/* Logo */}
//       <img
//         className="w-32 md:w-48"
//         src="https://banner2.cleanpng.com/20180702/qac/aax1p8e04.webp"
//         alt="netflix logo"
//       />

//       {/* Hamburger Icon for Small Screens */}
//       <div className="md:hidden">
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           {isMenuOpen ? (
//             <IoMdClose size="28px" color="white" />
//           ) : (
//             <IoMdMenu size="28px" color="white" />
//           )}
//         </button>
//       </div>

//       {/* Desktop Menu & Mobile Dropdown */}
//       <div
//         className={`${
//           isMenuOpen ? "block" : "hidden"
//         } absolute md:static top-16 right-4 md:flex md:items-center md:space-x-4 bg-black md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none`}
//       >
//         {user && (
//           <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
//             <h1 className="text-base md:text-lg font-medium text-white flex items-center cursor-pointer">
//             <IoMdArrowDropdown size="24px" color="white" />
//               {user.fullName}
//             </h1>

//             <div className="space-y-2 md:space-y-0 md:space-x-2">
//               {/* Logout Button */}
//               <button
//                 className="bg-red-800 text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-red-700 w-full md:w-auto"
//                 onClick={logoutHandler}
//               >
//                 LogOut
//               </button>

//               {/* Toggle Button */}
//               <button
//                 className="bg-red-800 text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-red-700 w-full md:w-auto"
//                 onClick={toggleHandler}
//               >
//                 {toggle ? "Home" : "Search Movie"}
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Header;
import netflixlogo from "../assets/netflixlogo.png";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdMenu, IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { API_END_POINT } from "../utils/constant";
import { setUser } from "../redux/userSlice";
import { setToggle } from "../redux/movieSlice";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Track profile state
  const user = useSelector((store) => store.user.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle(!toggle));
  };

  return (
    <div className="absolute z-30 flex w-full items-center justify-between bg-gradient-to-b from-black to-transparent p-4 md:px-8">
      {/* Logo */}
      <img
        className="w-36 md:w-52"
        src={netflixlogo}
        alt="netflix logo"
      />

      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <IoMdClose size="28px" color="white" />
          ) : (
            <IoMdMenu size="28px" color="white" />
          )}
        </button>
      </div>

      {/* Desktop Menu & Mobile Dropdown */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute md:static top-16 right-4 md:flex md:items-center md:space-x-4 bg-black md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none`}
      >
        {user && (
          <div className="relative flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Profile Dropdown Toggle */}
            <h1
              className="text-base md:text-lg font-medium text-white flex items-center cursor-pointer"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <IoMdArrowDropdown size="24px" color="white" />
              {user.fullName}
            </h1>

            {/* Profile Details Dropdown */}
            {isProfileOpen && (
              <div className="absolute top-12 right-0 bg-gray-800 text-white p-4 rounded-lg shadow-md w-64">
                <h2 className="text-lg font-semibold">{user.fullName}</h2>
                <p className="text-sm">Email: {user.email}</p>
                <button
                  className="mt-4 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Cancel
                </button>
              </div>
            )}

            {/* Logout & Toggle Buttons */}
            <div className="space-y-2 md:space-y-0 md:space-x-2">
              <button
                className="bg-red-800 text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-red-700 w-full md:w-auto"
                onClick={logoutHandler}
              >
                LogOut
              </button>
              <button
                className="bg-red-800 text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-red-700 w-full md:w-auto"
                onClick={toggleHandler}
              >
                {toggle ? "Home" : "Search Movie"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
