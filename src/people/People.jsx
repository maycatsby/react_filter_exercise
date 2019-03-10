import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ...

class People extends Component {
  static propTypes = {
    query: PropTypes.string,
    people: PropTypes.array
  };

  listOfPeople() {
    const currentList = this.props.people.filter(cur => {
      const cond = cur.name
        .split(" ")
        .filter(str =>
          str.toLowerCase().startsWith(this.props.query.toLowerCase())
        ).length;

      if (cond) {
        return cur;
      }
    });

    const peopleList = currentList.map(cur => (
      <div className="App-box" key={cur.id}>
        {cur.name}
      </div>
    ));
    return peopleList;
  }

  render() {
    return <div>{this.listOfPeople()}</div>;
  }
}

const mapStateToProps = state => {
  return { people: state.people.people, query: state.people.filterQuery };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // ...
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(People);
