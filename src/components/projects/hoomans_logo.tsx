import React from 'react'
import Rive, { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import { Permanent_Marker } from '@next/font/google';

const permanent_Marker = Permanent_Marker({
    style: 'normal',
    weight: '400',
    subsets: ['latin']
})
export default function Hoomans_Logo() {
    const { rive, RiveComponent } = useRive({
        src: "rive/hoomans_logo.riv",
        autoplay: true,
        layout: new Layout({
            fit: Fit.Cover,
            alignment: Alignment.Center
        })
    });

    return (
        <div className='flex flex-col justify-between w-[250px] h-[500px] text-left'>
            <RiveComponent
                className='w-[250px] h-[250px]'
            />
            <p className={`text-lg font-bold text-white pt-2 ${permanent_Marker}`}>hoomans logo</p>
        </div>
    )
}
