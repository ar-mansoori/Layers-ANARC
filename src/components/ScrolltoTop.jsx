import React, { useEffect } from "react";
import LandingPage from "./Webpages/LandingPage";
import { useLocation } from "react-router-dom";

const ScrolltoTop = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default ScrolltoTop;