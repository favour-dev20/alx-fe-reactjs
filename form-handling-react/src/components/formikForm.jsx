import { Formik, Form, Field, ErrorMessage } from "formik";

export default function FormikForm() {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Register (Formik)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) errors.username = "Username is required";
          if (!values.email) errors.email = "Email is required";
          if (!values.password) errors.password = "Password is required";
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <div className="mb-4">
              <label>Username</label>
              <Field name="username" type="text" className="w-full border p-2 rounded" />
              <ErrorMessage name="username" component="p" className="text-red-500" />
            </div>

            <div className="mb-4">
              <label>Email</label>
              <Field name="email" type="email" className="w-full border p-2 rounded" />
              <ErrorMessage name="email" component="p" className="text-red-500" />
            </div>

            <div className="mb-4">
              <label>Password</label>
              <Field name="password" type="password" className="w-full border p-2 rounded" />
              <ErrorMessage name="password" component="p" className="text-red-500" />
            </div>

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}