
  export const handleBlur = (e, formData, setFormData, formErrors, setFormErrors) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  
    if (value.length <= 0 && name === 'name') {
      setFormErrors({ ...formErrors, nameError: true });
    } else if (name === 'email') {
      setFormErrors({ ...formErrors, emailError: value.length <= 0, emailError2: !isValidEmail(value) });
    }
  };
  
  export const handleChange = (e, formData, setFormData) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  export const handleSubmit = (e, formData, formErrors, setFormErrors, setButtonClicked) => {
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
  