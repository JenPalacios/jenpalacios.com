import React from "react"

// styles
import sass from '../styles/index.module.sass'

//images
import lab from '../images/lab.svg'

const PrivateProjectsSection = () => (
  <div className={sass.privateProjectsBackground}>
    <div className={sass.projectsInnerContainer}>
      <div className={sass.textContainer}>
        <div className={sass.icon}>
          <img src={lab} alt=""/>
        </div>
        <div className={sass.headline}>
          <h1>Code</h1>
          <p>--> of the private projects kind</p>
        </div>
        <div>
          <div className={sass.justify}>
            <p>
            I enjoy to code on my free time. Whether it is following a course to learn something new, or to create something fun and even sometimes useful.
            </p>
            <p>
            Some of the stuff I have enjoyed doing privately are:
            </p>
          </div>
          <div className={sass.row}>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>GoPro Slow Motion Video Booth</h3>
                <p>For my wedding I created a small application with Node.js to connect with the GoPro wirelessly, record for 5 seconds, and then replay the clip in slow motion. This was great fun at the party and at the end I created a video of all the tiny clips.</p>
              </div>
            </div>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>This website</h3>
                <p>I created this website in an effort to learn how React, Gatsby, and Netlify works. It's been a fun ride to learn new stuff.</p>
              </div>
            </div>
          </div>
          <div className={sass.row}>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>Form validator</h3>
                <p>I created this form validator for projects at work, because I was finding myself having to re-invent the wheel every time I had to code a form.</p>
              </div>
            </div>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>Algorithms and data structures Course</h3>
                <p>I am currently doing a course called Javascript Algorithms and Data Structures on Udemy in order to further enhance my problem solving skills.</p>
              </div>
            </div>
          </div>
          <a href="https://github.com/JenPalacios" target="blank" rel="noopener noreferrer" className={sass.button}>View GitHub --></a>
        </div>
      </div>
    </div>
  </div>
)

export default PrivateProjectsSection