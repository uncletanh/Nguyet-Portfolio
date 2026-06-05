"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Coffee } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSend = () => {
    if (!formData.name || !formData.message) {
      alert("Vui lòng điền tên và lời nhắn nhé!");
      return;
    }
    const subject = encodeURIComponent(`Portfolio Contact từ ${formData.name}`);
    const body = encodeURIComponent(`Xin chào Nguyệt,\n\nMình là: ${formData.name}\nEmail: ${formData.email}\n\nNội dung lời nhắn:\n${formData.message}`);
    window.location.href = `mailto:nguyetyeah@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <footer id="contact" className="relative pt-32 pb-10 mt-20 border-t border-white/5 overflow-hidden z-10">
      {/* Background decoration Optimized */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 rounded-full opacity-[0.03] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#FF6B5A] via-[#FF6B5A]/20 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Info Section */}
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-10">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border border-white/20 relative shadow-[0_0_30px_rgba(255,255,255,0.1)] shrink-0">
                <Image 
                  src="/images/img-3.jpg" 
                  alt="Minh Nguyet Profile" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2">
                  Let's <span className="heading-aurora">Connect</span>
                </h2>
                <p className="text-slate-400 font-sans text-lg max-w-sm leading-relaxed">
                  Một chút thông tin liên lạc của mình. Đừng ngần ngại liên hệ để ta hiểu nhau hơn!
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 md:gap-8 mb-12">
              <a href="mailto:nguyetyeah@gmail.com" className="flex items-center gap-4 md:gap-6 group w-full sm:w-fit">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-[#10B981] group-hover:border-[#10B981]/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="font-sans text-sm sm:text-base md:text-lg text-slate-300 group-hover:text-white transition-colors break-all">
                  nguyetyeah@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-4 md:gap-6 group w-full sm:w-fit">
                <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-[#3B82F6] group-hover:border-[#3B82F6]/50 transition-all duration-300">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <span className="font-sans text-sm sm:text-base md:text-lg text-slate-300">
                  Hà Nội, Việt Nam
                </span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              {/* Facebook Icon */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] hover:border-transparent transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:border-transparent transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#053eff] hover:border-transparent transition-all duration-300">
                <span className="font-bold font-serif text-xl">B</span>
              </a>
            </div>
          </div>

          {/* Form Section */}
          <div className="bento-box p-10 md:p-14 relative z-10">
            <h3 className="text-3xl font-serif font-bold text-white mb-8">Gửi tin nhắn</h3>
            <form className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-sans font-bold tracking-widest text-slate-400 uppercase mb-3">Tên của bạn</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe" 
                  className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:border-[#10B981] focus:bg-white/10 transition-colors font-sans"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-sans font-bold tracking-widest text-slate-400 uppercase mb-3">Email</label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@gmail.com" 
                  className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:border-[#10B981] focus:bg-white/10 transition-colors font-sans"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-sans font-bold tracking-widest text-slate-400 uppercase mb-3">Lời nhắn</label>
                <textarea 
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Xin chào Nguyệt, mình muốn thảo luận về..." 
                  className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:border-[#10B981] focus:bg-white/10 transition-colors font-sans resize-none"
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={handleSend}
                className="btn-premium flex items-center justify-center gap-3 mt-4 w-full"
              >
                Gửi ngay <Send size={20} />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <p className="text-slate-500 font-sans text-sm font-medium">
            © 2026 Minh Nguyet Luong. Crafted with passion.
          </p>
          
          <div className="flex items-center gap-3 text-sm font-sans font-medium text-slate-400 group">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF6B5A]/20 group-hover:text-[#FF6B5A] transition-colors">
              <Coffee size={14} />
            </div>
            <span className="group-hover:text-slate-300 transition-colors">
              Grab a Taro Cheese Foam Tea & talk Marketing!
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
