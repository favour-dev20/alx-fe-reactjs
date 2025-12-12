import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus(null);
    try {
      const res = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email, password: values.password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");
      setStatus({ success: `Registered! Token: ${data.token}` });
      resetForm();
    } catch (err) {
      setStatus({ error: err.message || "Network error" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Register (Formik + Yup)</h2>

      <Formik initialValues={{ username: "", email: "", password: "" }} validationSchema={RegisterSchema} onSubmit={handleSubmit}>
        {({ isSubmitting, status }) => (
          <Form className="space-y-4 bg-white p-6 rounded shadow">
            {status && status.success && <div className="p-3 rounded bg-green-100 text-green-800">{status.success}</div>}
            {status && status.error && <div className="p-3 rounded bg-red-100 text-red-800">{status.error}</div>}

            <div>
              <label className="block mb-1 font-medium">Username</label>
              <Field name="username" className="w-full border rounded px-3 py-2" />
              <ErrorMessage name="username" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <Field name="email" className="w-full border rounded px-3 py-2" />
              <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <Field type="password" name="password" className="w-full border rounded px-3 py-2" />
              <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-60">
              {isSubmitting ? "Registering…" : "Register (Formik)"}
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
}