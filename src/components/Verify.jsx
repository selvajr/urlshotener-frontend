import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userServices from "../services/userServices";
import "./Verify.css";
import { toast } from "react-toastify";

const Verify = () => {
  const { key } = useParams();
  const [loader, setLoader] = useState(true);
  const [state, setState] = useState("Please wait...");

  const navigate = useNavigate();

  useEffect(() => {
    userServices
      .verify(key)
      .then((response) => {
        console.log(response.data);
        const message = response.data.message;
        setLoader(false);
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
                  navigate(`/reset/${key}`);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      })
      .catch((e) => {
        const message = e.response.data.message;
        setLoader(false);
        setState(message);
        toast.info("Please resend a mail")
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
                  navigate("/forgot")
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      });
  }, []);
  return (
    <div>
      <center>
        {" "}
        <div className="gap"></div>
        {loader && <div className="loader"></div>}
        <h1>{state}</h1>
      </center>
    </div>
  );
};

export default Verify;
