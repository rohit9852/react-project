import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveTutorials,
} from "../actions/tutorials";
import { Link } from "react-router-dom";
import './list.css'

class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.refreshData = this.refreshData.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);

    this.state = {
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveTutorials();
  }

  refreshData() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  render() {
    const { searchTitle, currentTutorial, currentIndex } = this.state;
    const { tutorials } = this.props;

    return (
      <div className="list row">
        <div className="col-md-6 containers">
          <h4>Tutorials Post List</h4>
          <table className="container">
                <tr>
                    <th>userId</th>
                    <th>Title</th>
                    <th>Descriptions</th>
                </tr>
                {tutorials &&
                    tutorials.map((tutorial, index) => ( 
                    <tr>
                      <td>{tutorial.userId}</td>
                      <td>{tutorial.title}</td>
                      <td>{tutorial.body}</td>
                    </tr>
                 ))}
            </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tutorials: state.tutorials,
  };
};

export default connect(mapStateToProps, {
  retrieveTutorials,
})(TutorialsList);
