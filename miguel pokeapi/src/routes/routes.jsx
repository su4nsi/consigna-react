import ErrorPage from "../components/error/ErrorPage";
import Layout from "../layouts/Layout";
import HomePage from "../pages/home/HomePage";
import Pokemon from "../pages/pokemon/Pokemon";
import RegionPage from "../pages/region/RegionPage";
import RegionDetailPage from "../pages/regionDetailPage/RegionDetailPage";
import LocationPage from "../pages/location/LocationPage";
export const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ path: "", element: <HomePage /> }],
  },
  {
    path: "/pokedex/:pokemonName",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ path: "", element: <Pokemon /> }],
  },
  {
    path: "/regions",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ path: "", element: <RegionPage /> }],
  },
  {
    path: "/regions/:region",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <RegionDetailPage /> },
      { path: "/regions/:region/locations", element: <LocationPage /> },
      { path: "/regions/:region/pokedex", element: <HomePage /> },
    ],
  },
];
