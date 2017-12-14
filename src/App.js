import React, { Component } from 'react'
import { Route, Redirect, BrowserRouter, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
// import AddBookForm from './AddBookForm'
import SearchForm from './search'
// import Login from './Login'
import firebase, { fbAuth, dbRefBooks, ref } from './firebase'

const Container = styled.div`
  margin: 25px auto;
  padding: 0 25px;
  max-width: 750px;
`

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      render={(props) => <Component {...props} {...rest} authed={authed} />}
    />
  )
}

class App extends Component {
  state = {
    authed: false,
    loading: true,
    books: [],
    current: [],
    want: [],
    read: [],
    none: []
  }

  componentDidMount() {
    this.removeListener = fbAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
    let AllBooks
    dbRefBooks.once("value", function (snapshot) {
      AllBooks = snapshot.val();
    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);
    }).then((books) => {
      AllBooks = Object.keys(AllBooks).map((key) => [Number(key), AllBooks[key]]);
      let current = [], read = [], want = [], none = []
      // eslint-disable-next-line
      AllBooks.map((book) => {
        if (book[1].shelf === 'current') { current.push(book) }
        else if (book[1].shelf === 'want') { want.push(book) }
        else if (book[1].shelf === 'read') { read.push(book) }
        else { none.push(book) }
      })
      this.setState({ books: AllBooks, current, want, read, none })
    })
  }
  componentWillUnmount() {
    this.removeListener()
  }

  reRender = () => {
    this.componentDidMount()
  }

  // createBook(book) {
  //   var newPostKey = firebase.database().ref().child('books').push().key;
  //   var updates = {};
  //   updates['/books/' + newPostKey] = book;
  //   firebase.database().ref().update(updates)
  // }

  render() {

    return this.state.loading === true ? <h1>Loading...</h1> : (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Container>
            <Switch>
              <PublicRoute
                path='/' exact
                component={Home}
                current={this.state.current}
                want={this.state.want}
                read={this.state.read}
                none={this.state.none}
                refresh={this.reRender}
                authed={this.state.authed} />
              <PublicRoute
                authed={this.state.authed}
                path='/search'
                component={SearchForm}
                books={this.state.books}
                refresh={this.reRender}
              />
            </Switch>
          </Container>
          <Footer authed={this.state.authed} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

{/* 
<Route path="/add" render={({ history }) => (
  <Container>
    {this.props.currentStatus ?
      <AddBookForm createBook={(book) => {
        this.createBook(book)
        history.push('/')
        this.componentDidMount()
      }} />
      :
      <p>You must be logged in to add a new book.</p>
    }
  </Container>
)} />
<Route path="/login" render={({ history }) => (
  <Container>
    <Login setUserStatus={(userStatus) => {
      this.setUserStatus(userStatus)
      history.push('/')
      this.componentDidMount()
    }}
      currentStatus={this.state.user} />
  </Container>
)} />

<Route path="/book/" render={() => (
  <Container>
    <AllDetails />
  </Container>
)} />
<Footer loggedin={this.state.user} /> */}