"use client";

import { motion } from "framer-motion";
import { Truck, Wrench, Package, Sofa, Warehouse, ArrowLeft } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "نقل الأثاث",
    description: "نقل آمن ومحترف لجميع أنواع الأثاث المنزلي والمكتبي باستخدام سيارات حديثة مخصصة للنقل.",
    features: ["سيارات مغلقة ومبطنة", "نقل داخل وخارج الأردن", "تأمين شامل على الأثاث"],
  },
  {
    icon: Wrench,
    title: "فك وتركيب",
    description: "فريق نجارين محترفين متخصصين في فك وتركيب جميع أنواع الأثاث المحلي والمستورد.",
    features: ["نجارون محترفون", "أدوات حديثة", "ضمان عدم التلف"],
  },
  {
    icon: Package,
    title: "تغليف الأثاث",
    description: "تغليف احترافي بأجود مواد التغليف لحماية الأثاث من الخدوش والكسر أثناء النقل.",
    features: ["ورق مبطن بالإسفنج", "نايلون وبابلز", "صناديق كرتونية"],
  },
  {
    icon: Sofa,
    title: "نقل الكنب",
    description: "خدمة متخصصة لنقل الكنب والمفروشات مع العناية الفائقة بالتنظيف والحماية.",
    features: ["تغليف خاص للكنب", "حماية من البقع", "ترتيب في المكان الجديد"],
  },
  {
    icon: Warehouse,
    title: "تخزين الأثاث",
    description: "مستودعات آمنة ومجهزة لتخزين الأثاث لفترات طويلة مع الحماية من الرطوبة والحشرات.",
    features: ["مستودعات مكيفة", "حماية من الرطوبة", "مراقبة 24/7"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-500 font-bold text-sm mb-3 tracking-wide">
            خدماتنا المتميزة
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-navy-900 mb-4">
            حلول شاملة لنقل الأثاث
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات المتخصصة في نقل الأثاث بأعلى معايير الجودة والأمان
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg shadow-navy-900/5 border border-slate-100 card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400/10 to-gold-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-gold-500" />
              </div>

              <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
              <p className="text-navy-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-navy-500">
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-gold-500 font-bold text-sm hover:text-gold-600 transition-colors group/link"
              >
                احجز الخدمة
                <ArrowLeft className="w-4 h-4 group-hover/link:-translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
