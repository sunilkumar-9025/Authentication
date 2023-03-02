import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
require("yup-phone");
const Register = () => {
  const phoneRegExp = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm;
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      contact: "",
      name: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Invalid e-mail").required("required"),
      password: yup.string().min(4).required("required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("required"),
      contact: yup
        .string()
        .matches(phoneRegExp, "invalid phone number")
        .required("required"),
      name: yup.string().required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="fullpage">
      <div className="form-area">
        <div className="form-box">
          <h2 className="text-center mb-3">Register</h2>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formik.values.name}
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={formik.values.email}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="contact">Contact Number</label>
              <input
                type="text"
                className="form-control"
                id="contact"
                name="contact"
                value={formik.values.contact}
                {...formik.getFieldProps("contact")}
              />
              {formik.touched.contact && formik.errors.contact ? (
                <div className="error">{formik.errors.contact}</div>
              ) : null}
            </div>
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
            <button
              type="submit"
              className="btn btn-primary w-100 mb-5"
              disabled={!formik.isValid}
            >
              Register
            </button>
          </form>
          <Link to='/login'>Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
