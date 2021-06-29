import React, { Component } from "react";
import { connect } from "react-redux";
import { createTutorial } from "../actions/tutorials";

class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    this.onChangeUserId = this.onChangeUserId.bind(this);

    this.state = {
      id: null,
      title: "",
      body: "",
      submitted: false,
    };
  }

  onChangeUserId(e) {
    this.setState({
      userId: e.target.value,
    });
  }


  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  saveTutorial() {
    const { userId, title, body } = this.state;

    this.props
      .createTutorial(userId, title, body)
      .then((data) => {
        this.setState({
          id: data.id,
          userId:data.userId,
          title: data.title,
          body: data.description,
          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      userId:1,
      title: "",
      body: "",
      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
          <h4> create Tutorial Post</h4>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="userId">User Id</label>
              <input
                type="number"
                className="form-control"
                id="userId"
                required
                value={this.state.userId}
                onChange={this.onChangeUserId}
                name="userId"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="body"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { createTutorial })(AddTutorial);
