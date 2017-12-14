import React, { Component } from 'react'
import Shelf from './Shelf'

class Home extends Component {
  render() {
    return (
      <div>
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
        <Shelf
          books={this.state.none}
          shelf='Not Shelved'
          refresh={this.reRender} />
      </div>
    )
  }
}

export default Home