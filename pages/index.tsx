import type { NextPage } from 'next'
import Hero from '../components/Hero/Hero'
import TechStack from '../components/TechStack/TechStack'

import Container from '../layouts/Container'

const Home: NextPage = () => {
  return (
    <Container>
      <div className='w-screen flex flex-col ease-linear duration-150 text-5xl dark:text-white '>
        <div className='w-full h-full rounded-full bg-violet-600 opacity-20 blur-3xl absolute -top-96   right-0 z-10 flex'></div>
        <Hero />
        {/* <TechStack/> */}
      </div>
    </Container>
  )
}

export default Home
