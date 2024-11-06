# Music Tracks API

This is a Node.js API that allows users to interact with music track data. The API is built using **Express.js** and **Sequelize ORM** to interact with a relational database. It includes functionalities to seed the database, fetch tracks, and sort them by various attributes like release year.

## Features

- **Seed Database**: Populate the database with initial music track data.
- **Fetch All Tracks**: Retrieve all tracks stored in the database.
- **Fetch Track by ID**: Retrieve a specific track by its unique ID.
- **Fetch Track by Artist**: Retrieve all tracks from a specific artist.
- **Sort Tracks by Release Year**: Sort tracks based on their release year in ascending or descending order.

## Technologies Used

- **Node.js**: JavaScript runtime used for the server-side application.
- **Express.js**: Web framework for building the API.
- **Sequelize ORM**: Object-relational mapper used to interact with the SQL database.
- **SQLite/PostgreSQL/MySQL** (depending on your database configuration): Relational database to store the track data.

## Folder Structure

The project follows a simple folder structure:

```
/project-root
  /models
    track.model.js        # Sequelize model for track data
  /lib
    index.js              # Sequelize connection and initialization
  index.js                   # Main Express.js server file
```

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **NPM**: Node package manager (comes with Node.js)
- **Database**: Ensure you have a relational database set up (SQLite, PostgreSQL, or MySQL).

### Steps to Run the Application

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:

   Run the following command to install all necessary dependencies:

   ```bash
   npm install
   ```

3. **Set up the database**:

   Make sure your Sequelize connection (`/lib/index.js`) is correctly configured to your database. The app uses Sequelize to sync and manage the models.

4. **Start the server**:

   Run the application on port `3000`:

   ```bash
   node app.js
   ```

   The server will be running on `http://localhost:3000`.

## API Endpoints

### 1. **Seed Database**

   - **Endpoint**: `GET /seed_db`
   - **Description**: Seeds the database with initial track data.
   - **Response**: Success message on seeding or an error message.

   ```json
   {
     "message": "Database seeding successful."
   }
   ```

### 2. **Fetch All Tracks**

   - **Endpoint**: `GET /tracks`
   - **Description**: Retrieves all tracks from the database.
   - **Response**:

   ```json
   {
     "tracks": [
       {
         "name": "Raabta",
         "genre": "Romantic",
         "release_year": 2012,
         "artist": "Arijit Singh",
         "album": "Agent Vinod",
         "duration": 4
       },
       ...
     ]
   }
   ```

### 3. **Fetch Track by ID**

   - **Endpoint**: `GET /tracks/details/:id`
   - **Description**: Retrieves a specific track by its ID.
   - **Response**:

   ```json
   {
     "track": {
       "id": 1,
       "name": "Raabta",
       "genre": "Romantic",
       "release_year": 2012,
       "artist": "Arijit Singh",
       "album": "Agent Vinod",
       "duration": 4
     }
   }
   ```

### 4. **Fetch Track by Artist**

   - **Endpoint**: `GET /tracks/artist/:artist`
   - **Description**: Retrieves all tracks from a specific artist.
   - **Response**:

   ```json
   {
     "tracks": [
       {
         "name": "Raabta",
         "genre": "Romantic",
         "release_year": 2012,
         "artist": "Arijit Singh",
         "album": "Agent Vinod",
         "duration": 4
       },
       ...
     ]
   }
   ```

### 5. **Sort Tracks by Release Year**

   - **Endpoint**: `GET /tracks/sort/release_year?order=asc|desc`
   - **Description**: Sorts tracks by their release year in either ascending or descending order.
   - **Query Params**:
     - `order`: The sorting order (`asc` or `desc`).
   - **Response**:

   ```json
   {
     "tracks": [
       {
         "name": "Raabta",
         "genre": "Romantic",
         "release_year": 2012,
         "artist": "Arijit Singh",
         "album": "Agent Vinod",
         "duration": 4
       },
       ...
     ]
   }
   ```

## Error Handling

- **404 - Track Not Found**: If the requested track is not found, the server responds with a `404` status and an error message.
- **500 - Internal Server Error**: If an error occurs while processing the request, the server responds with a `500` status and the error message.
