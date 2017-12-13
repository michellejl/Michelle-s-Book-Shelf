import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Shelf from './Shelf'
import AddBookForm from './AddBookForm'
import SearchForm from './search'
import AllDetails from './BookDetails'
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
      AllBooks.map((book) => {
        if (book[1].shelf === 'current') { current.push(book) }
        if (book[1].shelf === 'want') { want.push(book) }
        if (book[1].shelf === 'read') { read.push(book) }
      })
      this.setState({ books: AllBooks, current, want, read })
    })
  }

  reRender = () => {
    this.componentDidMount()
  }

  createBook(book) {
    var newPostKey = firebase.database().ref().child('books').push().key;
    var updates = {};
    updates['/books/' + newPostKey] = book;
    firebase.database().ref().update(updates)
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={() => (
          <Container>
            <Shelf
              books={this.state.current}
              shelf='Currently Reading'
              refresh={this.reRender} />
            <Shelf
              books={this.state.want}
              shelf='Want to Read'
              refresh={this.reRender} />
            <Shelf
              books={this.state.read}
              shelf='Read'
              refresh={this.reRender} />
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
        <Route path="/add" render={({ history }) => (
          <Container>
            <AddBookForm createBook={(book) => {
              this.createBook(book)
              history.push('/')
              this.componentDidMount()
            }} />
          </Container>
        )} />
        <Route path="/search" render={() => (
          <Container>
            <SearchForm books={this.state.books} refresh={this.reRender} />
          </Container>
        )} />
        <Route path="/book/" render={() => (
          <Container>
            <AllDetails />
          </Container>
        )} />
        <Footer />
      </div>
    );
  }
}

export default App;
