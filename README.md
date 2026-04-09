# 🚀 Speedrun API

A simple backend API built with **Node.js, Express, TypeScript, Prisma, and SQLite**.
Built in a “bus-speedrun” session in under 7 hours of coding time — but follows real-world backend practices.


## 🧩 Architecture & Principles

This project was built with a strong focus on:

* Clean and layer-based architecture (router → controller → service → database)
* Separation of concerns
* Type safety with TypeScript
* Predictable and consistent API design
* Error handling and reliability

Even though it was created in a short time, the goal was to follow real-world backend practices rather than just “make it work”.


## ✨ Features

* 🔐 JWT Authentication (signup & login)
* 🔑 Password hashing with bcrypt
* 🧾 Full CRUD for transactions
* 👤 User–Transaction relationship
* 🛡 Protected routes via middleware
* 🗄 Prisma ORM + SQLite


## 🛠 Tech Stack

* Node.js
* Express
* TypeScript
* Prisma
* SQLite
* JWT (jsonwebtoken)
* bcrypt


## 📦 Installation

```bash
git clone https://github.com/your-username/speedrun-api.git
cd speedrun-api
npm install
```

## ⚙️ Setup

Create `.env` file:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET_KEY="your_secret"
```


## ▶️ Run the project

```bash
npm run dev
```

Server will start on:

```
http://localhost:5001
```


## 🔐 Auth Endpoints

### Register

```
POST /auth/signup
```

### Login

```
POST /auth/login
```

### Get current user

```
GET /auth/me
```


## 💰 Transaction Endpoints

### Create transaction

```
POST /transactions
```

### Get all transactions

```
GET /transactions
```

### Get transaction by ID

```
GET /transactions/:id
```

### Update transaction

```
PUT /transactions/:id
```

### Delete transaction

```
DELETE /transactions/:id
```


## 🔑 Authorization

For protected routes, use:

```
Authorization: Bearer YOUR_TOKEN
```


## 📌 Future Improvements

* Pagination for transactions
* Categories as separate entity
* Refresh tokens
* Role-based access

