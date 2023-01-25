import React from 'react'
import Rive, { Alignment, Fit, Layout, useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { Permanent_Marker } from '@next/font/google';

const permanent_Marker = Permanent_Marker({
    style: 'normal',
    weight: '400',
    subsets: ['latin']
})

export default function Hamburger() {
    const { rive, RiveComponent } = useRive({
        src: "rive/hamburger.riv",
        autoplay: true,
        stateMachines: "switchy",
        layout: new Layout({
            fit: Fit.Cover,
            alignment: Alignment.Center
        })
    });

    const switchInput = useStateMachineInput(rive, "switchy", "switch");
    return (
        <div className='flex flex-col justify-between w-[250px] h-[500px] text-left'>
            <RiveComponent
                onClick={() => switchInput && switchInput.fire()}
                className="w-[250px] h-[250px]"
            />
            <p className={`text-lg font-bold text-white pt-2 ${permanent_Marker}`}>hamburger to x (click on the hamburger)</p>
        </div>
    )
}
