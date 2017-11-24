import React from "react"

// styles
import sass from '../styles/index.module.sass'

// images
import jenPalacios from '../images/jenPalacios2.png'
import github from '../images/github.svg'
import linkedIn from '../images/linkedin.svg'
import instagram from '../images/instagram.svg'

//components
import IntroText from './introText'

const IntroSection = () => (
  <div className={sass.indexBackground}>
    <div className={sass.introInnerContainer}>
      <div className={sass.introTextContainer}>
        <img src={jenPalacios} alt="Jen Palacios" className={sass.mainImg} role="presentation"/>
        <IntroText />
        <div className={sass.socialContainer}>
          <div className={sass.social}>
            <a title="Github" href="https://github.com/JenPalacios" target="_blank" alt="Github">
              <img src={github}/>
            </a>
          </div>
          <div className={sass.social}>
            <a title="LinkedIn" href="https://www.linkedin.com/in/palaciosjennifer/" target="_blank" alt="LinkedIn">
              <img className={sass.socialIcon} src={linkedIn}/>
            </a>
          </div>
          <div className={sass.social}>
            <a title="Instagram" href="https://www.instagram.com/jencios/" target="_blank" alt="Instagram">
              <img className={sass.instagram} src={instagram}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default IntroSection