import React from "react";
import "./about.css";
import "./circle.css";
import { Button } from "react-bootstrap";
export default function About() {
  return (
    <>
      <div className="bg-image">
        <div style={{ padding: "8% 14%" }}>
          <h1>TAKE A BUS NOW </h1>
          <p style={{ paddingLeft: "13%" }}>or</p>
          <h4 className="px-3">Miss your chance forever</h4>
          <Button variant="submit" type="submit" className="px-5 my-2">
            Find Bus
          </Button>
        </div>
      </div>

      <div className="text-center my-5">
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
      <div className="container text-center" style={{ marginTop: "7%" }}>
        <h1>Who use Take a Bus?</h1>
        <hr style={{ width: "40%" }} />
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
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="progress blue">
              <span className="progress-left">
                <span className="progress-bar"></span>
              </span>
              <span className="progress-right">
                <span className="progress-bar"></span>
              </span>
              <div className="progress-value">90%</div>
            </div>
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
          </div>
        </div>
      </div>
    </>
  );
}
