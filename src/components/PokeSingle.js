import React, { Component } from 'react'

export default class PokeSingle extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.params.pokesingle}</h3>
      </div>
    );
  }
}
