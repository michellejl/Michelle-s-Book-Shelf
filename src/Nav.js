import React, { Component } from 'react'
import styled from 'styled-components'

var c_blue = '#5AB9CF'
// var c_white = '#FEFEFE'
var c_orange = '#F04D32'
var c_dark = '#3B3F42'

const NavItems = styled.ul`
  max-width: 700px;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`

const Btn = styled.a`
  text-decoration: none;
  color: ${c_orange};
  display: block;
  text-align: center;
  padding: 5px 10px;
  &:hover {
    color: ${c_blue};
  }
  @media screen and (max-width: 600px) {
    border 1px solid ${c_dark};
    &:hover {
      background: ${c_dark};
    }
  }
 
`

class NavBar extends Component {
  render() {
    return (
      <nav>
        <NavItems>
          <li><Btn href="/#current">Currently Reading</Btn></li>
          <li><Btn href="/#want">Want to Read</Btn></li>
          <li><Btn href="/#read">Read</Btn></li>
          <li><Btn href="/#none">Not Shelved</Btn></li>
          <li></li>
        </NavItems>
      </nav>
    );
  }
}

export default NavBar;