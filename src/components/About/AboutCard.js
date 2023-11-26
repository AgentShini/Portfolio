import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mayowa Akande </span>
            from <span className="purple"> Nigeria.</span>
            <br />
          </p>
        

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
