import React from "react";
import "./about.css";
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
    </>
  );
}
