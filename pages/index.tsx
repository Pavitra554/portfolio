import type { NextPage } from 'next'

//Components
import Container from '../layouts/Container'
import Hero from '../components/Hero/Hero'
import TechStack from '../components/TechStack/TechStack'

//Framer motion
import {motion} from 'framer-motion'

const Home: NextPage = () => {
  return (
    <Container>
      <div className='w-screen flex flex-col ease-linear duration-150 text-5xl dark:text-white '>
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:0.2}}
        transition={{delay:0.2}}
        className='w-full h-full rounded-full bg-violet-600 opacity-20 blur-3xl absolute -top-96   right-0 z-10 flex'></motion.div>
        <Hero />
        {/* <TechStack/> */}
      </div>
    </Container>
  )
}

export default Home
