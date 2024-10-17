// import React from "react";
// import Header from "./Header";
// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { Link,useNavigate } from "react-router-dom";
// import { API_END_POINT } from "../utils/constant";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoading, setUser } from "../redux/userSlice";

// function Login() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const isLoading=useSelector((store)=>store.user.isLoading)
//   const [isLogin, setIsLogin] = useState(false);
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const loginHandler = () => {
//     setIsLogin(!isLogin);
//   };

//   const getInputData = async (e) => {
//     e.preventDefault();
//     dispatch(setLoading(true));
//     if (isLogin) {
//       const user = { email, password };
//       try {
//         const res = await axios.post(`${API_END_POINT}/login`, user,{
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         });
//         console.log(res);
        
//         // console.log(res.data.success);
//         if(res.data.success){
//           toast.success(res.data.message);
//         }
//         // console.log("hii");
        
//         // console.log(res.data.user);
        
//         dispatch(setUser(res.data.user));
//         navigate("/browse");
//       } catch (err) {
//         toast.error(err.response.data.message);
//         console.log(err.message);
//       }
//       finally{
//         dispatch(setLoading(false));
//       }
//     } else {
//         dispatch(setLoading(true));
//       const user = { fullName, email, password };
//       try {
//         const res = await axios.post(`${API_END_POINT}/register`, user,{
//             headers: {
//               "Content-Type": "application/json",
//             },
//             withCredentials: true,
//           });
//         // console.log(res);
//         if(res.data.success){
//           toast.success(res.data.message);  
//         }
//         setIsLogin(true);
//       } catch (err) {
//         toast.error(err.response.data.message);
//         console.log(err.message);
//       }
//       finally{
//         dispatch(setLoading(false));
//       }
//     }

//     setFullName("");
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <>
//       <Header />
//       <div className="absolute">
//         <img
//           className="w-[100vw] h-[100vh]"
//           src="https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp"
//           alt="banner"
//         />
//       </div>
//       <form
//         onSubmit={getInputData}
//         action=""
//         className="absolute p-12 bg-black min-w-[350px] flex flex-col w-3/12 my-36 left-0 right-0 items-center justify-center mx-auto opacity-85 rounded-md"
//       >
//         <h1 className="text-3xl text-white mb-5 font-bold">
//           {isLogin ? "Login" : "Signup"}
//         </h1>
//         <div className="flex flex-col">
//           {!isLogin && (
//             <input
//               type="text"
//               placeholder="name"
//               className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//             />
//           )}
//           <input
//             type="email"
//             placeholder="email"
//             className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="password"
//             className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button className="bg-red-800 mt-6 text-white px-4 py-2 rounded-sm font-medium">
//             {`${isLoading ? "Loading..." : (isLogin ? "Login" : "Signup")}`}
//           </button>
//           <p className="text-white mt-2">
//             {isLogin ? "New to Netflix?" : "Already have an account?"}{" "}
//             <span
//               onClick={loginHandler}
//               className="cursor-pointer ml-1 text-blue-600 font-medium"
//             >
//               {isLogin ? "signup" : "login"}
//             </span>
//           </p>
//         </div>
//       </form>
//     </>
//   );
// }

// export default Login;
import React from "react";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { API_END_POINT } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector((store) => store.user.isLoading);
    const [isLogin, setIsLogin] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); // State for displaying messages

    const loginHandler = () => {
        setIsLogin(!isLogin);
        setMessage(""); // Clear the message when switching forms
    };

    const getInputData = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        setMessage(""); // Clear previous messages

        if (isLogin) {
            const user = { email, password };
            try {
                const res = await axios.post(`${API_END_POINT}/login`, user, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                });

                if (res.data.success) {
                    toast.success(res.data.message);
                    setMessage(res.data.message); // Set success message
                }

                dispatch(setUser(res.data.user));
                navigate("/browse");
            } catch (err) {
                const errorMsg = err.response?.data?.message || "Login failed!";
                toast.error(errorMsg);
                setMessage(errorMsg); // Set error message
            } finally {
                dispatch(setLoading(false));
            }
        } else {
            const user = { fullName, email, password };
            try {
                const res = await axios.post(`${API_END_POINT}/register`, user, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                });

                if (res.data.success) {
                    toast.success(res.data.message);
                    setMessage(res.data.message); // Set success message
                    setIsLogin(true);
                }
            } catch (err) {
                const errorMsg = err.response?.data?.message || "Registration failed!";
                toast.error(errorMsg);
                setMessage(errorMsg); // Set error message
            } finally {
                dispatch(setLoading(false));
            }
        }

        setFullName("");
        setEmail("");
        setPassword("");
    };

    return (
        <>
            <Header />
            <div className="absolute">
                <img
                    className="w-[100vw] h-[100vh]"
                    src="https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp"
                    alt="banner"
                />
            </div>
            <form
                onSubmit={getInputData}
                className="absolute p-11 bg-black min-w-[340px] flex flex-col w-3/12 my-36 left-0 right-0 top-[12%] items-center justify-center mx-auto opacity-85 rounded-md"
            >
                <h1 className="text-3xl text-white mb-5 font-bold">
                    {isLogin ? "Login" : "Signup"}
                </h1>

                {/* Display message */}
                {message && (
                    <div className="text-white mb-4 text-center">
                        {message}
                    </div>
                )}

                <div className="flex flex-col w-full text-center">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Name"
                            className="outline-none w-full p-3 my-2 rounded-sm bg-gray-800 text-white"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="bg-red-800 mt-6 text-white px-4 py-2 rounded-sm font-medium">
                        {`${isLoading ? "Loading..." : (isLogin ? "Login" : "Signup")}`}
                    </button>
                    <p className="text-white mt-2">
                        {isLogin ? "New to Netflix?" : "Already have an account?"}{" "}
                        <span
                            onClick={loginHandler}
                            className="cursor-pointer ml-1 text-blue-600 font-medium"
                        >
                            {isLogin ? "Signup" : "Login"}
                        </span>
                    </p>
                </div>
            </form>
        </>
    );
}

export default Login;
