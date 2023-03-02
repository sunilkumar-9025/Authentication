import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const ForgetPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid E-mail").required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="fullpage">
      <div className="form-area">
        <div className="form-box">
          <h2 className="text-center mb-4">Forget Password</h2>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <div className="form-group mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <button className="btn btn-primary w-100 mb-4" type="submit">
              Submit
            </button>
            <Link to="/login">Back to Login?</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
