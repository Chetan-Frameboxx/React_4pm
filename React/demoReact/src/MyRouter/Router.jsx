import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import ProtectedRoute from "../ProtectedRoute";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";

const User = React.lazy(() => import("../Pages/User"));


// const Dashboard = React.lazy(() => import("./pages/Dashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Dashboard /> },
      {
        path: "user",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <User />
          </Suspense>
        ),
      },
    ],
  },
]);



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "dashboard",
//         element: (
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//     ],
//   },
// ]);

export default router;
