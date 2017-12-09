import React, { Component } from 'react'
import styled from 'styled-components'

var c_blue = '#5AB9CF'
// var c_white = '#FEFEFE'
// var c_yellow = '#FAB94E'
// var c_orange = '#F04D32'
var c_dark = '#3B3F42'


const TopBar = styled.header`

`
const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  padding: 25px;
  margin: 0 0 25px;
  border-bottom: 12px solid ${c_blue};
  background: ${c_dark};
  a {
  color: ${c_blue};
  text-decoration: none;
  }
`

const Nav = styled.nav`
  max-width: 750px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`
const Btn = styled.a`
  border-radius: 3px;
  padding: 0.25em 1em;
  background: transparent;
  color: ${c_blue};
  border: 2px solid ${c_blue};
  text-decoration: none;
  &:hover {
    background: ${c_blue};
    color: ${c_dark};
    border-color: ${c_dark}
  }
`


class Header extends Component {
  render() {
    return (
      <TopBar>
        <Title><a href="/">My Books</a></Title>
        <Nav>
          <Btn href="/shelf/currently-reading">Currently Reading</Btn>
          <Btn href="/shelf/want-to-read">Want to Read</Btn>
          <Btn href="/shelf/read">Read</Btn>
        </Nav>
      </TopBar>
    );
  }
}

export default Header;
