import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./screens/Home";
import { useAuthContext } from "./context/AuthProvider";
import Login from "./screens/Login";
import Register from "./screens/Register";
import DefaultLayout from "./layout/DefaultLayout";
import Containers from "./screens/Containers";
import Images from "./screens/Images";
import Volumes from "./screens/Volumes";
import Info from "./components/Info";
import Logs from "./components/Logs";
import Stats from "./components/stats";

export default function App() {
  const { user } = useAuthContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <Containers />,
        },
        {
          path: "/images",
          element: <Images />,
        },
        {
          path: "/volumes",
          element: <Volumes />,
        },
      ],
    },
    {
      path: "/info",
      element: <Info />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path:"/stats",
      element: <Stats />
    }
  ]);

  return <RouterProvider router={routes} />;
}
