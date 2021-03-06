import React from "react";
import Nav from "../components/nav";
import me from "../../assets/Lydia.png"
import Footer from "../components/footer";

const title = 'About Me'
const text = 
    <div>
        <h3>I am a software engineer, lifelong learner, and an avid salsa dancer. I graduated the University of Viriginia in 2018 with a degree in Cognitive Science and Studio Art, and transitioned into code with the Flatiron School in Denver.</h3>
        <br/>
        <h3>Finding code has allowed me to express myself and my ideas in new and creative ways. I love the challenge of solving interesting code problems, and am excited to have chosen a career with endless opporunities to learn and grow. If you'd like to chat, my email is <i>lydia.gregory.dev@gmail.com</i>. I'd love to hear from you.</h3>
        <br/>
        <h3>Want to learn more? Check out these links below:</h3>
        <ul>
          <li><span role="img" aria-label="right arrow emoji">➡️ </span><a className='link' href='https://ljg2gb.myportfolio.com/'>Designs, art, photography, etc.</a></li>
          <li><span role="img" aria-label="right arrow emoji">➡️ </span><a className='link' href='https://lydia-gregory.medium.com/'>What I'm interested in right now</a></li>
          <li><span role="img" aria-label="right arrow emoji">➡️ </span><a className='link' href='https://codepen.io/Lydia_gregory'>Various frontend experiments</a></li>
        </ul>
    </div>
    
export default function About() {
  return (
    <div>
      <Nav/>
      <div className='about-layout'>
        <h1>{title}</h1>
        <div className='about-content'>
          {/* <div> */}
            <h3>{text}</h3>
          {/* </div>
          <div> */}
            <img className='headshot' src={me} alt="Lydia Gregory" />
          {/* </div> */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}