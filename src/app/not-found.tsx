import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center navy-gradient">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gold-400 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">الصفحة غير موجودة</h2>
        <p className="text-white/60 mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة</p>
        <Link
          href="/"
          className="btn-primary inline-flex items-center gap-2"
        >
          <Home className="w-5 h-5" />
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
