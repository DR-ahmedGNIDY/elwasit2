export const metadata = {
  title: "لوحة التحكم - شركة الوسيط",
  description: "لوحة تحكم إدارة موقع شركة الوسيط",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-arabic antialiased">
        {children}
      </body>
    </html>
  );
}
