import React from "react";
import "./footer.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <style type="text/css">
        {`
.btn-submit{
  background-color: #18A0FB;
  color: white;
}

`}
      </style>

      <div className="container main-footer">
        <Row className="p-3">
          <Col>
            <h1>photo</h1>
          </Col>
          <Col className="d-flex justify-content-end">
            <a href="https://www.facebook.com/7anan.engineer">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{
                  marginTop: "10px",
                  marginRight: "30px",
                  fontSize: "30px",
                  color: "#18A0FB",
                }}
              />
            </a>
            <a href="https://twitter.com/7ananTaha">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{
                  marginTop: "10px",
                  marginRight: "30px",
                  fontSize: "30px",
                  color: "#18A0FB",
                }}
              />
            </a>
            <a href="https://github.com/7ananDlshad">
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  marginTop: "10px",
                  fontSize: "30px",
                  color: "#18A0FB",
                }}
              />
            </a>
          </Col>
        </Row>
        <hr />

        <Row >
          <Col sm={12} lg={4} md={4} className='mt-3'>
            <h4>Want to talk with Us?</h4>
            <p>We are always at your service</p>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{
                fontSize: "30px",
                color: "#18A0FB",
                marginRight: "15px",
              }}
            />
            <small>Erbil, Near our neightbour home - Iraq</small>
            <br />
            <FontAwesomeIcon
              icon={faCommentDots}
              style={{
                fontSize: "30px",
                color: "#18A0FB",
                marginRight: "15px",
                marginTop: "30px",
              }}
            />
            <small>+9647512310232</small>
          </Col>
          <Col sm={12} lg={4} md={4} className='mt-3'>
            <h4>Our Services</h4>
            <ul>
              <li>Route list</li>
              <li>Provide Busses</li>
              <li>Time of busses</li>
              <li>We love you</li>
              <li>Mobile Development</li>
            </ul>
          </Col>
          <Col sm={12} lg={4} md={4} className='mt-3'>
            <h4>Contact Us</h4>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="write you message...."
                />
              </Form.Group>
              <Button
                variant="submit"
                type="submit"
                className="px-5 float-right"
              >
                Submit Now
              </Button>
            </Form>
          </Col>
        </Row>
        <hr />
        <Row className="p-3">
          <Col align="middle">
            <small>&copy; Copyright Royal Diamond Team 2020</small>
          </Col>
        </Row>
      </div>
    </>
  );
}
