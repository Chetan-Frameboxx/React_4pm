import { createBrowserRouter } from "react-router";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <div>Hello World</div>,
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <div>Hello About</div>,
        <Footer />
      </>
    ),
  },
  {
    path: "/team",
    element: (
      <>
        <Navbar />
        <div>Hello Team</div>,
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <div>Hello Contact</div>,
        <Footer />
      </>
    ),
  },
]);

export default router;
