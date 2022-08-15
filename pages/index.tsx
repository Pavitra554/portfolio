import type { NextPage } from 'next'

import Container from '../layouts/Container'

const Home: NextPage = () => {
  return (
    <Container>
      <div className='w-full h-screen bg-blue-200 dark:bg-blue-600 ease-linear duration-150'>Home</div>
    </Container>
  )
}

export default Home
