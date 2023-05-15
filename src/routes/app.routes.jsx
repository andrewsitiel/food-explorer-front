import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { MyOrder } from "../pages/MyOrder";
import { Orders } from "../pages/Orders";
import { CreateDish } from "../pages/CreateDish";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/my-order" element={<MyOrder />} />
      <Route path="orders" element={<Orders />} />
      <Route path="create-dish" element={<CreateDish />} />
    </Routes>
  )
} 