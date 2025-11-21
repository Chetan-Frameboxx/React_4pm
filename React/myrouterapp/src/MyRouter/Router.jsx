import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import Team from "../components/Team";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import LearningComp from "../components/LearningModules/LearningComp";
import Foundation from "../components/LearningModules/FoundationComp/Foundation";
import RouterCompo from "../components/LearningModules/RouterComp/Routercompo";
import FoundationMenu from "../components/LearningModules/FoundationComp/FoundationMenu";


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
    path: "/learning",
    element: <><Navbar/><LearningComp/></>,
     children: [
          { path: "foundation", Component: FoundationMenu },
          { path: "router", Component: RouterCompo },
        ],
  },
  {
    path: "/profile/:username",
    element: <><Navbar/><Profile/></>,
  },
]);




export default router