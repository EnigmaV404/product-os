"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { navItems } from "@/lib/constants";

export function Navigation() {
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previous = 0;
    return scrollY.on("change", (latest) => {
      if (latest < 80) {
        setHidden(false);
      } else {
        setHidden(latest > previous);
      }
      previous = latest;
    });
  }, [scrollY]);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 origin-left bg-river"
        style={{ scaleX }}
      />
      <motion.nav
        animate={{ y: hidden ? -96 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.28 }}
        className="fixed inset-x-3 top-5 z-50 mx-auto w-[min(calc(100%-1.5rem),760px)] rounded-full border border-ink/10 bg-paper/85 px-2 py-2 shadow-soft backdrop-blur-xl"
      >
        <div className="flex items-center justify-between gap-1">
          {navItems.map((item) => (
            <a
              className="rounded-full px-2.5 py-2 text-[0.7rem] font-bold text-ink/70 transition hover:bg-white/70 hover:text-ink sm:px-3 sm:text-sm"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.nav>
    </>
  );
}
