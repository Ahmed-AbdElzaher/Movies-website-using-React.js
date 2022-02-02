import React, { useState } from "react";
import { validEmail, validPassword, validUsername } from '../components/regex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


export default function Registration() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formValuesErrors, setFormValuesErrors] = useState({
    usernameErr: " ",
    emailErr: " ",
    passwordErr: " ",
    confirmPasswordErr: " ",
  });

  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "username":
        setFormValues({
          ...formValues,
          username: event.target.value,
        });
        setFormValuesErrors({
          ...formValuesErrors,
          usernameErr:
            event.target.value.length === 0
              ? "This field is required"
              // : !validUsername.test(event.target.value) 
              // ? "username should not have spaces"
              : ' ',
        });
        break;
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
              : ' ',
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
              : ' ',
        });
        break;
        case "confirmPassword":
          setFormValues({
            ...formValues,
            confirmPassword: event.target.value,
          });
          setFormValuesErrors({
            ...formValuesErrors,
            confirmPasswordErr:
            document.getElementById("confirmPasswordInput").value !== document.getElementById("passwordInput").value
                ? "wrong password"
                : document.getElementById("confirmPasswordInput").value === document.getElementById("passwordInput").value
                ? ' '
                : ' ',
          });
          // console.log(formValuesErrors.confirmPasswordErr)
          break;
  
      default:
        break;
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    // console.log(formValuesErrors.confirmPasswordErr)
    if (
      formValuesErrors.usernameErr.length === 1 &&
      formValuesErrors.emailErr.length === 1 &&
      formValuesErrors.passwordErr.length === 1 &&
      formValuesErrors.confirmPasswordErr.length === 1
    ) {
      console.log(formValues);
    }else{
      console.log("Data not valid");
    }
  };

  const showPassword = () => {
    document.getElementById("passwordInput").type = "text"
  }
  const hidePassword = () => {
    document.getElementById("passwordInput").type = "password"
  }
  const showConfirmPassword = () => {
    document.getElementById("confirmPasswordInput").type = "text"
  }
  const hideConfirmPassword = () => {
    document.getElementById("confirmPasswordInput").type = "password"
  }
  return (
    <form className="col-6 m-auto" onSubmit={(e) => handleSubmitForm(e)}>
      <div className="mb-3">
        <label htmlFor="usernameInput" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="usernameInput"
          aria-describedby="usernameHelp"
          value={formValues.username}
          onChange={(e) => handleFormChange(e)}
          name="username"
        />

        {formValuesErrors.emailErr && (
          <div id="useremailHelp" className="form-text text-danger">
            {formValuesErrors.usernameErr}
          </div>
        )}
      </div>
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
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          confirm Password
        </label>
        <div className="passwordContainer">
        <input
          type="password"
          className="form-control"
          id="confirmPasswordInput"
          aria-describedby="passwordHelp"
          // value={formValues.confirmPassword}
          onChange={(e) => handleFormChange(e)}
          name="confirmPassword"
        />
        <FontAwesomeIcon className="showPassword" onMouseDown={() => showConfirmPassword()}  onMouseUp={() => hideConfirmPassword()} icon={faEye} />
        </div>
        {formValuesErrors.passwordErr && (
          <div id="useremailHelp" className="form-text text-danger">
            {formValuesErrors.confirmPasswordErr}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        // disabled={
        //   formValuesErrors.usernameErr.length === 1 &&
        //   formValuesErrors.emailErr.length === 1 &&
        //   formValuesErrors.passwordErr.length === 1 &&
        //   formValuesErrors.confirmPasswordErr.length === 1
        //     }
      >
        Submit
      </button>
    </form>
  );
}
