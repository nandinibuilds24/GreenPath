# 🌿 GreenPath

GreenPath is a privacy-preserving  web application that helps users navigate and understand official forms, applications, exams, and digital services using simple step-by-step guidance/instructions.

The main aim of GreenPath is to make complicated digital processes easier, especially for users who might have difficulty figuring out where and what information to enter on an official site or form.
---

## 📌 Problem Statement

Many people face difficulties while filling up the government forms, exam applications, banking forms and other online applications.

Common problems include:

- Not knowing where to look for the information required.
- Not understanding what a particular field means.
- Hard to find where information should be entered.
- Difficulty navigating complicated application websites.
- Fear of entering sensitive personal information wrongly.
- Fear of giving sensitive personal images of documents to any ai apps and any ai agents.
- Lack of simple visual guidance direction.

GreenPath addresses these problems by providing simple instructions, visual guidance, and links to official websites without taking the users personal sensitive information and documents.

---

## 💡 Proposed Solution

GreenPath provides users with:

- Simple step-by-step instructions.
- Visual guidance on the form guidance.
- Guidance on field-location.
- Guidance on Exam application process .
- Links to the Official website.
- Recently used services.
- Search functionality for faster acess.
- Ask GreenPath for help.
- Privacy-focused guidance without requiring users to post personal  sensitive information to GreenPath.

---

## ✨ Key Features

### 🔐 User Authentication

- User login
- Password authentication
- Forgot password
- Email OTP verification
- Password reset
- User Profile

### 🏠 Dashboard

Dashboard contains the access to different service categories such as:

- Government Services
- Exams
- Banking
- Education & Learning
- Social Media
- Safety Apps

It also includes:

- Service search
- Recently viewed services

### 🏛️ Government Services

GreenPath provides guidance in using selected government-related services.

The system explains:

- What the service is.
- Which form is required.
- Location of information.
- The place where the information needs to be entered.
- How to access the official service website.

### 🎓 Exam Guidance

The Exams section provides information on exams such as:

- GATE
- TCS NQT
- PCEP
- PCAP
- PCPP1

Information can be provided on the procedure of applying and users can be directed to the official website of the examination.

### 📝 GATE Guide

The GATE Guide offers the following:

- Privacy information.
- Step-by-step application guidance.
- Visual guidance  for application process.
- Progress tracking.
- Ask GreenPath question section.
- Acess to the Official GATE website.

### 🖼️ Visual Guidance

GreenPath uses visual guides to help users understand where information appears on a form or application page.

Instead of providing the information about the particular field with the help of text, the system can provide a visual indication of the particular location.


### 🔎 Search

Users can search for available GreenPath services from the dashboard through search option.

### 🕘 Recently Viewed

GreenPath saves recently viewed services locally so that users could return to previously opened guidance pages.

### 💬 Ask GreenPath

Users can ask questions about to the current guidance.

The system gives simple answers to common application-related questions.

---

## 🔒 Privacy

Privacy is an important part of GreenPath.

GreenPath is designed to guide users without requiring them to send sensitive personal information to the GreenPath and can complete there work without uploading any documents.

The system focuses on explaining:

- What type of information a field requires.
- Where the required information is located.
- Where the information should be entered.

Users should enter information directly into the official form or official website.

GreenPath should not be used to store or share sensitive personal documents unnecessarily.

No images and Documents are uploaded by the user

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Python
- Flask
- Flask-CORS

### Database

- SQLite

### Other Technologies

- REST API
- LocalStorage
- Email OTP
- JSON
- Git & GitHub

---

## 📂 Project Structure

```text
GreenPath/
│
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── profile.html
│   ├── forgot-password.html
│   ├── reset-password.html
│   │
│   ├── services/
│   │   ├── government-services.html
│   │   ├── exams.html
│   │   ├── banking.html
│   │   ├── education.html
│   │   ├── social-media.html
│   │   └── safety-apps.html
│   │
│   ├── guidance/
│   │   ├── gate-guide.html
│   │   └── form-guidance.html
│   │
│   ├── css/
│   ├── js/
│   └── assets/
│
├── backend/
│   ├── app.py
│   ├── database/
│   ├── models/
│   └── requirements.txt
│
├── .gitignore
└── README.md
```
## ▶️ How to Run

### 1. Start the Backend

Open a terminal and run:

```bash
cd backend
pip install -r requirements.txt
python app.py
```
Backend:https://greenpath-rxv3.onrender.com

Keep this terminal running.

## 2. Start the Frontend

Open a second terminal:
```bash
cd frontend
python -m http.server 5500
```
Frontend:http://127.0.0.1:5500

Keep this terminal running.

## 3. Open GreenPath

Open your browser and visit:http://127.0.0.1:5500

## 🔮 Future Improvements

Planned improvements may include:

- More government service guides.
- More exam application guides.
- More visual form blueprints.
- Multilingual guidance.
- Voice-based guidance.
- Additional official-service integrations.
- More accessibility features.
- Expanded chatbot assistance.
- Support for additional application forms.
- Make GreenPath accessible through mobile devices

## 👩‍💻 Author

**Nandini Vidya**  
B.Tech Information Technology Student

GreenPath is an academic and portfolio project designed to make digital forms and applications easier to understand and complete.

Its privacy-focused approach allows users to get guidance without uploading personal images or documents.

## 📄 License

GreenPath is a prototype developed for educational and demonstration purposes.

The source code and project materials are provided for learning and reference. Commercial use or redistribution requires permission from the author.