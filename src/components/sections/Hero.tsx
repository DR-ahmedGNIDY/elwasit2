"use client";

import { motion } from "framer-motion";
import { ArrowDown, Phone, Shield, Clock, Award } from "lucide-react";

export default function Hero() {
  const stats = [
    { icon: Shield, value: "100%", label: "ضمان الأمان" },
    { icon: Clock, value: "24/7", label: "خدمة مستمرة" },
    { icon: Award, value: "15+", label: "سنة خبرة" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden navy-gradient">
       {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/images/pic2.png"
      alt="background"
      className="w-full h-full object-cover opacity-30"
    />

 <div className="absolute inset-0 bg-black/30" />
  </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gold Accent Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-400/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gold-400/5 to-transparent" />

      <div className="container-custom mx-auto px-4 md:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-right"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
              <span className="text-gold-400 text-sm font-medium">
                نخدم جميع محافظات المملكة
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              نقل أثاثك بـ
              <span className="text-gradient block mt-2">
                أمان واحترافية
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/70 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              شركة الوسيط الرائدة في نقل وترحيل الأثاث والكنب في الأردن.
              نقدم خدمات فك وتركيب، تغليف احترافي، وتخزين آمن بأحدث المعدات.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <a
                href="https://wa.me/962791532016?text=مرحباً، أريد الاستفسار عن خدمات نقل الأثاث"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                تواصل عبر واتساب
              </a>

              <a
                href="#services"
                className="btn-navy flex items-center justify-center gap-2 text-lg"
              >
                <ArrowDown className="w-5 h-5" />
                اكتشف خدماتنا
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-gold-400 mx-auto mb-2" />

                  <div className="text-2xl font-black text-white">
                    {stat.value}
                  </div>

                  <div className="text-xs text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <img
              src="/images/pic1.jpeg"
              alt="صورة نقل الأثاث"
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gold-400 to-gold-600 text-white rounded-xl p-4 shadow-xl"
            >
              <div className="text-2xl font-black">5000+</div>
              <div className="text-xs">عميل راضٍ</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}