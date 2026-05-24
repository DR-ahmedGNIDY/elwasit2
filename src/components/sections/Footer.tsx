"use client";

import { Truck, Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="container-custom mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold block">شركة الوسيط</span>
                <span className="text-xs text-gold-400">نقل وترحيل الأثاث</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              شركة الوسيط الرائدة في نقل وترحيل الأثاث في الأردن. نقدم خدمات احترافية بأعلى معايير الجودة والأمان.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-gold-400/20 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-white/60 hover:text-gold-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-gold-400/20 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-white/60 hover:text-gold-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gold-400">روابط سريعة</h3>
            <ul className="space-y-3">
              {[
                { href: "#services", label: "خدماتنا" },
                { href: "#why-us", label: "لماذا نحن" },
                { href: "#testimonials", label: "آراء العملاء" },
                { href: "#gallery", label: "معرض الأعمال" },
                { href: "#booking", label: "احجز الآن" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gold-400">خدماتنا</h3>
            <ul className="space-y-3">
              {[
                "نقل الأثاث",
                "فك وتركيب",
                "تغليف الأثاث",
                "نقل الكنب",
                "تخزين الأثاث",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gold-400">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-400 mt-0.5" />
                <div>
                  <span className="text-white/60 text-sm block">هاتف / واتساب</span>
                  <a href="tel:+962791234567" className="text-white font-bold hover:text-gold-400 transition-colors">
                    079-123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-400 mt-0.5" />
                <div>
                  <span className="text-white/60 text-sm block">البريد الإلكتروني</span>
                  <a href="mailto:info@alwaseet.jo" className="text-white font-bold hover:text-gold-400 transition-colors">
                    info@alwaseet.jo
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5" />
                <div>
                  <span className="text-white/60 text-sm block">الموقع</span>
                  <span className="text-white font-bold">عمان - الأردن</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-400 mt-0.5" />
                <div>
                  <span className="text-white/60 text-sm block">ساعات العمل</span>
                  <span className="text-white font-bold">24 ساعة / 7 أيام</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2024 شركة الوسيط. جميع الحقوق محفوظة.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gold-400/20 hover:bg-gold-400/30 rounded-lg flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-gold-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
