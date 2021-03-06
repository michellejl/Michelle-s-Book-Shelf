import React, { Component } from 'react'
import Shelf from './Shelf'
import NavBar from './Nav'

class Home extends Component {
  render() {
    return (
      <div>
        <a name="current" className="placeHolder">Currently Reading</a>
        <Shelf
          books={this.props.current}
          shelf='Currently Reading'
          refresh={this.props.refresh}
          authed={this.props.authed} />
        <NavBar />
        <a name="want" className="placeHolder">Want To Read</a>
        <Shelf
          books={this.props.want}
          shelf='Want to Read'
          refresh={this.props.refresh}
          authed={this.props.authed} />
        <NavBar />
        <a name="read" className="placeHolder">Read</a>
        <Shelf
          books={this.props.read}
          shelf='Read'
          refresh={this.props.refresh}
          authed={this.props.authed} />
        <NavBar />
        <a name="none" className="placeHolder">Not Shelved</a>
        <Shelf
          books={this.props.none}
          shelf='Not Shelved'
          refresh={this.props.refresh}
          authed={this.props.authed} />
        <NavBar />
      </div>
    )
  }
}

export default Home