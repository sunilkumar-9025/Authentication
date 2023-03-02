import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";

const NewPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      password: yup.string().min(4).required("required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="fullpage">
      <div className="form-area">
        <div className="form-box">
          <h2 className="text-center mb-4">Create New Password</h2>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formik.values.password}
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="cpass">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="cpass"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div className="error">{formik.errors.confirmPassword}</div>
              ) : null}
            </div>
            <button className="btn btn-primary w-100 mb-4" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
