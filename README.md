# TechQuest Roadmap App

A comprehensive full-stack web application designed to help users navigate learning roadmaps for various tech roles. It provides structured, level-wise guidance, progress tracking, and interactive features to enhance the learning experience for free.

## 🚀 Features

- **User Authentication**: Secure login and signup with JWT-based authentication.
- **Role-Based Roadmaps**: Detailed learning paths for roles like Developer, Data Scientist, Cybersecurity, Cloud Engineer, Designer, and Tester.
- **Progress Tracking**: Visual progress tracking with interactive pie charts for each role.
- **Feedback System**: Users can submit feedback on roadmaps and features.
- **Responsive Design**: Built with TailwindCSS for a modern, glass-themed UI.
- **PDF Export**: Generate and download resumes as PDF using html2pdf.js.


## 🛠️ Tech Stack

### Frontend
- **React.js**: Component-based UI library.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **React Router**: Client-side routing.
- **Axios**: HTTP client for API requests.
- **HTML2PDF.js**: Library for generating PDFs from HTML.

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB.
- **JWT**: JSON Web Tokens for authentication.
- **Bcrypt**: Password hashing.
- **CORS**: Cross-origin resource sharing.
- **Express Rate Limit**: API rate limiting.
- **Express Validator**: Input validation.

### Development & Testing
- **Jest**: Testing framework.
- **Supertest**: HTTP endpoint testing.


## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)


## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**:
   - For frontend:
     ```bash
     npm install
     ```
   - For backend:
     ```bash
     cd backend
     npm install
     cd ..
     ```

3. **Environment Setup**:
   - Create a `.env` file in the `backend` directory with the following variables:
     ```
     MONGO_URL=mongodb://localhost:27017/techquest
     JWT_SECRET=your-secret-key
     FRONTEND_URL=http://localhost:3000
     PORT=5000
     ```

4. **Run with Docker Compose** (recommended):
   ```bash
   docker-compose up --build
   ```
   This will start MongoDB, backend, and frontend services.

5. **Run manually**:
   - Start MongoDB locally or use a cloud service.
   - Start backend:
     ```bash
     cd backend
     npm start
     ```
   - Start frontend:
     ```bash
     npm start
     ```

## 📖 Usage

1. **Access the app**: Open `http://localhost:3000` in your browser.
2. **Sign up/Login**: Create an account or log in to access the dashboard.
3. **Explore Roadmaps**: Browse available tech roles and view detailed roadmaps.
4. **Track Progress**: Update your progress on each level and visualize with pie charts.
5. **Search**: Use the search box to find specific topics.
6. **Feedback**: Submit feedback via the feedback form.

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/signup`: User registration.
- `POST /api/auth/login`: User login.

### Progress
- `GET /api/progress`: Get user progress.
- `POST /api/progress`: Update user progress.
- `DELETE /api/progress/:id`: Delete progress entry.

### Feedback
- `POST /api/feedback`: Submit feedback.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m 'Add feature'`.
4. Push to branch: `git push origin feature-name`.
5. Open a pull request.

## 📄 License

This project is licensed under the ISC License.

## 📞 Contact

For questions or support, please contact [karthikvelu0415@gmail.com].

