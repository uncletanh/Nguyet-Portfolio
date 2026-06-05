"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Aurora Optimized */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-br from-[#050A15] via-[#050A15] to-[#0a1526]">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#10B981] via-[#10B981]/20 to-transparent" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3B82F6] via-[#3B82F6]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#10B981] font-sans tracking-[0.2em] text-sm uppercase font-semibold mb-4 block">
              Digital Marketer & Content Creator
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
              Minh Nguyet <br/>
              <span className="heading-aurora">Luong</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Giao thoa giữa tư duy nghiên cứu học thuật và sức sáng tạo thực chiến của thế hệ Gen Z.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <button className="btn-premium flex items-center justify-center gap-2 group">
                Khám phá dự án 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-ghost flex items-center justify-center gap-2">
                <Download size={20} /> Tải CV (IELTS 7.5+)
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full aspect-[4/5] relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.15)]"
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-transparent to-transparent z-10 opacity-60" />
            
            <Image 
              src="/images/img-1.jpg" 
              alt="Minh Nguyet Portrait" 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
