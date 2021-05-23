import React, { Component } from "react";


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
      Email: null,
      Password: null,
      formErrors: {
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

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
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
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            
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
            
            
            
          </form>
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
            <div className="Login">
              <button type="login" onClick={login}>Login</button>
            </div>
        </div>
      </div>
    );
  }
}
function login(){

}


export default App;