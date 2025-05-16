import ErrorPage from "../components/error/ErrorPage";
import Layout from "../layouts/Layout";
import HomePage from "../pages/home/HomePage";
import Pokemon from "../pages/pokemon/Pokemon";
export const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ path: "", element: <HomePage /> }],
  },
  {
    path: "/pokedex/:pokemon",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ path: "", element: <Pokemon /> }],
  },
];
