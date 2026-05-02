# PayWise Mall

PayWise Mall is a full-stack SaaS commerce platform designed to help businesses manage their operations efficiently. It provides tools for inventory management, order processing, analytics, and user onboarding within a scalable and secure system.

---

## 🚀 Features

### 🔐 Authentication & Security

- Secure authentication with HttpOnly cookies
- Google OAuth integration (via backend token exchange)
- OTP-based email verification
- Protected routes and middleware enforcement

### 🧑‍💼 Onboarding System

- Multi-step onboarding flow:
  - Account creation
  - Profile setup
  - Workspace creation
  - Goal selection

- Step persistence and validation

### 📦 Inventory Management

- Add, update, delete inventory items
- Search and pagination support
- Inventory statistics and insights

### 🛒 Order Management

- Create and manage orders
- Track sales and transactions
- Customer data integration

### 📊 Dashboard & Analytics

- Key metrics overview (users, sales, etc.)
- Charts for insights (Recharts)
- Latest users and activity tracking

### 📤 Reports & Export

- Export data as:
  - CSV
  - XLSX
  - PDF

- Email report submission support

---

## 🏗️ Tech Stack

### Frontend

- Next.js (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui
- React Hook Form + Zod
- Recharts

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose

### Architecture

- API routes via Next.js (`app/api/...`)
- Service layer abstraction (`lib/services`)
- Backend handles core business logic
- Secure cookie-based authentication

---

## 📁 Project Structure

```
/frontend
  /app
    /api
    /dashboard
    /onboarding
  /components
  /hooks
  /lib
    /services

/backend
  /src
    /controllers
    /models
    /routes
    /middlewares
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/fsa-22/PayWiseMall.git
cd PayWiseMall
```

### 2. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

---

### 3. Environment Variables

Create `.env` files in both frontend and backend:

#### Backend `.env`

```
PORT=5000
DATABASE_URI=your_supabase
JWT_SECRET=your_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

#### Frontend `.env`

```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

---

### 4. Run the Application

#### Backend

```bash
npm run dev
```

#### Frontend

```bash
npm run dev
```

---

## 🔄 API Flow

- Frontend interacts with internal API routes (`app/api/...`)
- API routes proxy requests to backend services
- Backend handles:
  - Authentication
  - Business logic
  - Database operations

- Tokens stored securely in HttpOnly cookies

---

## 🧠 Key Concepts Implemented

- Cookie-based authentication (no localStorage tokens)
- Layered architecture (API → Service → Backend)
- Form validation with Zod
- Scalable onboarding flow
- Data export and reporting system

---

## 📌 Future Improvements

- Payment gateway integration
- Role-based access control (RBAC)
- Multi-tenant workspace support
- Real-time notifications
- Mobile optimization

---

## 🤝 Contribution

Contributions are welcome. Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

Built by Simeon Fowotade
