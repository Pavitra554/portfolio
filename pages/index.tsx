import type { NextPage } from 'next'

//Components
import Container from '../layouts/Container'

const Home: NextPage = () => {
  return (
    <Container>
      <div className='h-screen flex justify-center items-center'>
        <div className='text-xl text-neutral-600'>Build Under Developement ⚠️</div>
      </div>
    </Container>
  )
}

export default Home
