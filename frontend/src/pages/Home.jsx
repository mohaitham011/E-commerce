// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSellet from '../components/BestSellet'
import OurPolicy from '../components/OurPolicy'
import NewLetterBox from '../components/NewLetterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSellet/>
      <OurPolicy/>
      <NewLetterBox/>
    </div>
  )
}

export default Home
