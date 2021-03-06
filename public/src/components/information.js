import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import axios from 'axios';

class Information extends Component {
  componentWillMount() {
    this.props.fetchInfo();
  }
  render() {

    return (
      <div>{this.props.message}</div>
    );
  };
}
function mapStateToProps(state) {
  return {message: state.auth.message};
}
export default connect(mapStateToProps, actions)(Information);
