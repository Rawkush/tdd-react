import React from 'react';

class SignUpPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <label htmlFor={"username"} >Username</label>
        <input id="username" placeholder="username" />
        <label htmlFor={"email"}>E-mail</label>
        <input id="email" placeholder="email" />
      </div >
    )
  }
}
export default SignUpPage;