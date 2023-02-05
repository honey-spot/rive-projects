import React from 'react'
import Bouncing_Ball from './bouncing_ball'
import Hamburger from './hamburger'
import Hoomans_Logo from './hoomans_logo'
import KunaionTargetRatings from './kunai_on_target_ratings'
import Rating_Animation from './rating_animation'

export default function Projects() {
  return (
    <div className='flex flex-row gap-10 lg:gap-y-20 gap-y-20 justify-center flex-wrap'>
      <Bouncing_Ball />
      <Hamburger />
      <Hoomans_Logo />
      <Rating_Animation />
      <KunaionTargetRatings />
    </div>
  )
}
