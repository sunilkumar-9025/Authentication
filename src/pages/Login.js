import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid E-mail").required("required"),
      password: Yup.string().min(4).required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="fullpage">
      <div className="form-area">
        <div className="form-box">
          <h2 className="text-center mb-4">Login</h2>
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
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-group mb-5">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
            <button
              className="btn btn-primary mb-5 w-100"
              type="submit"
              disabled={!formik.isValid}
            >
              Login
            </button>
          </form>
          <div className="link-area">
            <Link to="/register">Register Now?</Link>
            <Link to="/forget-password">Forget Password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
