# 🚀 دليل النشر على Hostinger

## الخطوة 1: إعداد البيئة المحلية

```bash
# 1. استنساخ المشروع
cd furniture-moving-company

# 2. تثبيت الحزم
npm install

# 3. إعداد قاعدة البيانات المحلية للتجربة
# أنشئ قاعدة بيانات MySQL ونفذ ملف database/schema.sql

# 4. إنشاء ملف .env
cp .env.example .env
# عدل المتغيرات حسب إعداداتك

# 5. تشغيل المشروع محلياً
npm run dev
```

## الخطوة 2: البناء للإنتاج

```bash
# بناء المشروع
npm run build

# اختبار البناء محلياً
npm start
```

## الخطوة 3: إعداد Hostinger

### 3.1 إنشاء قاعدة البيانات

1. سجل الدخول إلى cPanel Hostinger
2. افتح **MySQL Database Wizard**
3. أنشئ:
   - Database Name: `furniture_db`
   - Username: `your_db_user`
   - Password: قوي وآمن
4. اربط المستخدم بقاعدة البيانات مع جميع الصلاحيات

### 3.2 استيراد قاعدة البيانات

1. افتح **phpMyAdmin**
2. اختر قاعدة البيانات
3. اذهب إلى تبويب **Import**
4. اختر ملف `database/schema.sql`
5. اضغط **Go**

### 3.3 إعداد Node.js App

1. في cPanel، افتح **Setup Node.js App**
2. اضبط:
   - **Node.js version:** 20.x
   - **Application mode:** Production
   - **Application root:** `/home/username/domains/yourdomain.com/public_html`
   - **Application URL:** `yourdomain.com`
   - **Application startup file:** `server.js`
3. اضغط **Create**

### 3.4 إعداد Environment Variables

في صفحة Node.js App، أضف المتغيرات:

```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=your_database_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
JWT_SECRET=your_random_secret_key
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NODE_ENV=production
PORT=3000
```

### 3.5 رفع الملفات

#### الطريقة A: File Manager

1. افتح **File Manager** في cPanel
2. اذهب إلى `public_html`
3. احذف الملفات القديمة (احتفظ بـ .htaccess إن وجد)
4. ارفع ملف ZIP للمشروع
5. استخرج الملفات

#### الطريقة B: FTP

```bash
# استخدم FileZilla أو أي FTP client
# ارفع محتوى المجلد بعد npm run build
# تأكد من رفع:
# - .next/
# - public/
# - server.js
# - package.json
# - .env (أو اضبط المتغيرات في cPanel)
```

#### الطريقة C: Git Deployment (مستحسن)

1. في cPanel، افتح **Git**
2. أنشئ repository جديد
3. اربطه بـ GitHub:
   ```bash
   git remote add origin https://github.com/username/repo.git
   ```
4. اضبط Webhook للـ Auto Deploy

### 3.6 تثبيت الحزم على السيرفر

في cPanel Node.js App:
1. اضغط **Run NPM Install**
2. انتظر حتى ينتهي

أو عبر SSH:
```bash
cd /home/username/domains/yourdomain.com/public_html
npm install --production
```

### 3.7 إعداد .htaccess

تأكد من وجود ملف `.htaccess` في `public_html`:

```apache
RewriteEngine On
RewriteBase /

# Static files
RewriteRule ^_next/(.*)$ /_next/$1 [L]
RewriteRule ^static/(.*)$ /static/$1 [L]
RewriteRule ^uploads/(.*)$ /uploads/$1 [L]

# API routes
RewriteRule ^api/(.*)$ /api/$1 [L]

# Client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## الخطوة 4: التحقق من النشر

1. افتح موقعك: `https://yourdomain.com`
2. تأكد من:
   - ✅ الصفحة الرئيسية تعمل
   - ✅ النماذج ترسل البيانات
   - ✅ لوحة التحكم متاحة: `/admin/login`
   - ✅ تسجيل الدخول يعمل
   - ✅ الصور تُعرض بشكل صحيح

## 🔧 استكشاف الأخطاء

### المشكلة: "Cannot find module"
```bash
# تأكد من تثبيت الحزم
rm -rf node_modules
npm install
```

### المشكلة: "Connection refused" للقاعدة
- تأكد من صحة بيانات الاتصال في `.env`
- تأكد أن المستخدم لديه صلاحيات للقاعدة
- جرب `localhost` أو `127.0.0.1`

### المشكلة: الصور لا تُعرض
- تأكد من صلاحيات مجلد `public/uploads` (755)
- تأكد من وجود `.gitkeep` في المجلد

### المشكلة: API لا يعمل
- تأكد من تشغيل Node.js app
- تحقق من logs في cPanel

## 🔄 التحديثات المستقبلية

```bash
# سحب التحديثات
git pull origin main

# إعادة البناء
npm run build

# إعادة تشغيل التطبيق
# من cPanel: Stop ثم Start
```

## 📞 معلومات الدعم

- Hostinger Support: https://www.hostinger.com/support
- Next.js Docs: https://nextjs.org/docs
- MySQL Docs: https://dev.mysql.com/doc/
