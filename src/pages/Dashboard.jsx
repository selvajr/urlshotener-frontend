import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Notlog from "../components/Notlog";
import { useEffect } from "react";
import HomeC from "../components/HomeC";

const Dashboard = () => {
  const { user, urls } = useLoaderData();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!user){
      navigate("/")
    }
  },[])
  return (
    <div>
      <Navbar user={user} />
      <Outlet />
    </div>
  );
};

export default Dashboard;
