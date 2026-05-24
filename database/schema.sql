-- Furniture Moving Company Database Schema
-- Compatible with MySQL 5.7+ and Hostinger MySQL

CREATE DATABASE IF NOT EXISTS furniture_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE furniture_db;

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    service_type VARCHAR(50),
    message TEXT,
    status ENUM('new', 'contacted', 'completed', 'cancelled') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Services Table
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(50) DEFAULT 'Truck',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Gallery Table
CREATE TABLE IF NOT EXISTS gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    image_path VARCHAR(255) NOT NULL,
    category VARCHAR(50) DEFAULT 'general',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Site Content Table
CREATE TABLE IF NOT EXISTS site_content (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content_key VARCHAR(50) NOT NULL UNIQUE,
    content_value TEXT NOT NULL,
    section VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert Default Admin User (password: admin123)
-- You should change this password after first login
INSERT INTO admin_users (username, password_hash) VALUES 
('admin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi')
ON DUPLICATE KEY UPDATE username = username;

-- Insert Default Services
INSERT INTO services (title, description, icon) VALUES
('نقل الأثاث', 'نقل آمن ومحترف لجميع أنواع الأثاث المنزلي والمكتبي باستخدام سيارات حديثة مخصصة للنقل.', 'Truck'),
('فك وتركيب', 'فريق نجارين محترفين متخصصين في فك وتركيب جميع أنواع الأثاث المحلي والمستورد.', 'Wrench'),
('تغليف الأثاث', 'تغليف احترافي بأجود مواد التغليف لحماية الأثاث من الخدوش والكسر أثناء النقل.', 'Package'),
('نقل الكنب', 'خدمة متخصصة لنقل الكنب والمفروشات مع العناية الفائقة بالتنظيف والحماية.', 'Sofa'),
('تخزين الأثاث', 'مستودعات آمنة ومجهزة لتخزين الأثاث لفترات طويلة مع الحماية من الرطوبة والحشرات.', 'Warehouse')
ON DUPLICATE KEY UPDATE title = title;

-- Insert Default Site Content
INSERT INTO site_content (content_key, content_value, section) VALUES
('company_name', 'شركة الوسيط', 'general'),
('company_phone', '0791234567', 'contact'),
('company_email', 'info@alwaseet.jo', 'contact'),
('company_address', 'عمان - الأردن', 'contact'),
('hero_title', 'نقل أثاثك بأمان واحترافية', 'hero'),
('hero_subtitle', 'شركة الوسيط الرائدة في نقل وترحيل الأثاث والكنب في الأردن', 'hero'),
('meta_description', 'شركة الوسيط الرائدة في نقل وترحيل الأثاث والكنب في الأردن', 'seo')
ON DUPLICATE KEY UPDATE content_key = content_key;
