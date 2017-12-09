import React, { Component } from 'react'
import SimpleBook from './SimpleBook'
import styled from 'styled-components'

var c_blue = '#5AB9CF'
// var c_white = '#FEFEFE'
// var c_yellow = '#FAB94E'
// var c_orange = '#F04D32'
// var c_dark = '#3B3F42'

const BookShelf = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ShelfTitle = styled.h2`
  width: 100%;
  border-bottom: 5px solid ${c_blue}
`

class Shelf extends Component {

  state = {

  }

  render() {
    let booksOnShelf
    if (this.props.shelf === 'Read') {
      booksOnShelf = this.props.books.filter((book) => book.shelf === 'read')
    } else if (this.props.shelf === 'Want to Read') {
      booksOnShelf = this.props.books.filter((book) => book.shelf === 'want')
    } else if (this.props.shelf === "Currently Reading") {
      booksOnShelf = this.props.books.filter((book) => book.shelf === 'current')
    } else {
      booksOnShelf = this.props.books
    }

    return (
      <BookShelf>
        <ShelfTitle>{this.props.shelf}</ShelfTitle>

        {booksOnShelf.map((book) => (
          <SimpleBook key={book.title} book={book} />
        ))}
      </BookShelf>
    );
  }
}

export default Shelf;
