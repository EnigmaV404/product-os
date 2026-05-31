"use client";

import { useState } from "react";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import { impactMetrics, profile } from "@/data/portfolio";
import { stagger, word } from "@/lib/animations";

type HeroProps = {
  data: typeof profile;
  metrics: typeof impactMetrics;
};

export function Hero({ data, metrics }: HeroProps) {
  const [portraitLoaded, setPortraitLoaded] = useState(true);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 140, damping: 26 });
  const smoothY = useSpring(pointerY, { stiffness: 140, damping: 26 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const imageX = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const words = data.headline.split(" ");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{duration: 1.2,}}
      className="section-shell relative flex min-h-screen items-center overflow-hidden pt-28"
      id="home"
    >
      <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(300px,0.4fr)_minmax(0,0.6fr)] xl:grid-cols-[minmax(380px,0.42fr)_minmax(0,0.58fr)]">
        <motion.div
          className="group relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[2rem] border border-ink/10 bg-ink shadow-soft"
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
  className="absolute inset-0 z-20 bg-paper"
  whileHover={{ opacity: 0 }}
  transition={{ duration: 0.8 }}
>
  Product OS Diagram
</motion.div>
          {portraitLoaded ? (
            <motion.img
              alt={data.name}
              className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-[70%]"
              onError={() => setPortraitLoaded(false)}
              src="/Vatsal.jpeg"
              style={{ x: imageX, y: imageY, scale: 1.06 }}
            />
          ) : (
            <motion.div
              className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_45%_25%,rgba(185,149,86,0.38),transparent_16rem),linear-gradient(145deg,#121417,#2f6672)]"
              style={{ x: imageX, y: imageY, scale: 1.06 }}
            >
              <div className="text-center text-paper">
                <p className="display text-8xl">VS</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-paper/58">
                  portrait.webp
                </p>
              </div>
            </motion.div>
          )}
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-ink/80 to-transparent p-6 text-paper">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper/70">
              {data.role}
            </p>
            <p className="display mt-1 text-3xl">{data.name}</p>
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl"
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/45 px-4 py-2 text-sm font-semibold text-ink/70 shadow-line"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={16} />
            Product OS
          </motion.div>
          <motion.h1
            className="display max-w-4xl text-balance text-5xl leading-[0.94] text-ink sm:text-7xl lg:text-[5.2rem] xl:text-[6.7rem]"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {words.map((item, index) => (
              <motion.span
                className="mr-[0.22em] inline-block"
                key={`${item}-${index}`}
                variants={word}
              >
                {item}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            {data.subheadline}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
          >
            <Button asChild>
              <a href="#brain">Explore Product OS</a>
            </Button>
            <Button asChild variant="outline">
              <a href={data.contact.resume}>
                <Download size={17} />
                Download Resume
              </a>
            </Button>
          </motion.div>
          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {metrics.slice(1, 4).map((metric) => (
              <div
                className="border-l border-ink/12 pl-4"
                key={metric.label}
              >
                <p className="display text-2xl text-ink">{metric.value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-ink/52">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <a
        aria-label="Scroll to Product Brain"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-ink/15 p-3 text-ink/60 transition hover:text-ink md:block"
        href="#brain"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          className="block"
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </a>
    </motion.section>
  );
}
