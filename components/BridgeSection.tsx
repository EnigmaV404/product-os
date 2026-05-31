"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { bridgeData } from "@/data/bridge";
import { profile } from "@/data/portfolio";

export function BridgeSection() {
  const ref = useRef(null);

  const { bridges } = bridgeData;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  /* ------------------------------ */
  /* BRIDGE ANIMATION               */
  /* ------------------------------ */

  const lineProgress = useTransform(
    scrollYProgress,
    [0.15, 0.55],
    [0, 1]
  );

  const solvedColor = useTransform(
    scrollYProgress,
    [0.45, 0.65],
    ["#111827", "#16a34a"]
  );

  const graphOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.60, 0.65],
    [1, 0, 0]
  );

  const graphZIndex = useTransform(
    scrollYProgress,
    [0.65, 0.66],
    [10, -10]
  );

  const graphScale = useTransform(
    scrollYProgress,
    [0.7, 0.9],
    [1, 0.85]
  );

  /* ------------------------------ */
  /* HERO REVEAL                    */
  /* ------------------------------ */

  const heroOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.75, 1],
    [0, 1, 1]
  );

  const heroTextX = useTransform(
    scrollYProgress,
    [0.55, 0.75, 1],
    [-250, 0, 0]
  );

  const heroImageX = useTransform(
    scrollYProgress,
    [0.55, 0.75, 1],
    [250, 0, 0]
  );

  return (
    <section
      ref={ref}
      className="relative h-[300svh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#f7f3ea] pt-28">

        {/* ================================================= */}
        {/* BRIDGE LAYER                                      */}
        {/* ================================================= */}

        <motion.div
          style={{
            opacity: graphOpacity,
            scale: graphScale,
          }}
          className="absolute inset-0"
        >
          <div className="mx-auto flex h-full max-w-7xl items-center justify-between">

            {/* BUSINESS */}

            <div className="w-[35%]">
              <p className="mb-16 text-xs uppercase tracking-[0.45em] text-slate-400">
                Business Reality
              </p>

              <div className="space-y-24">
                {bridges.map((bridge) => (
                  <motion.div
                    key={bridge.business.join("")}
                    style={{
                      color: solvedColor,
                    }}
                  >
                    <h3 className="text-5xl font-semibold leading-[0.9] tracking-tight lg:text-6xl">
                      {bridge.business[0]}
                      <br />
                      {bridge.business[1]}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CENTER LINE */}

            <div className="relative flex h-full flex-1 items-center justify-center">

              <div className="absolute w-full max-w-xl">

                <div className="relative h-[3px] bg-slate-300">

                  <motion.div
                    style={{
                      scaleX: lineProgress,
                      transformOrigin: "left",
                    }}
                    className="absolute inset-0 bg-green-500"
                  />

                </div>

              </div>

            </div>

            {/* ENGINEERING */}

            <div className="w-[35%] text-right">
              <p className="mb-16 text-xs uppercase tracking-[0.45em] text-slate-400">
                Engineering Reality
              </p>

              <div className="space-y-24">
                {bridges.map((bridge) => (
                  <div
                    key={bridge.engineering.join("")}
                  >
                    <h3 className="text-5xl font-semibold leading-[0.9] tracking-tight text-slate-900 lg:text-6xl">
                      {bridge.engineering[0]}
                      <br />
                      {bridge.engineering[1]}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* ================================================= */}
        {/* HERO REVEAL LAYER                                */}
        {/* ================================================= */}

        <motion.div
          style={{
            opacity: heroOpacity,
          }}
          className="absolute inset-0 z-20 flex items-center bg-[#f7f3ea]"
        >
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-10 lg:grid-cols-[0.6fr_0.4fr] lg:px-24">

            {/* LEFT CONTENT */}

            <motion.div
              style={{
                x: heroTextX,
              }}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {profile.role}
              </p>

              <h1 className="max-w-4xl text-5xl font-bold leading-[0.94] text-slate-900 sm:text-7xl lg:text-[5.2rem] xl:text-[6rem]">
                {profile.headline}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                {profile.subheadline}
              </p>

              <div className="mt-10 flex flex-wrap gap-8">

                <div>
                  <div className="text-3xl font-bold text-slate-900">
                    $20M+
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Payment Volume
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-bold text-slate-900">
                    1000+
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Plans Onboarded
                  </div>
                </div>

                <div>
                  <div className="text-3xl font-bold text-slate-900">
                    25+
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Partner Programs
                  </div>
                </div>

              </div>
            </motion.div>

            {/* RIGHT IMAGE */}

            <motion.div
              style={{
                x: heroImageX,
              }}
              className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[2rem] border border-black/10 bg-black shadow-2xl"
            >
              <Image
                src="/Vatsal.jpeg"
                alt={profile.name}
                fill
                priority
                className="object-cover"
              />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}