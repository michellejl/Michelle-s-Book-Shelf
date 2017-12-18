import React, { Component } from 'react'
import styled from 'styled-components'

var c_blue = '#5AB9CF'
// var c_white = '#FEFEFE'
// var c_orange = '#F04D32'
var c_dark = '#3B3F42'

const Title = styled.div`
  font-size: 1.4em;
  padding: 50px 0 35px;
  margin: 0;
  border-bottom: 12px solid ${c_blue};
  background: ${c_dark};
  a {
  color: ${c_blue};
  text-decoration: none;
  }
  h1 {
    padding: 0;
    margin: 0;
  }
  i {
    font-size: .75em;
  }
  div {
    max-width: 750px;
    padding: 0 25px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`

class Header extends Component {
  render() {
    return (
      <header>
        <Title>
          <div>
            <h1><a href="/">Michelle's Book Shelf</a></h1>
            <a href="/search"><i className="fa fa-search" aria-hidden="true"></i> Search</a>
          </div>
        </Title>

      </header>
    );
  }
}

export default Header;