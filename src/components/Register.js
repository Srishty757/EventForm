import React, { Component } from "react";

//import "./App.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

 

  return valid;
};


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: null,
      Email: null,
      Password: null,
      formErrors: {
        UserName: "",
        Email: "",
        Password: "",
        isLoaded: false
      }
    };
  }

  componentDidMount(){
    fetch('http://localhost:57630/api/User')
    .then(res => res.json())
    .then(json =>{
      this.state({
        isLoaded:true
      })
    })
  }
  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        User Name: ${this.state.userName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "userName":
        formErrors.UserName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.Email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.Password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="UserName">
              <label htmlFor="UserName">User Name</label>
              <input
                className={formErrors.UserName.length > 0 ? "error" : null}
                placeholder="user Name"
                type="text"
                name="UserName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.UserName.length > 0 && (
                <span className="errorMessage">{formErrors.UserName}</span>
              )}
            </div>
            
            <div className="Email">
              <label htmlFor="Email">Email</label>
              <input
                className={formErrors.Email.length > 0 ? "error" : null}
                placeholder="Email"
                type="Email"
                name="Email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Email.length > 0 && (
                <span className="errorMessage">{formErrors.Email}</span>
              )}
            </div>
            <div className="Password">
              <label htmlFor="Password">Password</label>
              <input
                className={formErrors.Password.length > 0 ? "error" : null}
                placeholder="Password"
                type="Password"
                name="Password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Password.length > 0 && (
                <span className="errorMessage">{formErrors.Password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit" onClick={submit}>Create Account</button>
              <small>Already Have an Account?Sign In</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function submit(){
  
}

export default App;