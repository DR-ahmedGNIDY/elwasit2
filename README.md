# 🚚 شركة الوسيط - موقع نقل وترحيل الأثاث

موقع احترافي متكامل لشركة نقل الأثاث في الأردن، مبني بـ Next.js و Tailwind CSS مع لوحة تحكم كاملة للأدمن.

## 📋 المميزات

- ✅ تصميم عصري فاخر بالألوان الكحلي والذهبي والأبيض
- ✅ متجاوب مع جميع الشاشات (Responsive)
- ✅ RTL عربي احترافي
- ✅ SEO Friendly
- ✅ أنيميشنات حديثة باستخدام Framer Motion
- ✅ خط عربي احترافي (Tajawal)
- ✅ لوحة تحكم كاملة للأدمن
- ✅ قاعدة بيانات MySQL
- ✅ رفع الصور وتخزينها محلياً
- ✅ نظام حجز متكامل
- ✅ زر واتساب ثابت

## 🛠️ التقنيات المستخدمة

- **Frontend:** Next.js 14, React 18, Tailwind CSS, Framer Motion
- **Backend:** Next.js API Routes
- **Database:** MySQL 2
- **Auth:** JWT + bcryptjs
- **Icons:** Lucide React

## 📁 هيكل المشروع

```
furniture-moving-company/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/route.ts         # تسجيل الدخول
│   │   │   ├── bookings/route.ts     # إدارة الحجوزات
│   │   │   ├── gallery/route.ts    # إدارة المعرض
│   │   │   ├── services/route.ts   # إدارة الخدمات
│   │   │   └── upload/route.ts     # رفع الصور
│   │   ├── admin/
│   │   │   ├── login/page.tsx      # صفحة تسجيل الدخول
│   │   │   └── dashboard/page.tsx  # لوحة التحكم
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── sections/               # أقسام الموقع
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── BookingForm.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       └── WhatsAppButton.tsx
│   ├── lib/
│   │   ├── db.ts                   # الاتصال بقاعدة البيانات
│   │   ├── auth.ts                 # مصادقة JWT
│   │   └── utils.ts                # أدوات مساعدة
│   └── types/
│       └── index.ts                # أنواع TypeScript
├── database/
│   └── schema.sql                  # هيكل قاعدة البيانات
├── public/
│   └── uploads/                    # مجلد رفع الصور
└── .env.example                    # نموذج متغيرات البيئة
```

## 🚀 خطوات التشغيل

### 1. تثبيت المتطلبات

```bash
# تثبيت Node.js 18+ (يفضل 20 LTS)
# تحقق من الإصدار
node -v

# تثبيت الحزم
npm install
```

### 2. إعداد قاعدة البيانات

1. سجل الدخول إلى cPanel في Hostinger
2. افتح **MySQL Database Wizard**
3. أنشئ قاعدة بيانات جديدة:
   - اسم القاعدة: `furniture_db`
   - اسم المستخدم: `your_username`
   - كلمة المرور: `your_password`
4. افتح **phpMyAdmin**
5. اختر قاعدة البيانات
6. اذهب إلى تبويب **SQL**
7. انسخ محتوى ملف `database/schema.sql` والصقه
8. اضغط **Go** لتنفيذ

### 3. إعداد ملف البيئة

```bash
cp .env.example .env
```

عدل ملف `.env`:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=furniture_db
DB_USER=your_username
DB_PASSWORD=your_password

# JWT Secret (غير هذا في الإنتاج)
JWT_SECRET=your_super_secret_key_here

# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi

# App URL
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

**ملاحظة:** كلمة مرور الأدمن الافتراضية هي `admin123`

### 4. بناء المشروع

```bash
# بناء للإنتاج
npm run build
```

### 5. الرفع على Hostinger

#### الطريقة الأولى: عبر FTP

1. افتح FileZilla أو أي FTP client
2. أدخل بيانات FTP من Hostinger:
   - Host: `ftp.yourdomain.com`
   - Username: `your_ftp_username`
   - Password: `your_ftp_password`
3. ارفع محتوى مجلد المشروع (بعد البناء) إلى `public_html`

#### الطريقة الثانية: عبر Git (مستحسن)

1. في Hostinger cPanel، افتح **Git**
2. أنشئ repository جديد
3. اربطه بـ GitHub/GitLab
4. اضبط deploy script:

```bash
#!/bin/bash
cd /home/u123456789/domains/yourdomain.com/public_html
export PATH=/home/u123456789/nodevenv/public_html/20/bin:$PATH
npm install
npm run build
```

#### الطريقة الثالثة: File Manager

1. افتح **File Manager** في cPanel
2. اذهب إلى `public_html`
3. اضغط **Upload**
4. ارفع ملف ZIP للمشروع
5. استخرج الملفات

### 6. إعداد Node.js في Hostinger

1. في cPanel، افتح **Setup Node.js App**
2. اضبط الإعدادات:
   - Node.js version: 20.x
   - Application root: `/home/username/domains/yourdomain.com/public_html`
   - Application URL: `yourdomain.com`
   - Application startup file: `server.js`
3. اضغط **Create**
4. اضغط **Run NPM Install**
5. اضبط **Environment Variables** من نفس الصفحة

### 7. إعداد rewrites (مهم جداً)

أنشئ ملف `.htaccess` في `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

أو إذا كنت تستخدم Node.js app مباشرة:

```apache
RewriteEngine On
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
```

## 🔐 تغيير كلمة مرور الأدمن

```bash
# توليد hash جديد
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('your_new_password', 10).then(hash => console.log(hash));"
```

انسخ الـ hash وحدثه في قاعدة البيانات أو `.env`

## 📱 معلومات إضافية

### تخصيص المحتوى
- **النصوص:** عدل في ملفات components مباشرة
- **الألوان:** عدل في `tailwind.config.ts`
- **الصور:** ضعها في `public/images/` واستخدمها

### SEO
- عدل `metadata` في `src/app/layout.tsx`
- أضف `sitemap.xml` و `robots.txt`

### الأداء
- الصور تُضغط تلقائياً
- استخدم `next/image` للصور
- فعّل SSR للصفحات الديناميكية

## 🆘 الدعم

لأي مشاكل أو استفسارات:
- تحقق من logs في Hostinger
- تأكد من صحة بيانات قاعدة البيانات
- تأكد من صلاحيات المجلدات (755 للمجلدات، 644 للملفات)

## 📄 الترخيص

جميع الحقوق محفوظة © 2024 شركة الوسيط
