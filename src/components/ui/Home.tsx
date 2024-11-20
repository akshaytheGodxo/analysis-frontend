import React from "react";
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from "@/redux/store";
import Navbar from "./Navbar";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";
import {motion} from 'framer-motion'
import { HeroHighlight, Highlight } from "./hero-highlight";

export function HomePage({className} : React.HTMLAttributes<HTMLElement>) {
  
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useAppDispatch();
  
  return (
    <div className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <Navbar />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className={`text-4xl font-semibold ${isDarkMode ? "text-white" : "text-black"}`}>
              Unleash the power of <br/> 
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                AI  Models
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
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
    </div>
  );
}
