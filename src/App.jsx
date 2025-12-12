import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./views/Home";
import User from "./views/User";
import Admin from "./views/Admin";
import Owner from "./views/Owner";
// import ProductDetail from "./views/ProductDetail";
// import FetchAPI_EmptyArray from "./views/FetchAPI_EmptyArray";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-4xl">404 - Page Not Found 🥲</h1>
    </div>
    ),
    children: [
      { path: "/",element: <Home /> },
      { path: "user", element: <User /> },
      { path: "admin", element: <Admin /> },
      { path: "owner", element: <Owner /> },
      // { path: "products/:productId", element: <ProductDetail /> },
      // { path: "/FetchAPI_EmptyArray", element: <FetchAPI_EmptyArray /> },
    ],
  },
]);

export default function App() {
  return (
     <RouterProvider router={router} />
  );
}