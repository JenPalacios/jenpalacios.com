import React from 'react'

import IntroSection from '../components/introSection'
import BioSection from '../components/bioSection'
import ProfessionalProjectsSection from '../components/professionalProjectsSection'
import PrivateProjectsSection from '../components/privateProjectsSection'
import Footer from '../components/footer'

const IndexPage = () => {
  return (
    <div>
      <IntroSection />
      <BioSection />
      <ProfessionalProjectsSection />
      <PrivateProjectsSection />
      <Footer/>
    </div>
  )
}

export default IndexPage
