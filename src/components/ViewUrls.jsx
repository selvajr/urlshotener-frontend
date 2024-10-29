import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./ViewUrls.css";
import urlServices from "../services/urlServices";
import { toast } from "react-toastify";
import { urlLoader } from "../services/loaders";

const ViewUrls = () => {
  const { urls } = useLoaderData();
  const navigate = useNavigate();
  const urlArr = !urls ? false : [...urls.data.urls];
  const [urlsData, setUrlsData] = useState(urlArr);
  const bashUrl = "https://urlshotener-frontend.vercel.app";
  useEffect(() => {
    if (!urls) {
      navigate("/");
    }
  }, []);

  const convertDate = (inputFormat) => {
    function pad(s) {
      return s < 10 ? "0" + s : s;
    }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
  };

  const handleDelete = async (endpoint) => {
    urlServices
      .deleteUrl(endpoint)
      .then(async (response) => {
        const { urls } = await urlLoader();
        setUrlsData([...urls.data.urls]);
        const message = response.data.message;
        toast.dismiss();
        toast.success(message);
      })
      .catch((e) => {
        const message = e.response.data.message;
        toast.dismiss();
        toast.error(message);
      });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      {urlsData && (
        <table className="table">
          <thead>
            <tr>
              <td className="serial">S.NO</td>
              <td className="date">Date</td>
              <td scope="col" className="urlH">
                Masked URL
              </td>
              <td scope="col" className="urlH">
                URL
              </td>
              <td>Views</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {urlsData.map((data, ind) => {
              return (
                <tr key={ind}>
                  <td className="serial">{ind + 1}</td>
                  <td className="date">{convertDate(data.createdAt)}</td>
                  <td className="url" style={{ width: "10%" }}>
                    <a
                      href={`${bashUrl}/redirect/${data.endpoint}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >{`${bashUrl}/redirect/${data.endpoint}`}</a>
                  </td>
                  <td className="url" style={{ width: "10%" }}>
                    <a
                      href={data.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.url}
                    </a>
                  </td>
                  <td>{data.views}</td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleDelete(data.endpoint, ind);
                    }}
                  >
                    🗑️
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewUrls;
