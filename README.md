# 🛒 FIst Store – E-Commerce Web Application

## Overview

**Fist Store** is a full-stack e-commerce web application built with modern technologies. It allows users to explore products and enables admins to add products with customizable characteristics.

- 🌐 Frontend: React (with Vite) + Chakra UI
- 🔧 Backend: Express.js + Node.js
- 🗃️ Database: MongoDB
- 💡 Styling: Chakra UI
- 📦 State Management: (Basic React state or Context API – update if using Redux)

## Features

### 👥 User Features

- View all available products
- Toggle between Dark and Light mode
- See product details (title, description, price, category)

### 🔧 Admin Features

- Add new products with:
  - Title
  - Description
  - Price
  - Category
  - Custom characteristics
- View all products
- (Optional) Edit or Delete products

### 📦 Technologies Used

| Category  | Tech Stack             |
| --------- | ---------------------- |
| Frontend  | React (with Vite)      |
| Styling   | Chakra UI              |
| Routing   | React Router DOM       |
| Backend   | Express.js             |
| Database  | MongoDB + Mongoose     |
| Icons     | Chakra UI Icons        |
| Dev Tools | Vite, Nodemon, Postman |

---

## 📁 Folder Structure

```bash
NewProject/
├── backend/
│   ├── models/          # Mongoose models (Product.js)
│   ├── routes/          # Express routes (index.js)
│   └── mongo.js         # DB connection
│
├── frontend/
│   ├── src/
│   │   ├── components/  # Navbar, reusable UI
│   │   ├── pages/       # Home.jsx, CreateProduct.jsx
│   │   └── App.jsx      # Main App entry
│   └── index.html
│
├── .gitignore
├── README.md
└── package.json
```
