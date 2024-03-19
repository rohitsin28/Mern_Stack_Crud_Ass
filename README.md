# MERN Stack CRUD Operations

This repository contains code for a MERN (MongoDB, Express.js, React.js, Node.js) stack application for performing CRUD (Create, Read, Update, Delete) operations. The project is divided into two main folders:
- `API`: Contains the backend code for the RESTful API using Node.js, Express.js, and MongoDB.
- `Client`: Contains the frontend code for the React.js user interface.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone this repository to your local machine.
2. Navigate to the `API` folder and run `npm install` to install backend dependencies.
3. Navigate to the `Client` folder and run `npm install` to install frontend dependencies.

### Running the Application

1. Start the backend server:
   - Navigate to the `API` folder.
   - Run `npm start`.
   - The backend server will start running on `http://localhost:5000`.

2. Start the frontend server:
   - Navigate to the `Client` folder.
   - Run `npm start`.
   - The React.js application will start running on `http://localhost:3000`.

3. Ensure MongoDB is running locally or configure the MongoDB connection URI in the backend code (`API/server.js`).

## Folder Structure

- `API`: Contains backend code.
  - `config`: Configuration files.
  - `controllers`: Request handlers.
  - `models`: Data models.
  - `routes`: API routes.
  - `index.js`: Entry point for the backend server.

- `Client`: Contains frontend code.
  - `public`: Static assets.
  - `src`: React components, styles, and other frontend code.
    - `Insert.js`: Insert the client Data.
    - `ReadData.js`: All data shown which is inserted to store in our DB.
    - `Update.js`: It updates all existing data.
    - `App.js`: Main component where I define routes for navigating pages.
    - `index.js`: Entry point for the React application.
