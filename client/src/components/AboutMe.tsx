import React from 'react'
import portrait from "../assets/Toby-portrait.jpg";

const AboutMe = () => {
  return (
    <div>
       <h1 style={{ marginBottom: "10px" }}>Heading</h1>
            <p style={{ fontSize: "16px" }}>Body text goes here.</p>
            <img src={ portrait } alt="Image" /> 
            <button>Menu</button>
    </div>
  )
}

export default AboutMe
