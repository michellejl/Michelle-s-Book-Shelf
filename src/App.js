import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Shelf from './Shelf'
import AddBookForm from './AddBookForm'
import firebase from './firebase'

const Container = styled.div`
  margin: 25px auto;
  padding: 0 25px;
  max-width: 750px;
`

class App extends Component {
  state = {
    books: [],
    current: [],
    want: [],
    read: []
  }

  componentDidMount() {
    const dbRef = firebase.database().ref("books/")

    let AllBooks
    dbRef.once("value", function (snapshot) {
      AllBooks = snapshot.val();
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    }).then((books) => {
      AllBooks = Object.keys(AllBooks).map((key) => [Number(key), AllBooks[key]]);
      let current = [], read = [], want = []
      let sortingBooks = AllBooks.map((book) => {
        if (book[1].shelf === 'current') { current.push(book) }
        if (book[1].shelf === 'want') { want.push(book) }
        if (book[1].shelf === 'read') { read.push(book) }
      })
      this.setState({ books: AllBooks, current, want, read })
    })
  }

  render() {

    // let currentBooks = this.state.books.filter((book) => book.shelf === 'read')


    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => (
          <Container>
            <Shelf
              books={this.state.current}
              shelf='Currently Reading' />
            <Shelf
              books={this.state.want}
              shelf='Want to Read' />
            <Shelf
              books={this.state.read}
              shelf='Read' />
          </Container>
        )} />
        <Route path="/shelf/currently-reading" render={() => (
          <Container>
            <Shelf
              books={this.state.current}
              shelf='Currently Reading' />
          </Container>
        )} />
        <Route path="/shelf/want-to-read" render={() => (
          <Container>
            <Shelf
              books={this.state.want}
              shelf='Want to Read' />
          </Container>
        )} />
        <Route path="/shelf/read" render={() => (
          <Container>
            <Shelf
              books={this.state.read}
              shelf='Read' />
          </Container>
        )} />
        <Route path="/add" render={() => (
          <Container>
            <AddBookForm />
          </Container>
        )} />
        <Footer />
      </div>
    );
  }
}

export default App;
