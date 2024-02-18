import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuthContext } from "./context/AuthProvider";
import DefaultLayout from "./layout/DefaultLayout";
import Containers from "./screens/Containers";
import Images from "./screens/Images";
import Volumes from "./screens/Volumes";
import Info from "./components/Info";
import Logs from "./components/Logs";
import Stats from "./components/stats";

import Container from "./screens/Container";

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
        {
          path: "/containers/:id",
          element: <Container />,
        },
      ],
    },
    {
      path: "/info",
      element: <Info />,
    },
    {
      path: "/logs",
      element: <Logs />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
