import Sidebar from "../Components/Reusable/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Dashboard/Home";
import Orders from "../Components/Dashboard/Orders";
import Foods from "../Components/Dashboard/Foods";
import Users from "../Components/Dashboard/Users";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/public/css/cms.css" />
      </Helmet>
      <Sidebar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="foods" element={<Foods />} />
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </>
  );
};

export default Dashboard;
