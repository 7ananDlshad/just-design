import React from "react";
import "./about.css";

export default function About() {
  return (
    <>
      <div className="bg-image"></div>
      <div className='text-center my-5'>
        <h1>Who are we?</h1>
        <hr style={{ width: '20%' }} />
        <p>We are Diamond Team consist of 5 members and we are all  fellows at Re:Coded</p>
        <p> Front-End Web development for 2020. This is our capstone project,we worked on</p>
        <p>   it so hard  for 6 weeks.</p>
      </div>

      <div className='text-center' style={{ marginTop: '10%' }}>
        <h1>What is Take a Bus?</h1>
        <hr style={{ width: '30%' }} />
        <p>Take a Bus this is  our project name and it was the idea of our amzing team </p>
        <p>member (Hanan),which is for the bus user that they will not wait  for a bus to long</p>
        <p>and save their time as well,so by using this website they will be able to see each </p>
        <p>bus route ,destinatioon ,timing, and also stop station for each bus.</p>
      </div>


    </>
  );
}
