# 🖥️ Frontend - E-commerce Website

This is the frontend application of the E-commerce Website built using **React.js**. It provides a modern and responsive user interface for browsing products, managing the shopping cart, authenticating users, and completing purchases.

## 🚀 Features
- Product listing and filtering
- Responsive design (mobile and desktop)
- Shopping cart and order summary
- User authentication (JWT & Google OAuth)
- Stripe payment checkout
- Order tracking UI

## 📦 Tech Stack
- **Framework**: React.js
- **Routing**: React Router
- **State Management**: Context API 
- **Styling**: Styled-components
- **API Communication**: Fetch

## 🛠️ Getting Started

### Prerequisites
- Node.js
- npm

### Installation

- cd react_shopping-main
- npm install

### Running the Frontend

- npm start
- The app will run on http://localhost:3000 by default.


🔐 Environment Variables
Create a .env file in the frontend/ directory and include:

REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key_here
