import React from "react";
import imgTraveler from "assets/images/traveler.png";
import "./Contact.css";
import * as Yup from "yup";
import { FaEllipsisH } from "react-icons/fa";

import { FastField, Form, Formik } from "formik";
import InputField from "../../custom-fields/InputField/index";
import Textarea from "../../custom-fields/Textarea/index";

const Contact = (props) => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required."),
    email: Yup.string().email().required("This field is required."),
    subject: Yup.string().required("This field is required."),
    message: Yup.string().required("This field is required."),
  });

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("Form submit", values);
    });
  };

  return (
    <section className="contact">
      <div className="container">
        <h5 className="section-head">
          <span className="heading">Contact</span>
          <span className="sub-heading">Get in touch with us</span>
        </h5>
        <div className="contact-content">
          <div className="traveler-wrap">
            <img src={imgTraveler} alt="img-traveler" />
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(formikProps) => {
              const {
                values,
                errors,
                touched,
                //  isSubmitting
              } = formikProps;
              console.log({ values, errors, touched });

              return (
                <Form className="form contact-form">
                  <div className="input-group-wrap">
                    <FastField
                      type="text"
                      name="name"
                      component={InputField}
                      label="name"
                      placeholder="Name"
                    />
                    <FastField
                      type="email"
                      name="email"
                      component={InputField}
                      label="email"
                      placeholder="Email"
                    />
                  </div>
                  <FastField
                    type="text"
                    name="subject"
                    component={InputField}
                    label="subject"
                    placeholder="Subject"
                  />
                  <FastField
                    type="text"
                    name="message"
                    component={Textarea}
                    label="message"
                    placeholder="Message"
                  />
                  <button className="btn form-btn btn-purple" type="submit">
                    Send Message
                    <span className="dots">
                      <FaEllipsisH />
                    </span>
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Contact;
