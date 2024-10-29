import React from "react";
import { useNavigate } from "react-router-dom";

const Notlog = () => {
  const navigate = useNavigate();
  return (
    <section className="my-5 py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 ms-auto">
            <div className="row justify-content-start">
              <div className="col-md-6">
                <div className="info">
                  <div className="icon icon-sm">
                    <svg
                      className="text-primary"
                      width="25px"
                      height="25px"
                      viewBox="0 0 40 44"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          transform="translate(-1870.000000, -591.000000)"
                          fill="#FFFFFF"
                          fillRule="nonzero"
                        >
                          <g transform="translate(1716.000000, 291.000000)">
                            <g transform="translate(154.000000, 300.000000)">
                              <path
                                className="color-background"
                                d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                opacity="0.603585379"
                              ></path>
                              <path
                                className="color-background"
                                d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h5 className="font-weight-bolder mt-3">
                    Think Beyond The Link
                  </h5>
                  <p className="pe-5">
                    Create branded short URLs for secure connections that
                    matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
            <div className="card card-background ">
              <div className="card-body pt-7 text-center">
                Please sign in or login
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notlog;
