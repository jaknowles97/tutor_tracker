import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

//display name, zoomLink, notes from last session, what topics they want to cover maybe..

const studentEval = "http://bit.ly/students-eval";

class ADPNotes extends Component {
  state = {
    copied: ""
  };
  copyToClipBoard = () => {
    const info = document.getElementById("student-eval");
    info.select();
    document.execCommand("copy", info.value);
  };
  render() {
    return (
      <Card style={{ width: "30vw" }}>
        <Card.Body style={{ boxShadow: "1px 1px 1px" }}>
          <Card.Title className="mb-2 text-muted">Slack These!</Card.Title>
          <textarea
            value={`${studentEval} \n ${this.props.code}`}
            id="student-eval"
            readOnly
            style={{ width: "100%", minHeight: "105px" }}
          />
          <Button onClick={this.copyToClipBoard}>Copy</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default ADPNotes;
