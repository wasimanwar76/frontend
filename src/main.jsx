import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import MissionVision from "./Pages/MissionVision/MissionVision";
import Register from "./Pages/Authentication/Register/Register";
import Login from "./Pages/Authentication/Login/Login";
import ContactUs from "./Pages/Contact/ContsctUs";
import { AuthProvider } from "./context/authContext";
import StudentPrivateRoute from "./PrivateRoutes/StudentPrivateRoute/StudentPrivateRoute";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import StudentDashboard from "./Pages/Dashboard/StudentDashboard";
import Shifts from "./Pages/Shifts/Shifts";
import AdminPrivateRoute from "./PrivateRoutes/AdminPrivateRoute/AdminPrivateRoute";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import ViewShifPlans from "./Pages/ViewShiftPlans/ViewShifPlans";
import VerifyPayment from "./Components/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "about",
        element: <MissionVision />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "shifts",
        element: <Shifts />,
      },
      {
        path: "shifts",
        element: <StudentPrivateRoute />,
        children: [
          {
            path: ":shiftId/view-plans",
            element: <ViewShifPlans />,
          },
        ],
      },
      {
        path: "dashboard",
        element: <StudentPrivateRoute />,
        children: [
          {
            path: "",
            element: <StudentDashboard />,
            // element: <h1 className='text-6xl'>Student dashBoard</h1>
          },
        ],
      },
      {
        path: "admin-dashboard",
        element: <AdminPrivateRoute />,
        children: [
          {
            path: "",
            element: <AdminDashboard />,
            // element: <h1 className='text-6xl'>Admin DashBoard</h1>
          },
        ],
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
      {
        path: "payment-verification",
        element: <VerifyPayment />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
