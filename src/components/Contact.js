import React from "react";
// use formSpree to send emails directly to me
import { useForm, ValidationError } from "@formspree/react";
import { validateEmail } from "../utils/helpers";

function Contact() {
  const [state, handleSubmit] = useForm("xlekzygq");
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);

      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function resetForm() {
    setFormState({
      name: "",
      email: "",
      message: "",
    });
    setIsSubmitted(true);
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    await handleSubmit(event);
    resetForm();
  }

  return (
    <section id="contact" className="contact-form" style={{ display: "none" }}>
      <h2>Contact Me</h2>
      {!isSubmitted && (
        <form id="contact-form" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      )}
      {isSubmitted && (
        <div>
          <p>Thanks for Reaching Out!</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
