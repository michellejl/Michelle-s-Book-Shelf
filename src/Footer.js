import React, { Component } from 'react'
import styled from 'styled-components'

var c_blue = '#5AB9CF'
// var c_white = '#FEFEFE'
// var c_yellow = '#FAB94E'
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
`

class Footer extends Component {
  render() {
    return (
      <BottomBar>
        <Link href="/add">Add a Book</Link>
      </BottomBar>
    );
  }
}

export default Footer;
