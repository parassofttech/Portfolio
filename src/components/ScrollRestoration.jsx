import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const scrollPositions = {};

const ScrollRestoration = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  // Save scroll position before leaving the page
  useEffect(() => {
    return () => {
      scrollPositions[location.pathname] = window.scrollY;
    };
  }, [location]);

  // Restore or scroll to top
  useEffect(() => {
    if (
      navigationType === "POP" &&
      scrollPositions[location.pathname] !== undefined
    ) {
      window.scrollTo({
        top: scrollPositions[location.pathname],
        behavior: "auto",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname, navigationType]);

  return null;
};

export default ScrollRestoration;