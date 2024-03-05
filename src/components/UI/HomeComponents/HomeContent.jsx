import classes from "./HomeContent.module.css";

import { useRef } from "react";

import Navigation from "../Others/Navigation";
import HomeHeader from "./HomeHeader";

function HomeContent() {
  const headerRef = useRef();
  const aboutRef = useRef();
  const featuresRef = useRef();
  const getStartedRef = useRef();

  const scrollMethods = {
    scrollToHeader() {
      headerRef.current.scrollTo({
        behavior: "smooth",
      });
    },
    scrollToAbout() {
      aboutRef.current.scrollTo({
        behavior: "smooth",
      });
    },
    scrollToFeatures() {
      featuresRef.current.scrollTo({
        behavior: "smooth",
      });
    },
    scrollToGetStarted() {
      getStartedRef.current.scrollTo({
        behavior: "smooth",
      });
    },
  };

  return (
    <>
      <Navigation scrollMethods={scrollMethods} />
      <HomeHeader ref={headerRef} />
    </>
  );
}

export default HomeContent;
