import React, { useState } from 'react';
import './ContactForm.css'; 
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const ContactForm = ({ title }) => {
  const [formData, setFormData] = useState({
    name: '',
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
  

  const handleReload = () => {
      window.location.reload();
  }  
    
  const [buttonClicked, setButtonClicked] = useState(false);

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
      console.log('Form submission successful');
      setButtonClicked(true); 
    }
  };

  const { name, email, message } = formData;
  const { nameError, emailError, emailError2, messageError } = formErrors;
  const formValid = name && email && message && !nameError && !emailError && !emailError2 && !messageError;


  return !formValid && !buttonClicked ? (
    

   <div className='center'>
    <div className="contact-card">
      <Form onSubmit={handleSubmit} encType="multipart/form-data" autoComplete="off">
        <Form.Group>
          <Form.Label>Your name<span className="text-danger">*</span></Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder='name'
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            className='contact-card-content'
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
            className='contact-card-content'
          />
          {emailError && <Alert variant="danger" className="mt-2">Email is a required field.</Alert>}
          {emailError2 && <Alert variant="danger" className="mt-2">Email invalid.</Alert>}
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
            className='contact-card-content'
          />
          {messageError && <Alert variant="danger" className="mt-2 ">Message is a required field.</Alert>}
        </Form.Group>
        <p className="text-center mb-0"><Button type="submit" className="btn btn-primary btn-lg w-100 text-uppercase">Submit Now</Button></p>
      </Form>
    </div>
    </div>
  
) : (
  <div className='center'>
  <div className="thankyou">
  <Alert variant="success" className="mt-3">
    Mail sent successfully.
    <Link className='re-contact' to="/contact" onClick={handleReload}>
      Send another message
    </Link>
  </Alert>
</div>
</div>
);
}


export default ContactForm;