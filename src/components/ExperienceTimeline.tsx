"use client";

import { motion } from "framer-motion";
import { Briefcase, Heart, Users, BookOpen, Star } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Digital Marketer & Content Creator",
      organization: "Tự do / E-commerce",
      period: "Hiện tại",
      description: "Quản lý website, tối ưu hóa Similarweb metrics, lên chiến lược mô tả sản phẩm và visual thương hiệu (phụ kiện tóc, F&B, mỹ phẩm).",
      icon: <Briefcase size={20} className="text-white" />,
      color: "from-[#FF6B5A] to-[#E55A4A]"
    },
    {
      title: "Teaching Assistant",
      organization: "Atlantic Five Star English",
      period: "Quá khứ",
      description: "Giao tiếp, quản lý lớp học, làm việc với học viên nhỏ tuổi trong môi trường chuẩn quốc tế.",
      icon: <Star size={20} className="text-white" />,
      color: "from-[#10B981] to-[#059669]"
    },
    {
      title: "Academic Researcher",
      organization: "Trường Đại học Bách Khoa Hà Nội",
      period: "Quá khứ",
      description: "Trưởng nhóm/Thành viên cốt lõi nghiên cứu khoa học sinh viên. Xây dựng mô hình & khảo sát định lượng (Xử lý biến số Privacy Concern - PRC và Resistance Intention - RI).",
      icon: <BookOpen size={20} className="text-white" />,
      color: "from-[#3B82F6] to-[#2563EB]"
    },
    {
      title: "Tình nguyện viên",
      organization: "Sự kiện Hiến máu",
      period: "2022",
      description: "Điều phối Hỗ trợ sự kiện Hiến máu. Hướng dẫn thủ tục, điều phối đám đông, chăm sóc người tham gia.",
      icon: <Heart size={20} className="text-white" />,
      color: "from-[#EC4899] to-[#DB2777]"
    },
    {
      title: "Thành viên nhóm nhảy U.Z",
      organization: "U.Z Dance Group",
      period: "2019 - 2021",
      description: "Dancer biểu diễn, sáng tạo concept, tổ chức sự kiện, quản lý hậu cần.",
      icon: <Users size={20} className="text-white" />,
      color: "from-[#8B5CF6] to-[#7C3AED]"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto w-full relative z-10">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
          Hành Trình <span className="heading-aurora">Trải Nghiệm</span>
        </h2>
      </div>

      <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-16">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-10 md:pl-16 group"
          >
            {/* Timeline Dot */}
            <div className={`absolute -left-[20px] top-1 w-10 h-10 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg shadow-black/50 ring-4 ring-[#050A15] z-10 group-hover:scale-110 transition-transform`}>
              {exp.icon}
            </div>
            
            <div className="glass-card p-8 group-hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
              {/* Subtle background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 relative z-10">
                <h3 className="text-2xl font-serif font-bold text-white">{exp.title}</h3>
                <span className="text-xs font-sans font-semibold text-slate-300 bg-white/10 px-4 py-1.5 rounded-full w-fit mt-3 md:mt-0 uppercase tracking-wider border border-white/5">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-md font-sans font-medium text-[#10B981] mb-5 relative z-10">{exp.organization}</h4>
              <p className="text-slate-400 font-sans leading-relaxed text-sm relative z-10">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
