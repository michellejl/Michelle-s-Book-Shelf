import React, { Component } from 'react'
import styled from 'styled-components'
import Login from './Login'

var c_blue = '#5AB9CF'
// var c_white = '#FEFEFE'
var c_yellow = '#FAB94E'
var c_orange = '#F04D32'
var c_dark = '#3B3F42'

const BottomBar = styled.div`
text-align: center;
padding: 25px;
margin: 0 0 25px;
border-top: 12px solid ${c_blue};
color: ${c_blue};
background: ${c_dark}
`

const Link = styled.a`
  color: ${c_orange};
  text-decoration: none;
  padding: 15px;
  font-family: sans-serif;
  font-size: 1.1em;
`

const Button = styled.button`
  background: none;
  border-width: 0;
  color: ${c_yellow};
  padding: 15px;
  font-size: 1em;
`

class Footer extends Component {
  state = {
    // loggedin: this.props.loggedin
  }

  render() {

    return (
      <BottomBar>
        <Link href="/">Home</Link> |
        <Link href="/add">Add a Book</Link> |
        <Link href="/search">Search</Link> |
        {this.props.authed
          ? <Button onClick={() => { console.log('logout()') }} >Logout</Button>
          : <Link to="/login">Login</Link>
        }
      </BottomBar>
    );
  }
}

export default Footer;

{/* <Link href="/">Home</Link> |
        <Link href="/add">Add a Book</Link> |
        <Link href="/search">Search</Link>
        <br />
        <br />
        {this.props.currentStatus ?
          <button>Log Out</button>
          :
          <Login />
        } */}