import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import RoomDetails from "./pages/RoomDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/room/:id",
    element: <RoomDetails></RoomDetails>,
  },
]);

const App = () => {
  return (
    <div>
      <Header></Header>
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>
    </div>
  );
};

export default App;
