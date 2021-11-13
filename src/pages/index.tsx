// @ts-nocheck

import Image from "next/image";
import blusky from "@public/bluskyC.jpg";
import dec from "@public/dec2021C.jpg";
import sudo from "@public/sudoC.jpg";
import Reception from "@public/Reception.jpg";
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

  const openLink = () => {
    window.open("http://vivekanandganesanwithsudarshanababu.weblive.maaevents9.com", "_blank");
  };

  return (
    <>
      <Head>
        <title>vivek-weds-sudarshana</title>
        <meta property="og:url" content=" url" />
        <meta property="keywords" content="Wedding website of vivek and sudarshana" />
        <meta property="og:title" content="Vivek and Sudarshana is getting married! Congratulate them!" />
        {/* <meta name="twitter:card" content="summary" /> */}
        <meta property="og:description" content="" />
        {/* <meta
          property="og:image"
          content="https://www.vivek-weds-sudarshana.space/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FsudoC.93854bce.jpg&w=1080&q=100"
        /> */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image"
          content="https://opengraph.githubassets.com/4b88ca5445a73ff054793796de0ce80ac798428192b0574ab5c5917fd1f33adf/RohitDhatrak/Bookscape"
        ></meta>
      </Head>

      <SplashScreen />
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center w-full p-3 py-6 space-y-4  text-[#5c3182] text-xl font-medium font-serif">
          <p>Click here to watch the Wedding Live!</p>
          <button
            className="uppercase tracking-wider px-4 py-2 rounded-sm bg-[#5c3182] shadow-2xl  cursor-pointer sticky z-20  text-white"
            onClick={openLink}
          >
            Watch now
          </button>
        </div>
        <div className="w-[100vw] h-[72vh] sm:h-[100vh] sm:mb-5 relative ">
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
        <div className="w-[100vw] h-[72vh] sm:h-[100vh] sm:mb-5 relative nextImage">
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
        <div className="w-[100vw] h-[72vh] sm:h-[120vh] sm:mb-5 relative nextImage">
          <Image
            src={Reception}
            alt=""
            layout="fill"
            objectFit="contain"
            quality={100}
            className="shadow-lg"
            priority
            loading="eager"
          />
        </div>
        <div className="w-[100vw] h-[72vh] sm:h-[100vh]  relative ">
          <Image src={dec} alt="" layout="fill" objectFit="contain" quality={100} className="shadow-lg" />
        </div>
      </div>

      <Fireworks options={options} style={style} />
      <Confetti />
      {/* <ConfettiSide /> */}
    </>
  );
}
