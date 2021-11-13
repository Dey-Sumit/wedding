// @ts-nocheck

import Image from "next/image";
import blusky from "@public/blusky.jpg";
import dec from "@public/dec2021.jpg";
import sudo from "@public/sudo.jpg";
import SplashScreen from "@components/SplashScreen";
import Head from "next/head";
import { Fireworks } from "fireworks-js/dist/react";
import { FireworksOptions } from "fireworks-js";
import Confetti from "@components/Confetti";

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
        {/* // TODO : add title */}
        <title> </title>
      </Head>
      <SplashScreen />
      <div className="flex flex-col items-center justify-center bg-[#FE93D1]  ">
        <div className="w-[100vw] h-[79vh] sm:h-[100vh] relative ">
          <Image
            src={blusky}
            alt=""
            layout="fill"
            objectFit="contain"
            quality={100}
            className="shadow-lg"
            placeholder="blur"
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
            placeholder="blur"
          />
        </div>
        <div className="w-[100vw] h-[79vh] sm:h-[100vh] relative ">
          <Image
            src={dec}
            alt=""
            layout="fill"
            objectFit="contain"
            quality={100}
            className="shadow-lg"
            placeholder="blur"
          />
        </div>
      </div>

      <Fireworks options={options} style={style} />
      <Confetti />
    </>
  );
}
