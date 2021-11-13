// @ts-nocheck

import Image from "next/image";
import blusky from "@public/bluskyC.jpg";
import dec from "@public/dec2021C.jpg";
import sudo from "@public/sudoC.jpg";
// import blusky from "@public/blusky.jpg";
// import dec from "@public/dec2021.jpg";
// import sudo from "@public/sudo.jpg";
import SplashScreen from "@components/SplashScreen";
import Head from "next/head";
import { Fireworks } from "fireworks-js/dist/react";
import { FireworksOptions } from "fireworks-js";
import Confetti from "@components/Confetti";
import ConfettiSide from "@components/ConfettieSide";

export default function Home() {
  const options: FireworksOptions = {
    speed: 3,
    sound: {
      enabled: true,
      files: ["explosion0.mp3", "explosion1.mp3", "explosion2.mp3"],
      volume: {
        min: 1,
        max: 40,
      },
    },
    delay: {
      min: 41,
      max: 76,
    },
  };

  const style = {
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "transparent",
  };
  return (
    <>
      <Head>
        <title>vivek-weds-sudarshana</title>
        <meta property="og:url" content=" url" />
        <meta property="og:type" content="wedding website of vivek and sudarshana" />
        <meta property="og:title" content="Social Media Preview Working?" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:description" content="Hurray!! Yes Social Media Preview is Working" />
        <meta property="og:image" content={"https://jsonplaceholder.typicode.com/photos/1"} />
      </Head>

      <SplashScreen />
      <div className="flex flex-col items-center justify-center ">
        <div className="w-[100vw] h-[79vh] sm:h-[100vh] relative ">
          <Image
            src={blusky}
            alt=""
            layout="fill"
            objectFit="contain"
            quality={100}
            className="shadow-lg"
            priority={true}
            loading="eager"
          />
        </div>
        <div className="w-[100vw] h-[79vh] sm:h-[100vh] relative nextImage">
          <Image
            src={sudo}
            alt=""
            layout="fill"
            objectFit="contain"
            quality={100}
            className="shadow-lg"
            priority
            loading="eager"
          />
        </div>
        <div className="w-[100vw] h-[79vh] sm:h-[100vh] relative ">
          <Image src={dec} alt="" layout="fill" objectFit="contain" quality={100} className="shadow-lg" />
        </div>
      </div>

      <Fireworks options={options} style={style} />
      <Confetti />
      {/* <ConfettiSide /> */}
    </>
  );
}
