import React from 'react'
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import SectionSix from './components/SectionSix';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='scroll-smooth bg-[#F6F7F9]'>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <Footer/>
    </div>

  )
}

export default App
