import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

//Components
import Container from "../layouts/Container";
import Navigation from "../components/Navigations/Navigation";
import LoadingAnimation from "../components/LoadingAnimation/LoadingAnimation";
import MainScreens from "../components/MainScreens/MainScreens";

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
        <title>Pavitra</title>
        <link rel='icon' href='/favicon.ico' />
        {/* <meta name="description" content="Pavitra's portfolio showcasing his development skills and projects."></meta> */}
        <meta name="author" content="Pavitra Behara"></meta>
        <meta name="keywords" content="Pavitra,pavitra554,pavitra.ts,Development,Android Development,Web Development, portfolio,TailwindCSS,React.js,react,github, Next.js,Redux,Framer Motion, projects, skills"></meta>
        </Head>
        <LoadingAnimation />
      </div>
    );
  } else {
    return (
      <Container>
        <div className='min-h-screen h-full max-w-screen-md mx-4 md:mx-auto flex flex-col flex-grow '>
          <Navigation/>
          <MainScreens/>
        </div>
      </Container>
    );
  }
};

export default Home;
