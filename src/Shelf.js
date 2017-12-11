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

    return (
      <BookShelf>
        <ShelfTitle>{this.props.shelf}</ShelfTitle>

        {this.props.books.map((book) => (
          <SimpleBook key={book[0]} bookID={book[0]} book={book[1]} />
        ))}
      </BookShelf>
    );
  }
}

export default Shelf;
