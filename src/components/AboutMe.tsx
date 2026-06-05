"use client";

import { motion } from "framer-motion";
import { GraduationCap, Brain, Palette, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10">
      <div className="mb-16 md:mb-24 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
          Kỹ Năng & <span className="heading-aurora">Chuyên Môn</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl font-sans mx-auto md:mx-0">
          Cân bằng giữa sự thăng hoa của sáng tạo và tính chính xác của dữ liệu.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-[300px]">
        {/* Box 1: Sáng tạo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-box p-10 flex flex-col justify-between group"
        >
          <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-[#10B981] mb-6 group-hover:scale-110 transition-transform">
            <Palette size={28} />
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-white mb-4">Sáng Tạo Đa Phương Tiện</h3>
            <p className="text-slate-400 font-sans text-base md:text-lg leading-relaxed">
              Chủ động lên ý tưởng concept, thiết kế banner/poster và sản xuất video ngắn (Canva, CapCut) phục vụ trực tiếp cho các chiến dịch Marketing và dự án bán hàng thực chiến.
            </p>
          </div>
        </motion.div>

        {/* Box 2: Phân tích */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bento-box p-10 flex flex-col justify-between group"
        >
          <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-[#3B82F6] mb-6 group-hover:scale-110 transition-transform">
            <Brain size={28} />
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold text-white mb-4">Phân Tích & Tối Ưu</h3>
            <p className="text-slate-400 font-sans text-base md:text-lg leading-relaxed">
              Thành thạo khai thác dữ liệu báo cáo (Excel, SPSS, Power BI), quản lý thông tin nhanh chóng và tối ưu hóa giao diện/SEO website thương mại điện tử để thúc đẩy doanh thu.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
