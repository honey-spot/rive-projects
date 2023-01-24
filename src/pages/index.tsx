import Head from 'next/head'
import Image from 'next/image'
import { Permanent_Marker } from '@next/font/google'
import Projects from '@/components/projects'
import Rive from '@rive-app/react-canvas'
const permanent_Marker = Permanent_Marker({
  style: 'normal',
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Rive Projects</title>
        <meta name="description" content="Generated to show Rive Projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center text-center bg-dark min-h-screen">
        <div className='p-4 md:p-6 lg:p-8 xl:p-12 max-w-5xl'>
          <h1 className={`text-5xl text-white font-bold ${permanent_Marker.className}`}>
            Rive Projects!
          </h1>
          <div className='pt-20'>
            <Projects />
          </div>
        </div>
      </main>
    </>
  )
}
