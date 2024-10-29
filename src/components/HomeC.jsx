import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import urlServices from "../services/urlServices";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const getCurrentMonth = () => {
  const date = new Date();
  let currentMonth = `${date.getMonth() + 1}`;
  currentMonth.length === 1
    ? (currentMonth = `0${currentMonth}`)
    : currentMonth;
  return `${currentMonth}`;
};

const validate = (values) => {
  let error = {};
  if (!values.url) {
    error.url = "*Required";
  } else return error;
};

const HomeC = () => {
  const { urls } = useLoaderData();
  const [month, setMonth] = useState(getCurrentMonth());
  const [todayCount, setTodayCount] = useState();
  const [url, setUrl] = useState([]);
  const [monthCount, setMonthCount] = useState([]);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      url: "",
    },
    validate,
    onSubmit: (values) => {
      toast.loading("Your url is creating...,please wait");
      const { url } = values;
      urlServices
        .createUrl(url)
        .then((response) => {
          const message = response.data.message;
          toast.dismiss();
          toast.success(message);
          navigate("/");
        })
        .catch((e) => {
          const message = e.response.data.message;
          toast.dismiss();
          return toast.error(message);
        });
    },
  });
  const style = {
    color: "red",
    fontWeight: "italic",
  };
  useEffect(() => {
    setUrl([...urls.data.urls]);
    urlServices
      .getUrlCount(`${new Date().getFullYear()}-${month}`)
      .then((response) => {
        setMonthCount(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    urlServices
      .getTodayUrlCount()
      .then((response) => {
        setTodayCount(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [month]);

  return (
    <section className="my-5 py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 ">
            <div className="row justify-content-start">
              <div className="col-md-6">
                <div className="info">
                  <div className="icon icon-sm">⏰</div>
                  <h5 className="font-weight-bolder mt-3">
                    Today Count is {todayCount}
                  </h5>
                </div>
              </div>{" "}
              <div className="col-md-6">
                <div className="info">
                  <div className="icon icon-sm">📅</div>
                  <br />
                  <p className="pe-5">
                    <select
                      defaultValue={month}
                      onChange={(e) => setMonth(e.target.value)}
                    >
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </p>{" "}
                  <h5 className="font-weight-bolder mt-3">
                    This Month count is {monthCount.counts}
                  </h5>
                </div>
              </div>
              <hr />
              <div
                className="col-md-6"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("./viewurl");
                }}
              >
                <div className="info">
                  <div className="icon ">🔗🌐</div>
                  <h5 className="font-weight-bolder mt-3">View created Url</h5>
                  <p className="pe-5">click to view all created urls</p>
                </div>
              </div>{" "}
              <div
                style={{ cursor: "pointer" }}
                className="col-md-6"
                onClick={() => {
                  navigate("./createurl");
                }}
              >
                <div className="info">
                  <div className="icon icon-sm">🔗➕</div>
                  <h5 className="font-weight-bolder mt-3">Create new Link</h5>
                  <p className="pe-5">
                    Create branded short URLs for secure connections that
                    matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeC;

{
  /* <div className="card-body pt-7 text-center">
TO
<br />
To continue
<h2 className="text-white up mb-0">
  <button
    className="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1"
    onClick={() => {
      navigate("/signin");
    }}
  >
    SIGN IN
  </button>
  <button
    className="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1"
    onClick={() => {
      navigate("/login");
    }}
  >
    LOG IN
  </button>
</h2>
</div> */
}
