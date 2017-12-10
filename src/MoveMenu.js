import React, { Component } from 'react'
import styled from 'styled-components'
import firebase from './firebase'


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
label {
  border: 1px solid ${c_dark};
  padding: 5px;
  display: block;
  margin: 0;
  &:hover {
    background: ${c_blue};
    cursor: pointer;
    &.list-title {
      background: ${c_white};
    }
  }
  input {
    margin-right: 5px;
  }
}
`

function updateShelf(title, newShelf) {
  firebase.database().ref('books/' + title).set({
    shelf: newShelf
  });
}

class MoveMenu extends Component {

  state = {
    selectedOption: ''
  }



  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value
    });
    var title = this.props.book.title
    updateShelf(title, this.state.selectedOption)

  }



  componentDidMount() {
    this.setState({
      selectedOption: this.props.shelf
    })
  }

  render() {
    return (
      <MoveMenuForm>
        <p className="list-title">Move Book:</p>
        <label>
          <input
            type="radio"
            name="shelf"
            value="current"
            checked={this.state.selectedOption === 'current'}
            onChange={this.handleOptionChange}
          />
          Currently Reading
        </label>
        <label>
          <input
            type="radio"
            name="shelf"
            value="want"
            checked={this.state.selectedOption === 'want'}
            onChange={this.handleOptionChange}
          />
          Want to Read
        </label>
        <label>
          <input
            type="radio"
            name="shelf"
            value="read"
            checked={this.state.selectedOption === 'read'}
            onChange={this.handleOptionChange}
          />
          Read
        </label>
      </MoveMenuForm>
    )
  }
}

export default MoveMenu;
