import React, { Component } from 'react'
import styled from 'styled-components'

var c_blue = '#5AB9CF'
// var c_white = '#FEFEFE'
var c_orange = '#F04D32'
var c_dark = '#3B3F42'

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  padding: 25px;
  margin: 0;
  border-bottom: 12px solid ${c_blue};
  background: ${c_dark};
  a {
  color: ${c_blue};
  text-decoration: none;
  }
`

const Nav = styled.nav`
  border-bottom: 12px solid ${c_blue};
`

const NavItems = styled.ul`
  max-width: 700px;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  font-size: 1.2em;
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

class Header extends Component {
  render() {
    return (
      <header>
        <Title><a href="/">Michelle's Book Shelf</a></Title>
        <Nav>
          <NavItems>
            <li><Btn href="/"><i className="fa fa-home" aria-hidden="true"></i></Btn></li>
            <li><Btn href="#current">Currently Reading</Btn></li>
            <li><Btn href="#want">Want to Read</Btn></li>
            <li><Btn href="#read">Read</Btn></li>
            <li><Btn href="#none">Not Shelved</Btn></li>
            <li><Btn href="/search"><i className="fa fa-search" aria-hidden="true"></i></Btn></li>
          </NavItems>
        </Nav>
      </header>
    );
  }
}

export default Header;
