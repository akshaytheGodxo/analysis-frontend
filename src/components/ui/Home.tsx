import React from "react";
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from "@/redux/store";
import Navbar from "./Navbar";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";
import {motion} from 'framer-motion'
import { HeroHighlight, Highlight } from "./hero-highlight";
import { WobbleCard } from "./wobble-card";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid } from "./bento-grid";
import Footer from "./Footer";
export function HomePage({className} : React.HTMLAttributes<HTMLElement>) {
  
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useAppDispatch();
  
  return (
    <div className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <Navbar />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-foreground tracking-tight text-neutral-900 dark:text-stone-100">
              Documents & diagrams for the
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-b from-neutral-900 via-zinc-900 to-stone-400 dark:from-neutral-50 dark:via-stone-400 dark:to-zinc-950 text-transparent bg-clip-text">
                Future with AI
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={"/linear.webp"}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className={`text-2xl px-4 md:text-4xl lg:text-5xl font-bold ${isDarkMode ? "text-white-700" : "text-black"} max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto`}
        >
          With VisionPro, nothing&apos;s real. Everything is far away. Everything 
          is a {" "}
          <Highlight className="text-black dark:text-white">
            copy, of a copy, of a copy.
          </Highlight>
        </motion.h1>
      </HeroHighlight>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
    <BentoGrid />
    

    <Footer />
    </div>
  );
}
