"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Moments() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10">
      <div className="mb-12 md:mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
          My <span className="heading-aurora">Moments</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl font-sans mx-auto md:mx-0">
          Những khoảnh khắc định hình nên con người tôi.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)] border border-white/10 bg-black/20"
      >
        <Image 
          src="/images/img-2.jpg" 
          alt="My Moments Collage" 
          width={1920}
          height={1080}
          className="w-full h-auto"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A15]/60 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
}
