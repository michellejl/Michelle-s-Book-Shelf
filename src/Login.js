import React, { Component } from 'react'
import serializeForm from 'form-serialize'
import styled from 'styled-components'
import firebase from './firebase'
import { login } from './authHelpers'

var c_blue = '#5AB9CF'
var c_white = '#FEFEFE'
// var c_yellow = '#FAB94E'
// var c_orange = '#F04D32'
var c_dark = '#3B3F42'

const AddForm = styled.form`
  max-width: 500px;
  margin: 0 auto;

`
const Fieldset = styled.fieldset`
  border-radius: 10px;
  margin: 0px 0px 10px 0px;
  border: 2px solid ${c_blue};
  padding: 20px;
  background: ${c_white};
  box-shadow: inset 0px 0px 15px ${c_blue};
`

const Legend = styled.legend`
  color: ${c_dark};
  border-top: 2px solid ${c_blue};
  border-left: 2px solid ${c_blue};
  border-right: 2px solid ${c_blue};
  border-radius: 5px 5px 0px 0px;
  background: ${c_white};
  padding: 5px 12px;
  margin: 0 auto;
  font-weight: normal;
  font-size: 1.2em;
  font-family: 'Special Elite', cursive;
`
const InputField = styled.input`
  box-sizing: border-box;
  outline: none;
  display: block;
  width: 100%;
  padding: 7px;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin-bottom: 10px;
  font-size: 14px;
  height: 45px;
`

const Button = styled.input`
border: 2px solid ${c_blue};
background: ${c_blue};
color: ${c_white};
width: 100%; 
font-size: 16px;
line-height: 40px;
`

class Login extends Component {
  state = {
    errorMessage: '',
    userStatus: this.props.currentStatus
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    const email = values.email
    const password = values.password
    login(email, password).catch(function (error) {
      // var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    }).then((result) => {
      this.setState({ userStatus: true })
      this.props.setUserStatus(true)
    });
  }

  render() {

    return (
      <AddForm onSubmit={this.handleSubmit}>
        <p>{this.state.errorMessage}</p>
        <Fieldset>
          <Legend>Login</Legend>
          <InputField type="text" name="email" placeholder="Email" required />
          <InputField type="password" name="password" placeholder="Password" required />
          <Button type="submit" value="Submit" />
        </Fieldset>
      </AddForm>
    );
  }
}

export default Login;


