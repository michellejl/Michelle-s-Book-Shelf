import React, { Component } from 'react'
import serializeForm from 'form-serialize'
import styled from 'styled-components'

var c_blue = '#5AB9CF'
var c_white = '#FEFEFE'
// var c_yellow = '#FAB94E'
// var c_orange = '#F04D32'
var c_dark = '#3B3F42'

const AddForm = styled.form`

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

const TextArea = styled.textarea`
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
`

const Shelf = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`

const Button = styled.input`
  border: 2px solid ${c_blue};
  background: ${c_blue};
  color: ${c_white};
  width: 100%; 
  font-size: 16px;
  line-height: 40px;
`

class AddBookForm extends Component {

  state = {
    selectedShelf: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if (values) {
      this.props.createBook(values)
    }
  }

  handleOptionChange = (e) => {
    this.setState({
      selectedShelf: e.target.value
    });
  }

  render() {
    return (
      <AddForm onSubmit={this.handleSubmit}>
        <Fieldset>
          <Legend>Add a New Book</Legend>
          <InputField type="text" name="title" placeholder="Title" />
          <InputField type="text" name="author" placeholder="Author" />
          <InputField type="text" name="imageURL" placeholder="Image URL" />
          <TextArea cols="30" rows="5" name="summary" placeholder="Summary" />

          <Shelf>
            <label>
              <input
                type="radio"
                name="shelf"
                value="current"
                checked={this.state.selectedShelf === 'current'}
                onChange={this.handleOptionChange}
              />
              Currently Reading
            </label>
            <label>
              <input
                type="radio"
                name="shelf"
                value="want"
                checked={this.state.selectedShelf === 'want'}
                onChange={this.handleOptionChange}
              />
              Want to Read
            </label>
            <label>
              <input
                type="radio"
                name="shelf"
                value="read"
                checked={this.state.selectedShelf === 'read'}
                onChange={this.handleOptionChange}
              />
              Read
            </label>
            <label>
              <input
                type="radio"
                name="shelf"
                value="none"
                checked={this.state.selectedShelf === 'none'}
                onChange={this.handleOptionChange}
              />
              None
            </label>
          </Shelf>

          <Button type="submit" value="Submit" />
        </Fieldset>
      </AddForm>
    );
  }
}

export default AddBookForm;


