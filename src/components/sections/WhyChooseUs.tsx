"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, ThumbsUp, Truck, Headphones } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "ضمان الأمان",
    description: "نضمن وصول أثاثك بأمان تام دون أي خدوش أو تلف، مع تأمين شامل على جميع المنقولات.",
  },
  {
    icon: Clock,
    title: "الالتزام بالمواعيد",
    description: "نلتزم بالمواعيد المحددة بدقة عالية، فريقنا يصل في الوقت المحدد دون أي تأخير.",
  },
  {
    icon: Users,
    title: "فريق محترف",
    description: "عمالة مدربة وذات خبرة عالية في التعامل مع جميع أنواع الأثاث والمفروشات.",
  },
  {
    icon: ThumbsUp,
    title: "أسعار تنافسية",
    description: "أفضل الأسعار في السوق مع الحفاظ على أعلى معايير الجودة في الخدمة.",
  },
  {
    icon: Truck,
    title: "سيارات حديثة",
    description: "أسطول سيارات حديث ومجهز خصيصاً لنقل الأثاث بأحجام مختلفة تناسب جميع الاحتياجات.",
  },
  {
    icon: Headphones,
    title: "دعم 24/7",
    description: "فريق خدمة العملاء متاح على مدار الساعة للإجابة على استفساراتكم وتلقي طلباتكم.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding navy-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gold-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gold-400 rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-400 font-bold text-sm mb-3 tracking-wide">
            لماذا تختارنا
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            نحن الأفضل في مجالنا
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            نتميز بتقديم خدمات نقل الأثاث بأعلى معايير الجودة والاحترافية في المملكة الأردنية
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-gold-400/20 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a href="#booking" className="btn-primary inline-flex items-center gap-2 text-lg">
            احجز خدمتك الآن
          </a>
        </motion.div>
      </div>
    </section>
  );
}
