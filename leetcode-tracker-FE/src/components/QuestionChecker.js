import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./index.css"
const QuestionChecker = (props) => {
  const [questionLink, setQuestionLink] = useState("");
  const [isSubmitted, setisSubmited] = useState(false);
  const [questionData, setQuestionData] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    axios.defaults.headers = {
      "Content-Type": "application/json",
    };

    const postObj = {
      questionLink: questionLink,
    };

    console.log(postObj);

    axios.post("http://localhost:8000/find-question", postObj).then((res) => {
      console.log(res.data);
      setQuestionData(res.data);
      setisSubmited(true);
    });
  };

  const onQuestionLinkChange = (e) => {
    e.preventDefault();
    setQuestionLink(e.target.value);
  };

  if (isSubmitted) {

    if (questionData.length !== 0) {
    return (
      <div>
        <div className="card-container">
        This Question has been taught before!
        </div>

        {questionData.map((item) => {
          return (
            <div className = "card-container">
              <Card style={{ width: "18rem", marginTop: "20px" }}>
                <Card.Body>
                <Card.Title>{item.questionName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item.name}
                  </Card.Subtitle>
                  <Card.Text>
                   Question Difficulty: {item.questionDifficulty}
                  </Card.Text>
                  <Card.Text style={{marginTop: "-20px"}}>
                   Date Submitted: {item.dateSubmitted}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
    }


    else {
        return <div>Nobody has asked this question yet!</div>
    }
    

  } else {
    return (
      <div className="form-wrapper mt-5">
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>LeetCode Question Link</Form.Label>
            <Form.Control
              type="text"
              value={questionLink}
              onChange={onQuestionLinkChange}
              placeholder="https://leetcode.com/problems/number-of-islands/"
            />
          </Form.Group>

          <Button
            variant="outline-primary"
            size="lg"
            block="block"
            type="submit"
            style={{}}
          >
            Check Question Availability
          </Button>
        </Form>
      </div>
    );
  }
};

export default QuestionChecker;
