import React, { Component } from 'react'
import Shelf from './Shelf'
import styled from 'styled-components'
import escapeRegExp from 'escape-string-regexp'

// var c_blue = '#5AB9CF'
// var c_white = '#FEFEFE'
// var c_yellow = '#FAB94E'
// var c_orange = '#F04D32'
// var c_dark = '#3B3F42'

const InputField = styled.input`
  box-sizing: border-box;
  outline: none;
  display: inline-block;
  width: 100%;
  padding: 7px;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin-bottom: 10px;
  font-size: 14px;
  height: 45px;
`

class SearchForm extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = (query) => {
    this.setState({ query: '' })
  }

  render() {
    const { query } = this.state
    const { books } = this.props

    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => match.test(book[1].author) || match.test(book[1].title))
    } else {
      showingBooks = books
    }

    return (
      <div>
        <InputField
          type="text"
          name="searchTitle"
          placeholder="Search"
          value={query}
          onChange={(event) => this.updateQuery(event.target.value)} />
        <Shelf
          books={showingBooks}
          shelf='Matching Books'
          refresh={this.props.refresh}
          authed={this.props.authed} />
      </div>
    );
  }
}

export default SearchForm;