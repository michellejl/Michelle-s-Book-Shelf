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

  state = {}

  render() {
    return (
      <BookShelf key={this.props.shelf}>
        <ShelfTitle>{this.props.shelf}</ShelfTitle>
        {this.props.books.length === 0
          ? <p>There are currently no books here! Don't cry...They might just be loading still.</p>
          : (
            this.props.books.map((book) => (
              <SimpleBook key={book[1].title} bookID={book[0]} book={book[1]} refresh={this.props.refresh} authed={this.props.authed} />
            ))
          )}

      </BookShelf>
    );
  }
}

export default Shelf;
