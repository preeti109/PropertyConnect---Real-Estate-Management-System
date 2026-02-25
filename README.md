# 🏠 Property Connect – Real Estate Management System

Property Connect is a **microservices-based Real Estate Management System** built using a modern **React (Vite)** frontend and **.NET 8 microservices**.

It allows users to browse properties, view details, send enquiries, and manage accounts through a responsive web interface.  
This project demonstrates a **scalable real-world microservices architecture** with an **API Gateway** and multiple backend services.

---

## ✨ Features

### 👤 User Features
- User Registration & Login
- Secure Authentication (token-based)
- Browse Properties
- View Property Details
- Send Property Enquiries
- Add Properties to Cart / Saved Items

### ⚙️ System Features
- Microservices Architecture
- API Gateway Routing
- REST APIs
- Clean service separation (Auth, User, Property, Cart, Enquiry)
- Responsive React UI

---

## 🏗️ Microservices Architecture

```txt
Frontend  →  API Gateway  →  Microservices  →  Database
📁 Project Structure
Property-Connect
│
├── api-gateway
├── auth-service
├── user-service
├── PropertyService
├── CartService
├── enquiry-service
└── frontend
🧩 Services Overview
Service	Purpose
api-gateway	Routes client requests to internal services
auth-service	Authentication (login/register)
user-service	User management
PropertyService	Property listings management
CartService	Cart / saved properties
enquiry-service	Property enquiries handling
frontend	React (Vite) UI
🛠️ Tech Stack
Frontend

React.js (Vite)

JavaScript

Redux Toolkit

Axios

React Router

Backend

.NET 8 Web API

Microservices architecture

Entity Framework Core

MySQL Database

Tools

Visual Studio / VS Code

Postman

Git & GitHub (Git Bash)

✅ Prerequisites

Install these before running the project:

Node.js (LTS)

.NET 8 SDK

MySQL Server

Visual Studio / VS Code

🚀 Setup & Run (Step-by-Step)
1) Clone Repository
git clone https://github.com/preeti109/PropertyConnect---Real-Estate-Management-System.git
cd Property-Connect
🗄️ Database Setup (MySQL)

Create a database (example):

CREATE DATABASE property_connect;

Update connection strings in these service configs (where applicable):

auth-service/appsettings.json

user-service/appsettings.json

PropertyService/appsettings.json

CartService/appsettings.json

enquiry-service/appsettings.json

✅ Tip: Keep your DB username/password in config or environment variables (recommended).

▶️ Run Backend Services (.NET)

Run each service separately (recommended order):

auth-service

user-service

PropertyService

CartService

enquiry-service

api-gateway

Example:

cd auth-service
dotnet run

Each service should open Swagger like:

https://localhost:<PORT>/swagger
🌐 Run Frontend (React + Vite)
cd frontend
npm install
npm run dev

Frontend default URL:

http://localhost:5173
🔐 Authentication

Token-based authentication

Protected routes implemented in frontend

API calls handled via Axios configuration

Redux used for state management

📸 Screenshots (Optional)

Create a folder named screenshots/ and add images like:

screenshots/home.png
screenshots/login.png
screenshots/property-details.png

Then show in README:

![Home](screenshots/home.png)
![Login](screenshots/login.png)
![Property Details](screenshots/property-details.png)
💡 Future Enhancements

Property image upload

Advanced search & filters

Email notifications for enquiries

Payment / booking module

Mobile app version

👩‍💻 Author

Preeti
B.Tech – Computer Science Engineering

✅ Project Status

✅ Completed
✅ Microservices Implemented
✅ Frontend Integrated
✅ Ready for Demo & GitHub
