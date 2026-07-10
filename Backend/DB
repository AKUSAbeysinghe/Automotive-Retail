
-- =============================================
-- Automative_DB (Automotive Database)
-- =============================================

-- Create Database
CREATE DATABASE IF NOT EXISTS Automative_DB
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- Use the database
USE Automative_DB;

-- 1. Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Subcategories Table
CREATE TABLE IF NOT EXISTS subcategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100),
    description TEXT,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    INDEX idx_category (category_id)
);

-- 3. Products Table (Updated as per your requirement)
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    
    -- Required (Compulsory) fields
    category_id INT NOT NULL,
    sub_category_id INT NOT NULL,
    name VARCHAR(200) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    
    -- Optional fields
    description TEXT,
    image_url VARCHAR(255),
    popular BOOLEAN DEFAULT FALSE,
    stock INT DEFAULT 0,
    status ENUM('active','inactive') DEFAULT 'active',
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    FOREIGN KEY (sub_category_id) REFERENCES subcategories(id) ON DELETE CASCADE,
    INDEX idx_category_sub (category_id, sub_category_id)
);

-- 4. Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================================
-- INSERT CATEGORIES
-- =============================================
INSERT INTO categories (name, slug) VALUES
('Dealership', 'dealership'),
('Accessories', 'accessories'),
('Auto Parts', 'auto-parts')
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug);

-- =============================================
-- INSERT SUBCATEGORIES
-- =============================================
INSERT INTO subcategories (category_id, name, slug, description) VALUES
-- Dealership
(1, 'Cars', 'cars', NULL),
(1, 'SUVs', 'suvs', NULL),
(1, 'Vans', 'vans', NULL),
(1, 'Pickup Trucks', 'pickup-trucks', NULL),
(1, 'Motorcycles', 'motorcycles', NULL),
(1, 'Electric Vehicles', 'electric-vehicles', NULL),
(1, 'Commercial Vehicles', 'commercial-vehicles', NULL),

-- Accessories
(2, 'Interior Accessories', 'interior-accessories', NULL),
(2, 'Exterior Accessories', 'exterior-accessories', NULL),
(2, 'Car Electronics', 'car-electronics', NULL),
(2, 'Car Lighting', 'car-lighting', NULL),
(2, 'Seat Covers', 'seat-covers', NULL),
(2, 'Floor Mats', 'floor-mats', NULL),
(2, 'Car Care Accessories', 'car-care-accessories', NULL),
(2, 'Safety Accessories', 'safety-accessories', NULL),
(2, 'Mobile Accessories', 'mobile-accessories', NULL),
(2, 'Performance Accessories', 'performance-accessories', NULL),

-- Auto Parts
(3, 'Engine Parts', 'engine-parts', NULL),
(3, 'Brake Parts', 'brake-parts', NULL),
(3, 'Suspension Parts', 'suspension-parts', NULL),
(3, 'Steering Parts', 'steering-parts', NULL),
(3, 'Transmission Parts', 'transmission-parts', NULL),
(3, 'Electrical Parts', 'electrical-parts', NULL),
(3, 'Cooling System', 'cooling-system', NULL),
(3, 'Fuel System', 'fuel-system', NULL),
(3, 'Exhaust System', 'exhaust-system', NULL),
(3, 'Body Parts', 'body-parts', NULL),
(3, 'Lighting Parts', 'lighting-parts', NULL),
(3, 'Filters', 'filters', NULL)
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug);