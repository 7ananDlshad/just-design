import React from "react";
import "./about.css";
import "./circle.css";
import { Button, Row, Col, Card, CardDeck } from "react-bootstrap";

export default function About() {
  return (
    <>
      <div className="bg-image">
        <svg
          viewBox="0 0 1440 722"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute" }}
        >
          <path
            d="M1142.4 28.0474C1190.19 -22.7491 1422.05 6.88217 1532 28.0474V722H-24.3327C-134.807 674.503 -301.938 588.809 -86.6691 626.007C182.416 672.503 9.9523 582.51 123.716 543.012C209.252 513.315 177.664 437.238 164.67 413.851C163.877 413.019 163.237 412.225 162.759 411.472C158.119 404.153 160.382 406.132 164.67 413.851C194.929 445.556 448.521 531.352 450.546 488.967C452.624 445.47 521.713 526.464 598.075 488.967C674.437 451.469 668.723 392.973 699.372 325.478C730.021 257.982 826.642 220.485 915.472 198.486C1004.3 176.488 1082.66 91.5431 1142.4 28.0474Z"
            fill="#18A0FB"
            fillOpacity="0.3"
          />
        </svg>

        <div style={{ position: "absolute", padding: "8% 14%" }}>
          <h1>TAKE A BUS NOW </h1>
          <p style={{ paddingLeft: "13%" }}>or</p>
          <h4 className="px-3">Miss your chance forever</h4>
          <Button variant="submit" type="submit" className="px-5 my-2">
            Find Bus
          </Button>
        </div>
      </div>

      <div className="text-center " style={{ marginTop: "3%" }}>
        <h1>Who are we?</h1>
        <hr style={{ width: "20%" }} />
        <p>
          We are Diamond Team consist of 5 members and we are all fellows at
          Re:Coded
        </p>
        <p>
          Front-End Web development for 2020. This is our capstone project,we
          worked on
        </p>
        <p> it so hard for 6 weeks.</p>
      </div>

      <div className="text-center" style={{ marginTop: "7%" }}>
        <h1>What is Take a Bus?</h1>
        <hr style={{ width: "30%" }} />
        <p>
          Take a Bus this is our project name and it was the idea of our amzing
          team
        </p>
        <p>
          member (Hanan),which is for the bus user that they will not wait for a
          bus to long
        </p>
        <p>
          and save their time as well,so by using this website they will be able
          to see each
        </p>
        <p>
          bus route ,destinatioon ,timing, and also stop station for each bus.
        </p>
      </div>

      <div
        className="text-center"
        style={{ marginTop: "7%", backgroundColor: " rgba(24, 160, 251, 0.1" }}
      >
        <h1 className="pt-3">Who use Take a Bus?</h1>
        <hr style={{ width: "30%" }} />
        <div className="row d-flex justify-content-center my-5">
          <div className="col-md-3 col-sm-6 ">
            <div className="progress blue">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>

              <div className="progress-value">90%</div>
            </div>
            <h5 className="my-4">students</h5>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="progress green">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">85%</div>
            </div>
            <h5 className="my-4">old peoples</h5>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="progress yellow">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">75%</div>
            </div>
            <h5 className="my-4">teenagers</h5>
          </div>
        </div>
      </div>

      <div className="text-center" style={{ marginTop: "5%" }}>
        <h1>What do we give you?</h1>
        <hr style={{ width: "30%" }} />
        <Row>
          <Col lg={5} style={{ marginTop: "7%" }}>
            <Row>
              <Col className="d-flex justify-content-end align-item-center">
                <img
                  src={require("../images/time.png")}
                  alt="my pic"
                  style={{ width: "33%", height: "67%" }}
                />
              </Col>
              <Col>
                <h4>Check the time </h4>
                <small>
                  You can go to the route time of the busses and check the best
                  time for you.
                </small>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-end align-item-center py-5">
                <img
                  src={require("../images/route.png")}
                  alt="my pic"
                  style={{ width: "35%", height: "78%" }}
                />
              </Col>
              <Col className="py-5">
                <h4>Check your route </h4>
                <small>
                  Choose the best route for you and for your travel.
                </small>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-end align-item-center">
                <img
                  src={require("../images/destination.png")}
                  alt="my pic"
                  style={{ width: "35%", height: "78%" }}
                />
              </Col>
              <Col>
                <h4>Get to your destination </h4>
                <small>
                  Go in the bus and get to your place and enjoy your time.
                </small>
              </Col>
            </Row>
          </Col>

          <Col lg={7}>
            <img
              src={require("../images/take-bus.png")}
              alt="my pic"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </div>

      <div className="px-5 text-center" style={{ marginTop: "5%" }}>
        <h1>Want to meet us?</h1>
        <hr style={{ width: "25%" }} />

        <CardDeck className="py-5">
          <Card
            style={{ border: "none" }}
            className="col-lg-3 col-md-6 col-sm-12"
          >
            <Card.Img variant="top" src={require("../images/good-man.jpg")} />
            <Card.Body>
              <Card.Title>Ahmed Duhoki</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "none" }}
            className="col-lg-3 col-md-6 col-sm-12"
          >
            <Card.Img variant="top" src={require("../images/good-man.jpg")} />
            <Card.Body>
              <Card.Title>Hanan Dlshad</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "none" }}
            className="col-lg-3 col-md-6 col-sm-12"
          >
            <Card.Img variant="top" src={require("../images/good-man.jpg")} />
            <Card.Body>
              <Card.Title>Ahmed Al-kheerow</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "none" }}
            className="col-lg-3 col-md-6 col-sm-12"
          >
            <Card.Img variant="top" src={require("../images/good-man.jpg")} />
            <Card.Body>
              <Card.Title>Shna Rafeeq</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ border: "none" }}
            className="col-lg-3 col-md-6 col-sm-12"
          >
            <Card.Img variant="top" src={require("../images/good-man.jpg")} />
            <Card.Body>
              <Card.Title>Jalal Arif</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </>
  );
}
