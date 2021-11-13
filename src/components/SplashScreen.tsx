import { useMediaQuery } from "@react-hook/media-query";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const SplashScreen = () => {
  const smallScreen = useMediaQuery("only screen and (min-width: 748px)");

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <motion.div
        className="fixed z-10 w-full h-screen"
        initial={{
          y: 0,
        }}
        animate={{
          y: "-170%",
          transition: {
            duration: 1.6,
          },
        }}
      >
        {/* {!smallScreen && (
        <svg viewBox="0 0 360 675" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M360 675C240 600 120 600 0 675V0H360V675Z" fill="white" />
        </svg>
      )} */}

        <svg viewBox={smallScreen ? "0 0 1248 941" : "0 0 360 675"} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d={
              smallScreen
                ? "M1248 941C832 836.444 416 836.444 0 941V0H1248V941Z"
                : "M360 675C240 600 120 600 0 675V0H360V675Z"
            }
            fill="white"
          />
        </svg>

        {/* {smallScreen && (
          <svg viewBox="0 0 1248 941" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1248 941C832 836.444 416 836.444 0 941V0H1248V941Z" fill="white" />
          </svg>
        )} */}
      </motion.div>
    )
  );
};

export default SplashScreen;
