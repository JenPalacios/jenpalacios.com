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
            <p>Currently, I work as a front end developer at <a href="https://www.vodafone.de" target="_blank">Vodafone</a> . My team and I are reponsible for maintaining the online shop and building new features into it. It feels great to deliver quality experiences to our users online.
            </p>
            <p>Before Vodafone, I used to work in a media agency, where I was able to do different kinds of projects. Some of them are: </p>
          </div>
          <div className={sass.row}>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>Chrome Extension</h3>
                <p>Create a Chrome extension to make internal calls. This allowed an employee to click on a number and their telephone number would start dialing.</p>
              </div>
            </div>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>Website Relaunch</h3>
                <p>I was part of a team of developers that worked on the relaunch of <a href="https://www.parasol-island.com/" target="_blank">Parasol Island's website</a>. Some of my contributions: page transitions, animations and the <a href="https://www.parasol-island.com/studio/#jobs" target="_blank">jobs listings page</a>.</p>
              </div>
            </div>
          </div>
          <div className={sass.row}>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>Online Contests</h3>
                <p>I have coded multiple online contests (Gewinnspiele). These projects have required registration forms, DOI’s, logic for winning and data management.</p>
              </div>
            </div>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>MJML Templates</h3>
                <p>Create mjml templates so project managers can create newsletters easily.</p>
              </div>
            </div>
          </div>
          <div className={sass.row}>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>Custom Instagram Selector</h3>
                <p>I built a custom backend to allow clients or project managers to select the Instagram pictures that could be shown on the frontend of applications.</p>
              </div>
            </div>
            <div className={sass.column}>
              <div className={sass.project}>
                <h3>Devkit for Recurring Projects</h3>
                <p>I created a repository where developers, myself included, could pull code-snippets to facilitate the process of coding new projects from recurring clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProfessionalProjectsSection