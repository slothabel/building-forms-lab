import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  
  render() {
    const bands = this.props.bands.map((band, index) => <li key={index}>{band.name}</li> )
    debugger
    return(
      <div>
        {<ul>
          {bands}
          </ul>}
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (formData) => dispatch({ type: "ADD_BAND", payload: formData }),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
