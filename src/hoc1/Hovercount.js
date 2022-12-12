import React, { Component } from 'react'
import EnComponent from './Hoc'
 class Hovercount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
  render() {
    return (
        <div>
        {this.props.name}
        <h1 onMouseEnter={this.props.inc}>cilck{this.props.count}</h1>
        </div>
    )
  }

}
export default EnComponent(Hovercount);