import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "شركة الوسيط | نقل وترحيل الأثاث والكنب - الأردن",
  description: "شركة الوسيط الرائدة في نقل وترحيل الأثاث والكنب في الأردن. خدمات فك وتركيب، تغليف، تخزين، ونقل آمن بأسعار تنافسية.",
  keywords: "نقل اثاث, نقل عفش, نقل كنب, فك وتركيب اثاث, تغليف اثاث, تخزين اثاث, شركة نقل اثاث الاردن, عمان",
  authors: [{ name: "شركة الوسيط" }],
  openGraph: {
    title: "شركة الوسيط | نقل وترحيل الأثاث والكنب",
    description: "خدمات نقل الأثاث الاحترافية في الأردن",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-arabic antialiased">
        {children}
      </body>
    </html>
  );
}
