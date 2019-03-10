import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { query } from "../actions/people";

class Filter extends Component {
  static propTypes = {
    query: PropTypes.func,
    people: PropTypes.array
  };

  renderInput() {
    return (
      <input
        className="App-box input"
        type="text"
        placeholder={`Search`}
        onChange={e => this.props.query(e.target.value)}
      />
    );
  }

  render() {
    return <div className="App-box">{this.renderInput()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    people: state.people.people
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ query }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
