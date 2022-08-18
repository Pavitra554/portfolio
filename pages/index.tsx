import type { NextPage } from 'next'

import Container from '../layouts/Container'

const Home: NextPage = () => {
  return (
    <Container>
      <div className='w-full h-screen dark:bg-neutral-900 bg-blue-600 ease-linear duration-150'>Home</div>
    </Container>
  )
}

export default Home
