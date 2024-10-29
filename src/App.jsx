import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Sign from "./components/Sign";
import "react-toastify/dist/ReactToastify.css";
import Activate from "./components/Activate";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import { urlLoader, userLoader } from "./services/loaders";
import Redirect from "./pages/Redirecting";
import ViewUrls from "./components/ViewUrls";
import Dashboard from "./pages/Dashboard";
import Forgot from "./components/Forgot";
import Verify from "./components/Verify";
import Reset from "./components/Reset";
import HomeC from "./components/HomeC";
import CreateURL from "./components/CreateURL";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
    loader: userLoader,
    children: [
      {
        path: "View URl",
        element: <ViewUrls />,
        loader: urlLoader,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Dashboard />
      </div>
    ),
    loader: userLoader,
    children: [
      {
        path: "",
        element: <HomeC />,
        loader: urlLoader,
      },
      {
        path: "viewurl",
        element: <ViewUrls />,
        loader: urlLoader,
      },,
      {
        path: "createurl",
        element: <CreateURL />,
      },
    ],
  },

  {
    path: "signin",
    element: <Sign />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "activate/:id",
    element: <Activate />,
  },
  {
    path: "/forgot",
    element: (
      <div>
        <Forgot />
      </div>
    ),
  },
  {
    path: "/verify/:key",
    element: (
      <div>
        <Verify />
      </div>
    ),
  },
  {
    path: "/reset/:key",
    element: (
      <div>
        <Reset />
      </div>
    ),
  },
  {
    path: "redirect/:endpoint",
    element: <Redirect />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
