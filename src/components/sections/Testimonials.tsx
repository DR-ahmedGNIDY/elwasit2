"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "محمد العبدالله",
    location: "عمان - عبدون",
    rating: 5,
    content: "خدمة ممتازة جداً! الفريق كان محترف ودقيق في التعامل مع أثاثي. نقلوا كل شيء بأمان وبدون أي خدوش. أنصح الجميع بالتعامل معهم.",
  },
  {
    name: "سارة الخطيب",
    location: "عمان - الصويفية",
    rating: 5,
    content: "كنت خايفة من موضوع نقل الأثاث، بس مع شركة الوسيط الأمور كانت ولا أسهل. التغليف كان ممتاز وحسيت إنه أثاثي بأمان. شكراً لكم!",
  },
  {
    name: "أحمد الحسن",
    location: "الزرقاء",
    rating: 5,
    content: "أفضل شركة نقل أثاث تعاملت معها. الأسعار مناسبة والخدمة فوق الممتازة. فريق العمل متعاون ومحترف. بالتأكيد راح أتعامل معهم مرة ثانية.",
  },
  {
    name: "ليلى القاسم",
    location: "إربد",
    rating: 5,
    content: "نقلوا أثاث بيتي من إربد لعمان بكل احترافية. التزام بالمواعيد وتغليف ممتاز. شغلهم نظيف ومرتب. الله يعطيهم العافية.",
  },
  {
    name: "خالد الدباس",
    location: "عمان - خلدا",
    rating: 5,
    content: "خدمة نقل الكنب كانت ممتازة. حافظوا على الكنب من أي بقع أو خدوش ورتبوه في المكان الجديد بشكل ممتاز. شركة محترمة وأسعارها مناسبة.",
  },
  {
    name: "نورا الصالح",
    location: "مادبا",
    rating: 5,
    content: "تعاملت معهم لنقل أثاث مكتبي. الخدمة كانت سريعة ومنظمة. فريق العمل محترف ويعرف شغله. أنصح كل المكاتب والشركات بالتعامل معهم.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-slate-50">
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
            آراء العملاء
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-navy-900 mb-4">
            ماذا يقول عملاؤنا عنا
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            نفخر بثقة آلاف العملاء الذين اختارونا لنقل أثاثهم
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-navy-900/5 border border-slate-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 w-10 h-10 bg-gold-400/10 rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-gold-400" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-navy-600 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-navy-700 to-navy-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-bold text-navy-900">{testimonial.name}</div>
                  <div className="text-xs text-navy-500">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
