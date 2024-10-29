import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "./Forgot.css";
import urlServices from "../services/urlServices";

const validate = (values) => {
  const errors = {};
  if (!values.url) {
    errors.url = "URL is required";
  }

  return errors;
};
const CreateURL = () => {
  const formik = useFormik({
    initialValues: {
      url: "",
    },
    validate,
    onSubmit: (values) => {
      toast.loading("Creating URL...,Please wait");

      urlServices
        .createUrl(values.url)
        .then((response) => {
          const message = response.data.message;
          toast.dismiss();
          toast.success(message);
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

  return (
    <div>
      <div>
        <center>
          <form className="create" onSubmit={formik.handleSubmit}>
            <h2>Create URL</h2>
            <br />
            <div>
              <input
                type="text"
                placeholder="Please Enter Your URL..."
                name="url"
                id="url"
                value={formik.values.url}
                onChange={formik.handleChange}
              />
            </div>
            <div style={style}>{formik.errors.url}</div>
            <br />
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </form>
        </center>
      </div>
    </div>
  );
};

export default CreateURL;
