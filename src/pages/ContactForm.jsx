import React, { useState } from 'react';
import './ContactForm.css'; 
import { Form, Button, Alert } from "react-bootstrap";
const ContactForm = ({ title }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
  });


  const [formErrors, setFormErrors] = useState({
    nameError: false,
    emailError: false,
    emailError2: false,
    messageError: false,
  });

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.length <= 0 && name === 'name') {
      setFormErrors({ ...formErrors, nameError: true });
    } else if (name === 'email') {
      setFormErrors({ ...formErrors, emailError: value.length <= 0, emailError2: !isValidEmail(value) });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const { nameError, emailError, emailError2, messageError } = formErrors;

    setFormErrors({
      nameError: !name,
      emailError: !email,
      emailError2: !email ? false : !isValidEmail(email),
      messageError: !message,
    });

    const formValid = name && email && message && !nameError && !emailError && !emailError2 && !messageError;
    if (formValid) {
      // Perform your form submission logic here
      console.log('Form submission successful');
    }
  };

  const { name, email, contact, message } = formData;
  const { nameError, emailError, emailError2, messageError } = formErrors;
  const formValid = name && email && message && !nameError && !emailError && !emailError2 && !messageError;

  return !formValid ? (
    
    <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light">
    <div className="card-header bg-transparent border-0 text-center text-uppercase">
      <h3>{title}</h3>
    </div>
    <div className="contact-card">
      <Form onSubmit={handleSubmit} encType="multipart/form-data" autoComplete="off">
        <Form.Group>
          <Form.Label>Your name<span className="text-danger">*</span></Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            className='contact-card-container'
          />
          {nameError && <Alert variant="danger" className="mt-2">Name is a required field.</Alert>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Your email<span className="text-danger">*</span></Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            onBlur={handleBlur}
            className='contact-card-container'
          />
          {emailError && <Alert variant="danger" className="mt-2">Email is a required field.</Alert>}
          {emailError2 && <Alert variant="danger" className="mt-2">Email invalid.</Alert>}
        </Form.Group>
        <Form.Group>
          <Form.Label>Your contact number (Optional)</Form.Label>
          <Form.Control
            name="contact"
            type="text"
            placeholder="Contact"
            onChange={handleChange}
            value={contact}
            className='contact-card-container'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message<span className="text-danger">*</span></Form.Label>
          <Form.Control
            name="message"
            as="textarea"
            placeholder="Message"
            value={message}
            onChange={handleChange}
            onBlur={handleBlur}
            className='contact-card-container'
          />
          {messageError && <Alert variant="danger" className="mt-2 ">Message is a required field.</Alert>}
        </Form.Group>
        <p className="text-center mb-0"><Button type="submit" className="btn btn-primary btn-lg w-100 text-uppercase">Submit Now</Button></p>
      </Form>
    </div>
  </div>
) : (
  <div className="thankyou_details">
    <Alert variant="success" className="mt-3">Mail sent successfully.</Alert>
  </div>
);
};

export default ContactForm;
