import React from "react"

// styles
import sass from '../styles/index.module.sass'

//images
import devices from '../images/devices.svg'

const ProfessionalProjectsSection = () => (
  <div className={sass.projectsBackground}>
    <div className={sass.projectsInnerContainer}>
      <div className={sass.textContainer}>
        <div className={sass.icon}>
          <img src={devices} role="presentation" alt="devices"/>
        </div>
        <div className={sass.headline}>
          <h1>Projects</h1>
          <p>--> of the professional kind</p>
        </div>
        <div>
          <div className={sass.justify}>
            <p>Currently, I work as an app frontend developer at <a href="https://grid.app/" target="_blank" rel="noopener noreferrer">GRID</a>. My team and I are reponsible for maintaining the iOS and Android apps and building new features into it. 
            </p>
            <p>Before GRID, I used to work as a frontend developer at <a href="https://vodafone.de/" target="_blank" rel="noopener noreferrer">Vodafone</a>, the biggest telecommunications company in Europe, where my team and I were in charge of maintaining and developing new features for the online shop.</p>  
            <p>Before Vodafone, I used to work at a media agency called <a href="https://parasol-island.com/" target="_blank" rel="noopener noreferrer">Parasol Island</a>, where I was able to do different kinds of projects.</p>
            <p>Some of the projects I have been a part of during my professional journey as a developer are:</p>
          </div>
          <div className={sass.row}>
          <div className={sass.column}>
              <div className={sass.project}>
                <h3>Deconstruct a monolithic architecture</h3>
                <p className={sass.label}>@ Vodafone</p>
                <p>I was part of the core team that drove an initiative to reduce complexity of the monolithic architecture at Vodafone by migrating to a microfrontend architecture. Our first microfrontent launch reduced pagespeed by 41% and increased conversion rate by 10%.</p>
              </div>
            </div>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>Drive project to implement code reviews</h3>
                <p className={sass.label}>@ Vodafone</p>
                <p>In an effort to increase code quality at Vodafone, I drove an initiative which resulted in every team implementing a proper code review process before merging code. This process aimed to provide an environment where developers felt comfortable in providing and receiving constructing feedback regarding their work.</p>
              </div>
            </div>
          </div>
          <div className={sass.row}>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>Start event called Drink.pop()</h3>
                <p className={sass.label}>@ Vodafone</p>
                <p>In an effort to increase knowledge among developers, I started an event called Drink.pop(). This event would take place in the afternoon and developers were invited to grab a drink and listen to each other's experiences. In this event developers had the floor to share their learnings, most loved tools, and general concepts with others.</p>
              </div>
            </div>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>Develop Online Contests</h3>
                <p className={sass.label}>@ Parasol Island (media agency)</p>
                <p>Coded both the front and backend of multiple online contests (Gewinnspiele in German) for clients. These projects required correct processing of registration forms, data management and logic for randomly winning prizes.</p>
              </div>
            </div>
          </div>
          <div className={sass.row}>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>Develop Chrome Extension</h3>
                <p className={sass.label}>@ Parasol Island (media agency)</p>
                <p>I created a Chrome extension for employees to make internal calls. This allowed an employee to click on a number and their physical telephone would start dialing their colleagues phone number.</p>
              </div>
            </div>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>Develop Custom Instagram Selector</h3>
                <p className={sass.label}>@ Parasol Island (media agency)</p>
                <p>I built a custom backend for a wordpress site to allow clients or project managers to select the Instagram pictures that could be shown on the frontend of their websites.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProfessionalProjectsSection