import React from "react";
import "./footer.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="main-footer">
      <Row>
        <Col>
          <h1>React-Bootstrap</h1>
        </Col>
        <Col>
          <a href="https://www.facebook.com/7anan.engineer">
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{
                marginRight: "10px",
                fontSize: "25px",
              }}
            />
          </a>
          <a href="https://twitter.com/7ananTaha">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{
                marginRight: "10px",
                fontSize: "25px",
              }}
            />
          </a>
          <a href="https://github.com/7ananDlshad">
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: "25px" }} />
          </a>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>kuy</Col>
        <Col>bashi</Col>
        <Col>chaki</Col>
      </Row>
      {/* <hr />
      <Row>
        <Col></Col>
      </Row> */}
    </div>
  );
}
