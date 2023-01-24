import React from 'react'
import Rive, { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import { Permanent_Marker } from '@next/font/google';

const permanent_Marker = Permanent_Marker({
    style: 'normal',
    weight: '400',
    subsets: ['latin']
  })
export default function Bouncing_Ball() {
    const { rive, RiveComponent } = useRive({
        src: "rive/cricket_ball_bouncing_and_rotating.riv",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Cover,
            alignment: Alignment.Center
        })
    });

    return (
        <div className='w-[250px] h-[500px] text-left'>
            <RiveComponent  />
            <p className={`text-lg font-bold text-white pt-2 ${permanent_Marker}` }>Cricket Ball Bouncing and Rotating</p>
        </div>
    )
}
