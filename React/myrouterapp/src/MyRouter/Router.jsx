import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import Team from "../components/Team";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";


const router = createBrowserRouter([
  {
    path: "/",
    element:<><Navbar/><Home/></> ,
  },
  {
    path: "/about",
    element: <><Navbar/><About/></>,
  },
  {
    path: "/team",
    element: <><Navbar/><Team/></>,
  },
  {
    path: "/profile/:username",
    element: <><Navbar/><Profile/></>,
  },
]);




export default router