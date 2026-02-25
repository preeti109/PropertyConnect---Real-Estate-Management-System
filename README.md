# 🏠 Property Connect  
### Real Estate Management System

<p align="center">
A <b>Microservices-Based Real Estate Management System</b><br>
Built with <b>React (Vite)</b> and <b>.NET 8 Microservices</b>
</p>

---

## 📌 Overview

**Property Connect** is a modern **real estate management platform** that allows users to:

- Browse properties
- View property details
- Send enquiries
- Manage user accounts
- Save properties

The project is designed using a **Microservices Architecture** with an **API Gateway** for scalability and maintainability.

---

## 🚀 Features

### 👤 User Features

✔ User Registration & Login  
✔ Secure Authentication  
✔ Browse Properties  
✔ Property Details Page  
✔ Send Property Enquiries  
✔ Save Properties to Cart  

---

### ⚙️ System Features

✔ Microservices Architecture  
✔ API Gateway Routing  
✔ REST API Integration  
✔ Token Based Authentication  
✔ Responsive React UI  

---

## 🏗️ System Architecture

Frontend → API Gateway → Microservices → Database

---

## 📁 Project Structure

Property-Connect
│
├── api-gateway
├── auth-service
├── user-service
├── PropertyService
├── CartService
├── enquiry-service
└── frontend


---

## 🧩 Microservices

| Service | Description |
|--------|-------------|
| **API Gateway** | Routes requests to backend services |
| **Auth Service** | Handles login and authentication |
| **User Service** | Manages users |
| **Property Service** | Handles property listings |
| **Cart Service** | Manages saved properties |
| **Enquiry Service** | Handles property enquiries |
| **Frontend** | React user interface |

---

## 🛠️ Technology Stack

### Frontend

- React.js (Vite)
- Redux Toolkit
- Axios
- React Router
- CSS

### Backend

- .NET 8 Web API
- Entity Framework Core
- Microservices Architecture
- MySQL Database

### Tools

- Visual Studio
- VS Code
- Postman
- Git Bash
- GitHub

---

## ✅ Prerequisites

Install before running the project:

- Node.js
- .NET 8 SDK
- MySQL Server
- Visual Studio or VS Code

---

## ⚙️ Installation Guide

### 1️⃣ Clone Repository

```bash
git clone https://github.com/preeti109/PropertyConnect---Real-Estate-Management-System.git
cd Property-Connect

🗄️ Database Setup

Create MySQL database:
CREATE DATABASE property_connect;

Update connection strings inside:
auth-service/appsettings.json
user-service/appsettings.json
PropertyService/appsettings.json
CartService/appsettings.json
enquiry-service/appsettings.json

▶️ Run Backend Services

Run each service:

auth-service
user-service
PropertyService
CartService
enquiry-service
api-gateway

🔐 Authentication

Token Based Authentication

Protected Routes

Axios API Integration

Redux State Management

💡 Future Improvements

Property Image Upload

Advanced Search Filters

Email Notifications

Payment Integration

Mobile Application
