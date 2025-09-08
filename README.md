🛒 E-Commerce Platform (MERN Stack)

A full-stack E-Commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).
This project provides a complete shopping experience including product management, cart, checkout, and authentication.

🚀 Features
👥 User Features

🏠 Browse products with images, price, and details

🔍 Search & filter products

🛒 Add/remove items from the cart

💳 Checkout process (orders & payments)

👤 User authentication (signup/login with JWT)

🛠️ Admin Features

➕ Add new products

✏️ Edit product details

🗑️ Delete products

📦 Manage orders and users

📂 Project Structure
E-commerce/
│── frontend/           # React.js frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
│── backend/           # Express.js + Node.js backend
│   ├── models/       # MongoDB models (User, Product, Order)
│   ├── routes/       # API routes
│   ├── controllers/  # Business logic
│   ├── server.js     # Entry point
│   └── package.json
|
│── admin/           # React.js admin
│   ├── src/
│   ├── public/
│   └── package.json
│── README.md

🛠️ Tech Stack

Frontend: React.js, React Router, Axios, TailwindCSS

Backend: Node.js, Express.js, JWT Authentication

Database: MongoDB (Mongoose ODM)

Others: Stripe/Razorpay/ cash on delivery

▶️ How to Run
1️⃣ Clone the repository
2️⃣ Setup Backend
cd backend
npm install

# MONGODB_URI = mongo database url
# CLOUDINARY_API_KEY = cloudinary api key
# CLOUDINARY_API_SECRET_KEY = cloudinary api secret key
# CLOUDINARY_NAME = cloudinary name
# JWT_SECRET = secure jwt
# ADMIN_EMAIL = "admin@gmail.com" for admin email
# ADMIN_PASSWORD = "1642009" for admin password
# PORT = 4000

npm run start

3️⃣ Setup Frontend
cd client
npm install
npm run dev


👉 The frontend runs on http://localhost:3000

👉 The backend runs on http://localhost:5000

📈 Future Improvements

📸 Add image upload with Cloudinary

📊 Admin dashboard with analytics

🚀 Deploy frontend & backend (Vercel)

👨‍💻 Author

Developed by [Mohammed Haitham]