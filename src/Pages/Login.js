import React, { useState } from "react";
import { validEmail, validPassword } from '../components/regex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


export default function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [formValuesErrors, setFormValuesErrors] = useState({
    emailErr: " ",
    passwordErr: " ",
  });

  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "email":
        setFormValues({
          ...formValues,
          email: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          emailErr:
            event.target.value.length === 0
              ? "This field is required"
              : !validEmail.test(event.target.value) 
              ? "invalid Email"
              : null,
        });
        break;
      case "password":
        setFormValues({
          ...formValues,
          password: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          passwordErr:
            event.target.value.length === 0
              ? "This field is required"
              : !validPassword.test(event.target.value) 
              ? "Min 8 characters, at least one upercase , one lowercase, one number and one special character  "
              : null,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      !formValuesErrors.emailErr &&
      !formValuesErrors.passwordErr
    ) {
      console.log(formValues);
    }
  };

  const showPassword = () => {
    document.getElementById("passwordInput").type = "text"
  }
  const hidePassword = () => {
    document.getElementById("passwordInput").type = "password"
  }

  return (
    <form className="col-6 m-auto" onSubmit={(e) => handleSubmitForm(e)}>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          aria-describedby="useremailHelp"
          value={formValues.email}
          onChange={(e) => handleFormChange(e)}
          name="email"
        />

        {formValuesErrors.emailErr && (
          <div id="useremailHelp" className="form-text text-danger">
            {formValuesErrors.emailErr}
          </div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Password
        </label>
        <div className="passwordContainer">
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          aria-describedby="passwordHelp"
          value={formValues.password}
          onChange={(e) => handleFormChange(e)}
          name="password"
        />
        <FontAwesomeIcon className="showPassword" onMouseDown={() => showPassword()}  onMouseUp={() => hidePassword()} icon={faEye} />
        </div>
        {formValuesErrors.passwordErr && (
          <div id="useremailHelp" className="form-text text-danger">
            {formValuesErrors.passwordErr}
          </div>
        )}
      </div>

      <button
        type="submit"
        // disabled={
        //   formValuesErrors.emailErr ||
        //   formValuesErrors.passwordErr
        // }
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}
