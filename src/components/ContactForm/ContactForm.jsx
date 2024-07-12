import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";

import css from "./ContactForm.module.css";
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long")
      .required("required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    phone: "",
  };

  const handleSubmit = (values, actions) => {
    onAdd({
      name: values.name,
      number: values.phone,
      id: Date.now(),
    });
    console.log(values);
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        <Form className={css.form}>
          <div>
            <label htmlFor={nameFieldId}>name</label>
            <Field type="text" id={nameFieldId} name="name" />
            <ErrorMessage name="name" component="span" />
          </div>

          <div>
            <label htmlFor={phoneFieldId}>phone number</label>
            <Field type="text" id={phoneFieldId} name="phone" />
            <ErrorMessage name="phone" component="span" />
          </div>
          <button>Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
