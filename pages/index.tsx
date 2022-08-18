import type { NextPage } from 'next'

import Container from '../layouts/Container'

const Home: NextPage = () => {
  return (
    <Container>
      <div className='w-full h-screen dark:bg-neutral-900 bg-white flex justify-center items-center ease-linear duration-150 text-5xl dark:text-white'>Home</div>
    </Container>
  )
}

export default Home
