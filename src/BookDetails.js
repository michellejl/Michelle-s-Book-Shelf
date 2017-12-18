import React, { Component } from 'react'
import styled from 'styled-components'
import firebase from './firebase'

const Book = styled.div`
  display: flex;
  margin: 0 0 25px;
  padding: 5px;
  
`
const BookDetails = styled.div`
  p {
    padding: 0;
    margin: 0;
    &.book-title {
      font-weight: bold;
      font-size: 1.5em;
    }
    &.book-author {
      font-style: italic
    }
    &.book-summary {
      padding-top: 25px;
    }
  }
`

const Cover = styled.img`
  width: 150px;
  height: 200px;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.5);
  margin: 0 0 10px;
`

const BookImage = styled.div`
  margin-right: 25px;
`
class AllDetails extends Component {

  currentURL = window.location.href

  state = {
    book: [],
    bookID: this.currentURL.substr(this.currentURL.lastIndexOf('/') + 1)
  }

  componentDidMount() {
    const dbRef = firebase.database().ref("books/" + this.state.bookID)

    let Book
    dbRef.once("value", function (snapshot) {
      Book = snapshot.val();
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    }).then((books) => {
      this.setState({ book: Book })
    })
  }

  render() {
    const { book } = this.state
    return (
      <Book>
        <BookImage>
          {book.coverIMG
            ? <Cover alt="" src={book.coverIMG} />
            : <Cover alt="" src="" />}
        </BookImage>

        <BookDetails>
          <p className="book-title">{book.title}</p>
          <p className="book-author">{book.author}</p>
          <p className="book-summary">{book.summary}</p>
        </BookDetails>
      </Book>
    );
  }
}




export default AllDetails;
