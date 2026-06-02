# 🎉 MeetUp App

A full-stack event discovery and management application built using the MERN stack.

This platform allows users to discover upcoming events, explore event details, connect with communities, learn from industry experts, and stay updated about various online and offline meetups through a modern and responsive user interface.

---

## 🔗 Live Demo

[View Live Demo](https://meet-up-app-fe.vercel.app/)


---

## ⚡ Quick Start

Clone the repository and run the project locally.

```bash
git clone https://github.com/Shikha246/MeetUpApp-FE.git

cd MeetUpApp-FE

npm install

npm run dev
```

---

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Context API
- Axios
- CSS3
- React Icons

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Development Tools

- Vite
- Git & GitHub
- Postman

### Additional Libraries Used

| Library | Purpose |
|----------|----------|
| Axios | API communication between frontend and backend |
| React Router DOM | Handles client-side routing |
| React Icons | Enhances UI with modern icons |
| Express | Backend API development |
| Mongoose | MongoDB object modeling |
| dotenv | Environment variable management |
| cors | Enables cross-origin resource sharing |
| nodemon | Automatically restarts server during development |

---

## ✨ Features

### 🎉 Event Discovery

- Browse all upcoming meetups
- View detailed event information
- Explore event schedules
- Discover trending events

### 🔍 Search & Filtering

- Search events by title
- Filter events by type
- Browse events by category tags
- Quickly discover relevant meetups

### 👨‍🏫 Speaker Information

- View speaker profiles
- Learn about speaker expertise
- Explore industry professionals participating in events

### 📍 Event Details

- Venue information
- Event timings
- Registration fees
- Dress code details
- Age restrictions

### 🌐 Online & Offline Events

- Attend online meetups
- Discover local offline events
- Community networking opportunities

### 📱 Responsive User Interface

- Mobile-friendly design
- Tablet responsive layout
- Desktop optimized experience

### 🔗 REST API Integration

- Connected frontend and backend
- MongoDB data persistence
- Full CRUD functionality

---

## 🔐 Environment Variables

Create a `.env` file in the backend directory and add:

```env
MONGODB=your_mongodb_connection_string
PORT=3000
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string.

---

# 📡 API Reference

## Meetup Routes

| Method | Endpoint | Description |
|----------|----------|----------|
| POST | `/create` | Create a new meetup |
| GET | `/create` | Get all meetups |
| GET | `/meetups/:meetId` | Get meetup details by ID |
| GET | `/` | Get all meetups |

---

## Create Meetup

### Request

`POST /create`

```json
{
  "eventName": "ReactJS Meetup",
  "hostedBy": "Shikha Ramrakhyani",
  "eventType": ["Offline"],
  "coverImgUrl": "https://example.com/react-meetup.jpg",
  "details": "A meetup for React developers to network and learn.",
  "dressCode": "Casual",
  "ageRestrictions": "18+",
  "eventTags": ["Digital"],
  "startDateTime": "2026-07-15T10:00:00Z",
  "endDateTime": "2026-07-15T13:00:00Z",
  "location": {
    "plotNo": "101",
    "address": "MG Road",
    "city": "Pune"
  },
  "amount": 499,
  "speakers": [
    {
      "speakersImageUrl": "https://example.com/speaker.jpg",
      "speakersName": "John Doe",
      "speakersProfession": "Senior React Developer"
    }
  ]
}
```

### Response

```json
{
  "message": "Meet added sucessfully"
}
```

---

## Get All Meetups

### Request

`GET /create`

### Response

```json
[
  {
    "_id": "6846e6b9f5c8b71234567890",
    "eventName": "ReactJS Meetup",
    "hostedBy": "Shikha Ramrakhyani",
    "eventType": ["Offline"],
    "eventTags": ["Digital"],
    "amount": 499
  }
]
```

---

## Get Meetup By ID

### Request

`GET /meetups/:meetId`

### Response

```json
{
  "_id": "6846e6b9f5c8b71234567890",
  "eventName": "ReactJS Meetup",
  "hostedBy": "Shikha Ramrakhyani",
  "eventType": ["Offline"],
  "coverImgUrl": "https://example.com/react-meetup.jpg",
  "details": "A meetup for React developers to network and learn.",
  "dressCode": "Casual",
  "ageRestrictions": "18+",
  "eventTags": ["Digital"],
  "startDateTime": "2026-07-15T10:00:00.000Z",
  "endDateTime": "2026-07-15T13:00:00.000Z",
  "location": {
    "plotNo": "101",
    "address": "MG Road",
    "city": "Pune"
  },
  "amount": 499,
  "speakers": [
    {
      "speakersImageUrl": "https://example.com/speaker.jpg",
      "speakersName": "John Doe",
      "speakersProfession": "Senior React Developer"
    }
  ],
  "createdAt": "2026-06-01T10:30:15.123Z",
  "updatedAt": "2026-06-01T10:30:15.123Z"
}
```

---

## Meetup Data Model

```javascript
{
  eventName: String,
  hostedBy: String,
  eventType: ["Online" | "Offline"],
  coverImgUrl: String,
  details: String,
  dressCode: String,
  ageRestrictions: String,
  eventTags: ["Marketing" | "Digital"],

  startDateTime: Date,
  endDateTime: Date,

  location: {
    plotNo: String,
    address: String,
    city: String
  },

  amount: Number,

  speakers: [
    {
      speakersImageUrl: String,
      speakersName: String,
      speakersProfession: String
    }
  ]
}
```

---

## 🚀 Future Enhancements

- User Authentication
- Event Registration System
- Event Bookmarking
- User Profiles
- Event Reviews & Ratings
- Event Categories
- Admin Dashboard
- Email Notifications
- Ticket Booking System

---

## 📬 Contact

For bugs, issues, or feature requests, feel free to reach out:

📧 **ramrakhyani.shikha@gmail.com**

---

## 👩‍💻 Author

Built with ❤️ by **Shikha Ramrakhyani**

GitHub: https://github.com/Shikha246

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub.
