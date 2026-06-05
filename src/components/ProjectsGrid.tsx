"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nghiên cứu thị trường AI Marketing",
    summary: "Yếu tố ảnh hưởng đến ý định kháng cự Marketing cá nhân hóa bằng AI của Gen Z.",
    category: "Academic Research",
    details: "Dự án nghiên cứu chuyên sâu về hành vi của người tiêu dùng Gen Z tại Việt Nam. Xây dựng mô hình và khảo sát định lượng, xử lý biến số Privacy Concern (PRC) và Resistance Intention (RI) để hiểu rõ sự kháng cự đối với AI trong cá nhân hóa trải nghiệm."
  },
  {
    id: 2,
    title: "Chiến lược Thương hiệu",
    summary: "Kế hoạch Marketing Trà hoa vàng Ba Chẽ & Chiến dịch định vị Là Việt Coffee.",
    category: "Brand Strategy",
    details: "Xây dựng kế hoạch marketing toàn diện cho sản phẩm Trà hoa vàng Ba Chẽ và chiến dịch định vị độc đáo cho Là Việt Coffee với concept 'Cà phê vị Phở', tạo điểm nhấn thương hiệu văn hóa Việt Nam."
  },
  {
    id: 3,
    title: "Phân tích Tài chính",
    summary: "Báo cáo hiệu quả tài chính 2023-2024 của Vinamilk.",
    category: "Financial Analysis",
    details: "Thực hiện phân tích chuyên sâu về báo cáo tài chính của Vinamilk, đánh giá hiệu quả kinh doanh, các chỉ số thanh khoản, sinh lời và đưa ra dự báo trong giai đoạn 2023-2024."
  },
  {
    id: 4,
    title: "Content & Visual Design",
    summary: "Poster 2.5D, video B-roll F&B, listing sản phẩm e-commerce.",
    category: "Creative Content",
    details: "Sản xuất hình ảnh và video chất lượng cao: Poster 2.5D Animation, video B-roll F&B edit bằng CapCut, thiết kế visual cho listing sản phẩm (Plumeria Glow, Ocean Echo, Luna Pearl) chuẩn Shopee Mall."
  }
];

export default function ProjectsGrid() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            Dự Án <span className="heading-aurora">Nổi Bật</span>
          </h2>
          <p className="text-slate-400 font-sans text-lg max-w-xl">
            Sự kết hợp giữa nghiên cứu sâu sắc và khả năng thực thi sáng tạo, tạo ra giá trị thực tế.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`project-container-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bento-box cursor-pointer group shiny-border"
          >
            {/* Tương lai chèn ảnh thì bỏ comment khối dưới và update src */}
            {/* <div className="w-full aspect-video relative overflow-hidden bg-white/5 border-b border-white/10">
              <Image src="/your-image-path.jpg" alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div> */}

            <div className="p-8 md:p-10 flex flex-col h-full justify-between">
              <div>
                <span className="text-xs font-sans font-bold tracking-widest text-[#10B981] uppercase mb-4 block">
                  {project.category}
                </span>
                <motion.h3 
                  layoutId={`project-title-${project.id}`}
                  className="text-3xl font-serif font-bold text-white mb-4 group-hover:text-[#FF6B5A] transition-colors"
                >
                  {project.title}
                </motion.h3>
                <p className="text-slate-400 font-sans line-clamp-2 text-sm leading-relaxed mb-8">
                  {project.summary}
                </p>
              </div>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                <span className="text-sm font-sans font-semibold text-slate-300">Chi tiết dự án</span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-[#FF6B5A] group-hover:scale-110 transition-all duration-300">
                  <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050A15]/80 backdrop-blur-md"
          >
            <motion.div
              layoutId={`project-container-${selectedProject.id}`}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A1325] border border-white/10 w-full max-w-3xl rounded-[2rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-white/5 backdrop-blur-md rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="p-10 md:p-14 pt-20">
                <span className="text-xs font-sans font-bold tracking-widest text-[#10B981] uppercase mb-4 block">
                  {selectedProject.category}
                </span>
                <motion.h3 
                  layoutId={`project-title-${selectedProject.id}`}
                  className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                >
                  {selectedProject.title}
                </motion.h3>
                <p className="text-slate-300 font-sans leading-relaxed text-lg mb-10">
                  {selectedProject.details}
                </p>
                
                <div className="pt-8 border-t border-white/10 flex flex-wrap gap-4 items-center">
                  <button className="btn-premium flex items-center gap-2">
                    Khám phá thêm <ExternalLink size={18} />
                  </button>
                  <button className="btn-ghost" onClick={() => setSelectedId(null)}>
                    Đóng
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
