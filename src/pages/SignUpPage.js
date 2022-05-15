import React from 'react';

class SignUpPage extends React.Component {

  state = {
    disabled: true,
    password: '',
    repeatPassword: ''
  }
  onchangePassword = (event) => {
    const curentValue = event.target.value;
    this.setState({
      password: curentValue,
      disabled: curentValue !== this.state.repeatPassword
    })
  }
  onchangeRepeatPassword = (event) => {
    const curentValue = event.target.value;
    this.setState({
      repeatPassword: curentValue,
      disabled: curentValue !== this.state.password
    })
  }
  render() {

    return (
      <div>
        <h1>Sign Up</h1>
        <label htmlFor={"username"} >Username</label>
        <input id="username" placeholder="username" />

        <label htmlFor={"email"}>E-mail</label>
        <input id="email" placeholder="email" />

        <label htmlFor={"password"}>password</label>
        <input id="password" type="password" onChange={this.onchangePassword} placeholder="password" />

        <label htmlFor={"repeat-password"}>repeat password</label>
        <input id="repeat-password" onChange={this.onchangeRepeatPassword} type="password" placeholder="password" />

        <button disabled={this.state.disabled}>Sign up</button>
      </div >
    )
  }
}
export default SignUpPage;