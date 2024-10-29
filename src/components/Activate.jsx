import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userServices from "../services/userServices";
import "./Verify.css";
import { toast } from "react-toastify";

const Activate = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const [state, setState] = useState("Please wait...");

  const navigate = useNavigate();

  useEffect(() => {
    toast.loading("Please wait...");
    userServices
      .Activate(id)
      .then((response) => {
        const message = response.data.message;
        setLoader(false);
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
                  navigate(`/`);
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
    <center style={{ backgroundColor: "aqua" }}>
      <h1>{state}</h1>
      {loader && <div className="loader"></div>}
    </center>
  );
};

export default Activate;
