import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../components/Verify.css";
import { toast } from "react-toastify";
import urlServices from "../services/urlServices";

const Redirect = () => {
  const { endpoint } = useParams();
  const [loader, setLoader] = useState(true);
  const [state, setState] = useState("Please wait...");

  const navigate = useNavigate();

  useEffect(() => {
    toast.loading("Please wait...");
    urlServices
      .gotoUrl(endpoint)
      .then((response) => {
        const message = "Redirecting";
        setLoader(false);
        console.log(message);
        setState(message);
        setTimeout(() => {
          setState(`${message}.`);
          setTimeout(() => {
            setState(`${message}..`);
            toast.dismiss();
            toast.success(message);
            setTimeout(() => {
              setState(`${message}...`);
              setTimeout(() => {
                setState(`${message}....`);
                setTimeout(() => {
                  setState(`${message}.....`);
                  window.location.href = response.data.url;
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      })
      .catch((e) => {
        const message = e.response.data.message;
        setLoader(false);
        toast.dismiss();
        toast.warning(message);
        setState(message);
        setTimeout(() => {
          setState(`${message}.`);
          setTimeout(() => {
            setState(`${message}..`);
            setTimeout(() => {
              setState(`${message}...`);
              setTimeout(() => {
                setState(`${message}....`);
                setTimeout(() => {
                  setState(`${message}.....`);
                  navigate(`/`);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      });
  }, []);
  return (
    <center>
      <div className="gap"></div>
      {loader && <div className="loader"></div>}
      <h1>{state}</h1>
    </center>
  );
};

export default Redirect;
