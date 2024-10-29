import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Notlog from "../components/Notlog";
import { useEffect } from "react";
import HomeC from "../components/HomeC";

const Home = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();

  useEffect(()=>{
    if(user){
      navigate("/dashboard")
    }
  },[])
  return (
    <div>
      <Navbar user={user} />
       <Notlog />
    </div>
  );
};

export default Home;
