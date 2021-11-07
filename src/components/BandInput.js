// import BandsContainer from '../containers/BandsContainer';
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: "",
  };

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    // debugger
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} >
          <input onChange={this.handleChange} type="text" placeholder="add band" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
// export default connect(null, mapDispatchToProps)(CreateTodo);
// BandInput
