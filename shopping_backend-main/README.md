# 🛠️ Backend - E-commerce Website

This is the backend API of the E-commerce Website built using **Node.js** and **Express.js**. It handles all business logic, authentication, database operations, and payment processing.

## 🚀 Features
- User registration and login with JWT
- Google OAuth login
- Product and category APIs
- Cart and order management
- Stripe payment integration
- Secure endpoints and middleware

## 📦 Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL with Knex.js
- **Authentication**: JWT, Google OAuth
- **Payments**: Stripe
- **Environment Management**: dotenv

## 🛠️ Getting Started

### Prerequisites
- Node.js
- MySQL
- npm

### Installation

cd shopping_backend-main
npm install


Running the Backend
- npm run dev

The server will run on http://localhost:5000 by default.

🔐 Environment Variables
- Create a .env file in the backend/ directory and include:
 - PORT=5000
 - DB_HOST=localhost
 - DB_USER=root
 - DB_PASSWORD=your_password
 - DB_NAME=ecommerce
 - JWT_SECRET=your_jwt_secret
 - GOOGLE_CLIENT_ID=your_google_client_id
 - GOOGLE_CLIENT_SECRET=your_google_client_secret
 - STRIPE_SECRET_KEY=your_stripe_secret_key
