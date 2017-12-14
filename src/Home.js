import React, { Component } from 'react'
import Shelf from './Shelf'

class Home extends Component {
  render() {
    return (
      <div>
        <Shelf
          books={this.props.current}
          shelf='Currently Reading'
          refresh={this.props.reRender} />
        <Shelf
          books={this.props.want}
          shelf='Want to Read'
          refresh={this.props.reRender} />
        <Shelf
          books={this.props.read}
          shelf='Read'
          refresh={this.props.reRender} />
        <Shelf
          books={this.props.none}
          shelf='Not Shelved'
          refresh={this.props.reRender} />
      </div>
    )
  }
}

export default Home

{/* <Shelf
          books={this.props.current}
          shelf='Currently Reading'
        />
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
          refresh={this.reRender} /> */}