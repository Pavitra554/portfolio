import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

//Components
import Container from "../layouts/Container";
import Navigation from "../components/Navigations/Navigation";
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation";

const Home: NextPage = () => {
  const [showAnimation, setShowAnimation] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 2500);
  }, []);

  if (showAnimation) {
    return (
      <div className={``}>
        <Head>
          <title>Pavitra⚡</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <LoadingAnimation />
      </div>
    );
  } else {
    return (
      <Container>
        <div className='min-h-screen h-full max-w-screen-md mx-6 md:mx-auto flex flex-col flex-grow '>
          <Navigation/>
          <div className='h-screen flex justify-center items-center'>
            <div className='text-xl text-neutral-600'>
              Build Under Developement ⚠️
            </div>
          </div>
          
        </div>
      </Container>
    );
  }
};

export default Home;
