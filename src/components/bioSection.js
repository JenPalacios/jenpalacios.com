import React from "react"

// styles
import sass from '../styles/index.module.sass'

//images
import robot from '../images/robot.svg'

const BioSection = () => (
  <div className={sass.bioBackground}>
    <div className={sass.bioInnerContainer}>
      <div className={sass.textContainer}>
        <div className={sass.icon}>
            <img src={robot} role="presentation" alt="robot"/>
        </div>
        <div className={sass.headline}>
          <h1>Bio</h1>
        </div>
        <div className={sass.row}>
          <div className={sass.column}>
            <p>I am a German-Guatemalan developer, who is passionate about programming and doing it through clean code. Besides developing stuff, I love spending time with my wife, travelling and anything that is tech related. I enjoy to drink coffee and rum (not necessarily together), especially if they are Guatemalan. I have a soft spot for anything related to super heroes, Legos or T-rexes. <br/>#geek<span aria-label="Smiley with Glasses" role="img">🤓</span></p>
          </div>
          <div className={sass.column}>
            <p>I feel fortunate and grateful to say that I have finally found a career and community that I'm super stoked to be a part of. I love what I do and hope to be able to keep on learning and growing as a professional developer.</p>
            <p>If you are interested in my professional journey, feel free to check out my CV.</p>
          </div>
        </div>
        <a href="https://www.linkedin.com/in/palaciosjennifer/" target="blank" className={sass.button}>View CV --></a>
      </div>
    </div>
  </div>
)

export default BioSection