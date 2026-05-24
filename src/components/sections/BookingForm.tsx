"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("حدث خطأ أثناء إرسال الطلب");
      }

      setIsSuccess(true);
      setFormData({ name: "", phone: "", address: "", service_type: "", message: "" });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "حدث خطأ غير متوقع");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="section-padding navy-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400 rounded-full blur-3xl" />
      </div>

      <div className="container-custom mx-auto relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-gold-400 font-bold text-sm mb-3 tracking-wide">
              احجز الآن
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              احصل على عرض سعر مجاني
            </h2>
            <p className="text-white/60">
              املأ النموذج وسنتواصل معك في أقرب وقت
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">تم إرسال طلبك بنجاح!</h3>
                <p className="text-white/60">سنتواصل معك في أقرب وقت ممكن</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="relative">
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      الاسم الكامل *
                    </label>
                    <div className="relative">
                      <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="أدخل اسمك الكامل"
                        className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pr-10 pl-4 text-white placeholder-white/40 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      رقم الهاتف *
                    </label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="مثال: 0791234567"
                        className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pr-10 pl-4 text-white placeholder-white/40 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="relative">
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    العنوان *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
                    <input
                      type="text"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="المدينة / المنطقة / الشارع"
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pr-10 pl-4 text-white placeholder-white/40 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    نوع الخدمة
                  </label>
                  <select
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-gold-400 transition-colors"
                  >
                    <option value="" className="bg-navy-900">اختر نوع الخدمة</option>
                    <option value="نقل أثاث" className="bg-navy-900">نقل الأثاث</option>
                    <option value="فك وتركيب" className="bg-navy-900">فك وتركيب</option>
                    <option value="تغليف" className="bg-navy-900">تغليف الأثاث</option>
                    <option value="نقل كنب" className="bg-navy-900">نقل الكنب</option>
                    <option value="تخزين" className="bg-navy-900">تخزين الأثاث</option>
                    <option value="شامل" className="bg-navy-900">خدمة شاملة</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    تفاصيل إضافية
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="أخبرنا بتفاصيل إضافية عن طلبك..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/40 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      إرسال الطلب
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
