import React from 'react'
import Rive, { Alignment, Fit, Layout, useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { Permanent_Marker } from '@next/font/google';

const permanent_Marker = Permanent_Marker({
    style: 'normal',
    weight: '400',
    subsets: ['latin']
})
export default function Rating_Animation() {
    const { rive, RiveComponent } = useRive({
        src: "rive/rating_animation.riv",
        autoplay: true,
        stateMachines: "State Machine 1",
        layout: new Layout({
            fit: Fit.Cover,
            alignment: Alignment.Center
        })
    });

    const switchInput = useStateMachineInput(rive, "State Machine 1", "rating");
    return (
        <div className='flex flex-col justify-between md:w-full h-[500px] text-left'>
            <RiveComponent
                onClick={() => switchInput && switchInput.fire()}
                className="md:w-[500px] h-[500px]"
            />
            <p className={`text-lg font-bold text-white pt-2 ${permanent_Marker}`}>rating ball</p>
        </div>
    )
}
