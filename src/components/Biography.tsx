"use client";

import { motion } from "framer-motion";

export default function Biography() {
  return (
    <section id="biography" className="py-12 md:py-20 px-4 md:px-8 max-w-5xl mx-auto w-full relative z-10 text-center md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
          Về bản thân <span className="heading-aurora">mình</span>
        </h2>
        
        <h3 className="text-xl md:text-2xl font-serif font-bold text-[#FF6B5A] mb-4">
          Sinh Viên Năm Cuối Quản Trị Kinh Doanh | Đại học Bách Khoa Hà Nội
        </h3>
        
        <div className="space-y-6 text-slate-300 font-sans text-base md:text-lg leading-relaxed">
          <p>
            Là sinh viên chuyên ngành Marketing tại HUST, mình sở hữu hơn 2.5 năm kinh nghiệm làm việc thực tế trong môi trường giáo dục và dự án Thương mại điện tử. Với thế mạnh về tư duy nghiên cứu thị trường, phân tích số liệu báo cáo kết hợp năng lực sáng tạo nội dung đa phương tiện, mình định hướng trở thành một nhân sự đa nhiệm, nhạy bén với thị trường.
          </p>
          <p>
            Mình không chỉ dừng lại ở việc lên ý tưởng sáng tạo hay xây dựng concept đa phương tiện, mà luôn kiểm chứng hiệu quả thông qua tư duy nghiên cứu thị trường bài bản, xử lý số liệu báo cáo chính xác và trực tiếp tối ưu hóa vận hành thực tế trên các nền tảng thương mại điện tử.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
