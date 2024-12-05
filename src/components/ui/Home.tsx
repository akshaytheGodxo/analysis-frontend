import React from "react";
import { RootState, useAppDispatch } from "@/redux/store";
import Navbar from "./Navbar";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./hero-highlight";
import { WobbleCard } from "./wobble-card";
import { FeaturesSectionDemo } from "./bento-grid2";
import {
  IconFaceId,
  IconHandTwoFingers,
  IconEye,
  IconFile,
} from "@tabler/icons-react";
import { BentoGrid } from "./bento-grid";
import Footer from "./Footer";
import { AnimatedTestimonials } from "./animated-testimonials";

const testimonials = [
  {
    quote: "This platform has revolutionized the way we interpret human emotions.",
    name: "Akshay Chauhan",
    designation: "Product Designer",
    src: "/akshay.jpg",
  },
  {
    quote: "The gesture and emotion detection features are incredibly accurate!",
    name: "Manish Pratap Singh",
    designation: "Frontend Engineer",
    src: "/manish.jpg",
  },
  {
    quote: "An innovative tool for applications in healthcare and interactive systems.",
    name: "Akshansh Patel",
    designation: "AI Researcher",
    src: "/akshansh.jpg",
  },
  {
    quote: "From education to gaming, the possibilities with this tech are endless.",
    name: "Manish Kumar",
    designation: "Tech Enthusiast",
    src: "/mehlawat.jpg",
  },
  {
    quote: "This platform opens up new frontiers in human-computer interaction.",
    name: "Adya Sharma",
    designation: "AI Specialist",
    src: "/adya.jpg",
  },
  {
    quote: "The gesture recognition is spot on and integrates seamlessly with my apps.",
    name: "Saniya Katiyar",
    designation: "App Developer",
    src: "/saniya.jpg",
  },
];

export function HomePage({ className }: React.HTMLAttributes<HTMLElement>) {
  const dispatch = useAppDispatch();
  const isDarkMode = true;
  return (
    <div className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <Navbar />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-foreground tracking-tight text-neutral-900 dark:text-stone-100">
              Unlock Insights from
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-b from-neutral-900 via-zinc-900 to-stone-400 dark:from-neutral-50 dark:via-stone-400 dark:to-zinc-950 text-transparent bg-clip-text">
                Faces & Hands
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={"/model-image.png"}
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
          <Highlight className="text-black dark:text-white">
            Your Gateway to Real-Time Human Interaction Analysis.
          </Highlight>
        </motion.h1>

        <AnimatedTestimonials testimonials={testimonials} />
      </HeroHighlight>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Harness the Power of AI for Gesture Recognition
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Detect emotions, track gestures, and unlock new possibilities in
              communication and interaction.
            </p>
          </div>
          <Image
            src="/ai-detection.webp"
            width={500}
            height={500}
            alt="AI detection demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Real-Time Emotion Analysis
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Identify emotional cues with precision for enhanced user experience.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Join the Future of Human-Centric AI
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Our platform empowers developers to integrate advanced gesture and
              emotion recognition into their applications seamlessly.
            </p>
          </div>
          <Image
            src="/future-ai.webp"
            width={500}
            height={500}
            alt="future AI demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
      <BentoGrid />

      <FeaturesSectionDemo />

      <Footer />
    </div>
  );
}
