import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EditEntry from "./components/EditEntry"
import Question from "./components/Question"
import QuestionChecker from "./components/QuestionChecker"
import Test from "./components/Test"
import FoundQuestion from "./components/FoundQuestion"

import "./App.css";

const App = () => {





  const navLink = {
    color: "white"
  }

  const appHeader = {
    backgroundColor: 'red'
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="primary" variant="dark" style={appHeader}>
            <Container>
              <Navbar.Brand>
                <Link to={"/submit-host-form"} className="nav-link" style={navLink}>
                  ACM LeetCode Question Tracker
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/submit-host-form"} className="nav-link"style={navLink}>
                    Submit Question
                  </Link>
                </Nav>

                {/* <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav> */}

                <Nav>
                  <Link to={"/question-checker"} className="nav-link" style={navLink}>
                    Question Checker
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={Question} />
                  <Route path="/submit-host-form" component={Question} />
                  <Route path="/edit-entry/:id" component={EditEntry} />
                  <Route path="/question-checker" component={QuestionChecker} />
                  <Route path="/form-submitted" component={Test} />
                  <Route path="/found-question" component={FoundQuestion} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
