import React, { Component } from "react";
class Welcome extends Component{
render() {
  const {name, heroName} = this.props
  // const {state1, state2} = this.state
    return (
    <button> Welcome{name} a.k {heroName}
    </button>
    )
  }
}

export default Welcome