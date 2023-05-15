import Image from 'next/image'
import Navbar from './Components/Navbar'
import IntroSection from './Components/IntroSection'
import TechWorkedWith from './Components/TechWorkedWith'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="z-10 w-full max-w-6xl items-center justify-between font-mono ">
          <Navbar/>
          <IntroSection/>
          <TechWorkedWith/>
      </div>
    </main>
  )
}
