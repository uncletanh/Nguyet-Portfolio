"use client";

import { motion } from "framer-motion";
import { GraduationCap, Brain, Palette, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10">
      <div className="mb-16 md:mb-24">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
          Tư Duy & <span className="heading-aurora">Góc Nhìn</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl font-sans">
          Mỗi quyết định marketing đều bắt nguồn từ việc thấu hiểu con người.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[300px]">
        {/* Box 1: Học vấn */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-box p-8 md:col-span-1 md:row-span-1 flex flex-col justify-between group"
        >
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#10B981] mb-6 group-hover:scale-110 transition-transform">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3">Học Vấn</h3>
            <p className="text-slate-400 font-sans text-sm leading-relaxed">
              Sinh viên ngành Quản trị Kinh doanh – Viện Kinh tế và Quản lý (SEM), Trường Đại học Bách Khoa Hà Nội.
            </p>
          </div>
        </motion.div>

        {/* Box 2: Ảnh Collage */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bento-box md:col-span-2 md:row-span-2 relative group p-0"
        >
          <Image 
            src="/images/img-2.jpg" 
            alt="My Moments" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-3xl font-serif font-bold text-white mb-2">My Moments</h3>
            <p className="text-slate-300 font-sans text-sm">Những khoảnh khắc định hình nên con người tôi.</p>
          </div>
        </motion.div>

        {/* Box 3: Tư duy cốt lõi */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bento-box p-8 md:col-span-1 md:row-span-1 flex flex-col justify-between group"
        >
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform">
            <Brain size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3">Tư Duy</h3>
            <p className="text-slate-400 font-sans text-sm leading-relaxed">
              Nghiên cứu sâu hành vi người tiêu dùng Gen Z & ranh giới bảo mật thông tin trong AI Marketing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
