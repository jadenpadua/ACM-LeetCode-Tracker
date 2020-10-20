import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import './index.css'

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      questionName: '',
      questionDifficulty: 'Easy',
      questionLink: ''
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onQuestionNameSubmit = this.onQuestionNameChange.bind(this);
    this.onQuestionDifficultySubmit = this.onQuestionDifficultyChange.bind(this);
    this.onQuestionLinkSubmit = this.onQuestionLinkChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onQuestionNameChange(e) {
    this.setState({ questionName: e.target.value });
  }

  onQuestionDifficultyChange(e) {
    this.setState({ questionDifficulty: e.target.value });
  }

  onQuestionLinkChange(e) {
    this.setState({ questionLink: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("Form Submitted!");
    console.log("----------STATE----------");
    console.log(`Name: ${this.state.name}`);
    console.log(`questionName: ${this.state.questionName}`);
    console.log(`questionDifficulty : ${this.state.questionDifficulty}`);
    console.log(`questionLink: ${this.state.questionLink}`);
    console.log("-------------------------");

    axios.post('http://192.168.0.29:8000/create-question', {
      name: this.state.name,
      questionName:  this.state.questionName,
      questionDifficulty: this.state.questionDifficulty,
      questionLink: this.state.questionLink
    }).then(res => {
      console.log(res)
    })



    this.setState({
      name: "",
      questionName: "",
      questionDifficulty: "Easy",
      questionLink: "",
    });
  }

  render() {
    return (
      <div className="form-wrapper mt-5">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onNameChange}
              placeholder="John Doe"
            />
          </Form.Group>

          <Form.Group controlId="QuestionName">
            <Form.Label>LeetCode Question Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.questionName}
              onChange={this.onQuestionNameSubmit}
              placeholder="Subarray Sum Equals K"
            />
          </Form.Group>

          <Form.Group controlId="QuestionDifficulty">
            <Form.Label>LeetCode Question Difficulty</Form.Label>
            <Form.Control
              as="select"
              value={this.state.questionDifficulty}
              onChange={this.onQuestionDifficultySubmit}
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="QuestionLink">
            <Form.Label>LeetCode Question Link</Form.Label>
            <Form.Control
              type="text"
              value={this.state.questionLink}
              onChange={this.onQuestionLinkSubmit}
              placeholder="https://leetcode.com/problems/subarray-sum-equals-k/"
            />
          </Form.Group>

          <Button
            variant="outline-primary"
            size="lg"
            block="block"
            type="submit"
            style={{}}
          >
            Submit Question
          </Button>
        </Form>
      </div>
    );
  }
}

export default Question;
