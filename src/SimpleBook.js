import React, { Component } from 'react'
import styled from 'styled-components'
import MoveMenu from './MoveMenu'


var c_blue = '#5AB9CF'
// var c_white = '#FEFEFE'
// var c_yellow = '#FAB94E'
// var c_orange = '#F04D32'
// var c_dark = '#3B3F42'

const Book = styled.div`
  flex: 1 1 25%;
  margin: 0 0 25px;
  padding: 5px;
`
const BookDetails = styled.div`
  p {
    padding: 0;
    margin: 0;
    &.book-title {
      font-weight: bold;
    }
  }
`

const Cover = styled.img`
  width: 150px;
  height: 200px;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);
  margin: 0 0 10px;
  
`

const Icon = styled.i`
  color: ${c_blue};
  font-size: 2em;
  margin: -.5em;
  &:hover {
    cursor: pointer;
  }
`

class SimpleBook extends Component {

  state = {
    menuOpen: false
  }

  menuClickHandler = () => {
    if (this.state.menuOpen === true) {
      this.setState({ menuOpen: false })
    } else {
      this.setState({ menuOpen: true })
    }
  }

  render() {
    const book = this.props.book
    const bookID = this.props.bookID

    return (
      <Book key={bookID}>
        <a href={'/book/' + String(bookID)}>
          <Cover alt="" src={book.coverIMG} />
        </a>

        {this.props.authed
          ? (
            <Icon onClick={this.menuClickHandler}>
              <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
            </Icon>
          )
          : (<span></span>)}
        {this.state.menuOpen ? (
          <MoveMenu
            shelf={book.shelf}
            bookID={bookID}
            book={book}
            refresh={this.props.refresh} />
        ) : (<div></div>)}


        <BookDetails>
          <p className="book-title">{book.title}</p>
          <p className="book-author">{book.author}</p>

          {bookID}
        </BookDetails>
      </Book>
    );
  }
}




export default SimpleBook;
