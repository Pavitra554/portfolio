import React from "react";
import type { NextPage } from "next";

//Components
import Container from "../layouts/Container";
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation";
import Head from "next/head";

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
        <div className='h-screen flex justify-center items-center'>
          <div className='text-xl text-neutral-600'>
            Build Under Developement ⚠️
          </div>
        </div>
      </Container>
    );
  }
};

export default Home;
