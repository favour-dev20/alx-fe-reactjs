import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = { username: "", email: "", password: "" };

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="max-w-md mx-auto p-6 bg-white rounded shadow">
        <div className="mb-4">
          <label className="block mb-1 font-bold">Username</label>
          <Field name="username" className="w-full border p-2 rounded" />
          <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-bold">Email</label>
          <Field name="email" type="email" className="w-full border p-2 rounded" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-bold">Password</label>
          <Field name="password" type="password" className="w-full border p-2 rounded" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}