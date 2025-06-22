import DesktopNavbar from '@/components/DesktopNavbar'

import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Header'
import React from 'react'
import WhatAreWeSection from '@/components/WhatWeAre'
import HowItWorks from '@/components/HowItWorks'

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <DesktopNavbar></DesktopNavbar>
      <div className='lg:pt-20 pt-22'>
        <HeroSection></HeroSection>
      </div>
      <section id='what-are-we'>
        <WhatAreWeSection></WhatAreWeSection>
      </section>

      <section className='mb-20'>


        <HowItWorks></HowItWorks>








      </section>

    </div>
  )
}

export default page
