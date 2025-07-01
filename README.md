# Evibe

# 🎉 Event Management Web Application - Frontend

This is the frontend of a fully functional **Event Management Web Application** built using **React.js**. The project is part of a complete **MERN Stack** system (MongoDB, Express.js, React.js, Node.js) and provides a smooth, responsive, and user-friendly interface for managing and exploring events.

## 🚀 Features

✅ Fully functional and responsive UI  
✅ Custom authentication system (sign up, login, logout)  
✅ Create, update, delete, and join events  
✅ Real-time attendee count update  
✅ Filter and search events by title, date, and date range  
✅ Display events by logged-in users  
✅ Beautiful alerts and notifications  
✅ Private routes for secured pages  
✅ Error handling and loading spinners

---

## 🛠️ Technologies Used

- **React.js**
- **React Router DOM**
- **Axios**
- **Tailwind CSS**
- **SweetAlert2**
- **Context API** for Auth handling

---

## 🔧 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/event-management-frontend.git
cd event-management-frontend
```

## Instaaltion

```bash
npm install
```

## env

```bash
VITE_API_URL=https://your-backend-api-url.com
```

## get start

```bash
npm run dev
```

## Folder structure

```bash
├── src
│   ├── components         # Reusable components like EventCard
│   ├── pages              # All pages: Home, Login, Register, Dashboard, etc.
│   ├── routes             # All Route definitions
│   ├── provider           # Context API (AuthProvider)
│   ├── hooks              # Custom hooks (if any)
│   ├── App.jsx            # Main app entry
│   └── main.jsx           # ReactDOM render
├── public
├── .env
└── README.md
```

## Authentication

- Custom login/registration form
- Auth state is managed using Context API

## Backend API (Node + Express + MongoDB)

The backend handles:

- User authentication with passwords
- Event CRUD operations
- Attendee count management
- Email-based event fetching
- Middleware for secured routes

## Backend GitHub Repo: ('https://github.com/jui9797/Evibe-server')

## Live('https://evibe-fe4bb.web.app/')
