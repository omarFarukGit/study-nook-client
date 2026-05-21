# 📚 Study Nook

A modern room booking & study space management platform built with **Next.js (frontend)** and **Express + MongoDB (backend)**. Users can browse study rooms, book time slots, and manage their bookings in real-time with authentication support.

---

## 🚀 Features

- 🔐 Authentication using Better Auth
- 🏠 Browse available study rooms
- 📅 Book rooms with date & time validation
- ❌ Prevent double booking for same time slot
- 📦 Manage user bookings (view / cancel)
- ⚡ Real-time UI updates with toast notifications
- 🎨 Modern UI using HeroUI components
- 🌐 REST API backend with Express
- 🗄 MongoDB database with Mongoose

---
## 🌐 Live Demo

👉 https://study-nook-client-cyan.vercel.app/

---

## 🛠 Tech Stack

### Frontend (Client)
- Next.js 16
- React 19
- HeroUI (`@heroui/react`, `@heroui/styles`)
- React Toastify
- Lucide React Icons
- React Icons

### Backend (Server)
- Node.js + Express
- MongoDB + Mongoose
- Better Auth
- CORS
- Dotenv

---
## 🧠 Core Business Logic

### ❌ Booking Conflict Rule

A room cannot be booked if:

- Same room
- Same date
- Same time slot

Backend response:

```json id="conflict-response"
{
  "success": false,
  "message": "This room is already booked at this time"
}
```

## 📦 Installation

### 1. Clone the project

```bash
git clone https://github.com/your-username/study-nook.git
cd study-nook
```

# 🌐 Deployment

## Frontend Deploy

* Vercel


## Backend Deploy

* Vercel

## Database

* MongoDB Atlas

---


# 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Developer

Developed by Md Omar Faruk