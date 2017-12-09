import React, { Component } from 'react'
import styled from 'styled-components'


var c_blue = '#5AB9CF'
var c_white = '#FEFEFE'
// var c_yellow = '#FAB94E'
// var c_orange = '#F04D32'
var c_dark = '#3B3F42'


const MoveMenuForm = styled.form`
padding: 0;
position: absolute;
border: 1px solid ${c_dark};
background: ${c_white};
z-index: 10;
p {
  border: 1px solid ${c_dark};
  padding: 5px;
  margin: 0;
  &:hover {
    background: ${c_blue};
    &.list-title {
      background: ${c_white};
    }
  }
  input {
    margin-right: 5px;
  }
}
`
class MoveMenu extends Component {

  state = {
    currentChecked: false,
    wantChecked: false,
    readChecked: false,
    selectedOption: false
  }

  render() {
    return (
      <MoveMenuForm>
        <p className="list-title">Move Book:</p>
        <p>
          <input type="radio" name="shelf" value="current" checked={this.props.shelf === 'current'} />
          Currently Reading
        </p>
        <p>
          <input type="radio" name="shelf" value="want" checked={this.props.shelf === 'want'} />
          Want to Read
        </p>
        <p>
          <input type="radio" name="shelf" value="read" checked={this.props.shelf === 'read'} />
          Read
        </p>
      </MoveMenuForm>
    )
  }
}

export default MoveMenu;
