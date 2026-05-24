"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const galleryItems = [
  { title: "نقل غرفة نوم كاملة", category: "نقل الأثاث" },
  { title: "تغليف احترافي", category: "تغليف" },
  { title: "فك وتركيب خزانة", category: "فك وتركيب" },
  { title: "نقل كنب فاخر", category: "نقل الكنب" },
  { title: "تخزين أثاث", category: "تخزين" },
  { title: "نقل مكتبي", category: "نقل الأثاث" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-white">
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
            معرض الأعمال
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-navy-900 mb-4">
            نماذج من أعمالنا
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto">
            شاهد بعض من مشاريع نقل الأثاث التي قمنا بتنفيذها باحترافية عالية
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Placeholder Image */}
              <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center">
                <div className="text-center p-4">
                  <Camera className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                  <p className="text-white/60 text-xs">{item.title}</p>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-gold-400 text-xs font-medium mb-1">{item.category}</span>
                <span className="text-white font-bold text-sm">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
