import React from 'react'
import Featured from '../components/Featured'
import Landing from '../components/Landing'
import Highlights from '../components/Highlights'
import Discounted from '../components/Discounted'
import Explore from '../components/Explore'

export default function Home() {
  return (
    <>
    <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      </>
  )
}
