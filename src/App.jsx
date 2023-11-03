import React from 'react';
import './App.css';
import profileImage from './assets/images/profilepic.jpeg'

function App() {
  // const profileImage = './assets/images/profilepic.jpeg';
  const linkedinProfile = 'https://www.linkedin.com/in/yian-saechao-100640287/';
  const MyResume = 'https://docs.google.com/document/d/17F7N8jSfwJ2dRpk_mAlD9siMzOSbmGed/edit?usp=sharing&ouid=117805695497650742381&rtpof=true&sd=true'
  const WeatherApp = 'https://app-hosting-ghd2.onrender.com/';
  const ToDoList = 'https://yiansaechao.github.io/Final-MOD-Project/'

  return (
    <div className="App">
      <header>
        <h1>Hello!</h1>
      </header>

      <img id="profile-image" src={profileImage} alt="Yian Saechao" />

      <div className="container">
        <h2>About Me</h2>
        <p>
          My name is Yian Saechao. I'm a 15-year aerospace veteran with a strong background in leadership, relationship management, and problem-solving. Throughout my career, I've led teams, optimized operations, and championed quality and safety initiatives. Recently, I completed a Full Stack JavaScript Development Program, where I gained expertise in a wide range of web technologies, including HTML, CSS, JavaScript, React, and the MERN (MongoDB, Express.js, React, Node.js) stack. What drives me is not only my commitment to delivering results but also my passion for growth, learning and continuous improvement. I'm looking to leverage this diverse skill set and transition into a technical career, ready to apply the knowledge I've gained to new challenges and opportunities. I'm eager to bring this wealth of experience, proven operational skills, and a growth mindset to a new role. I’m ready to make an impact at your company.
        </p>
        <div id="linkedin-link">
          <a href={linkedinProfile} target="_blank" rel="noopener noreferrer">
            Connect with me on LinkedIn
          </a>
        </div>
        <div id='resume-link'>
        <a href={MyResume} target="_blank" rel=" ">
            Resume
          </a>
        </div>
        <div id="weather-app">
          <a href={WeatherApp}>Check out my Weather App</a>
        </div>
        <div id="todo-list">
          <a href={ToDoList}>Check out my Todo App</a>
        </div>
      </div>
    </div>
  );
}
export default App;

