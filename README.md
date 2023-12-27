# AI Story Generator

An AI-powered story generator that uses Google Gemini AI to create stories. This project consists of a Node.js backend, a React frontend, and utilizes MongoDB for data storage. It implements JWT-based authentication for users.

## Features

- **Authentication:** Includes signup, signin, and profile update functionalities.
- **Homepage:** Displays user stories and provides options to like and share stories.
- **Leaderboards:** Shows the top 5 most liked stories.
- **My Stories:** Displays all user stories.
- **Real-time Sync:** Utilizes Tanstack Query for real-time synchronization of posted stories, likes, and leaderboard updates.
- **Messaging:** Uses SweetAlert to display success and failure messages.
- **Request Handling:** Utilizes Axios for making HTTP requests.

## Folder Structure

- **`backend/`:** Contains the Node.js backend code.
- **`frontend/`:** Holds the React frontend code.

## Setup

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository.
2. Navigate to the `backend/` folder and run `npm install`.
3. Start the backend server: `npm start`.
4. Navigate to the `frontend/` folder and run `npm install`.
5. Start the frontend: `npm start`.

## Usage

1. Ensure the backend server is running.
2. Access the frontend application via the provided URL.
3. Sign up or sign in using your credentials.
4. Explore stories on the homepage, like, share, or generate stories.
5. View the leaderboards and your own stories.

## Project Background

This AI Story Generator project was born out of a desire to blend cutting-edge AI technology with storytelling. The aim was to create a platform where users could not only enjoy AI-generated stories but also share their own narratives within a vibrant community.

### Technology Stack

- **Backend:** Node.js was chosen for its scalability and asynchronous capabilities. MongoDB serves as the database, ensuring flexible data storage.
- **Frontend:** React was selected to provide a dynamic and responsive user interface.
- **AI Integration:** Google Gemini AI powers the story generation, providing diverse and engaging content.
- **Real-time Updates:** Tanstack Query was instrumental in synchronizing user-generated content and leaderboards in real-time, enhancing the interactive experience.
- **User Interaction:** JWT-based authentication secures user data and enables seamless interaction with the platform's features.
- **User Experience:** SweetAlert enhances user experience by providing intuitive success and failure messaging.
- **Request Handling:** Axios simplifies HTTP requests, streamlining communication between the frontend and backend.

### Challenges and Innovations

Developing a seamless integration between multiple technologies posed challenges in maintaining real-time synchronization and ensuring a smooth user experience. Innovations were implemented to overcome these hurdles, resulting in a platform that offers both engaging AI-generated stories and a user-friendly interface for content creation and interaction.

## Test Credentials

To explore the features of the AI Story Generator, you can use the following test credentials:

- **Email:** testuser@test.com
- **Password:** Pass@123

Feel free to sign in using these credentials to experience the platform's functionalities without creating a new account.


