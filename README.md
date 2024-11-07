# Track Management API

This API provides endpoints to manage a collection of tracks (songs or movies) stored in a database. It supports CRUD operations such as creating, reading, updating, deleting, and sorting tracks. The API is built with Node.js, Express, and Sequelize for database operations.

## Prerequisites

- Node.js (v12 or higher)
- sqlite or another compatible SQL database
- Sequelize ORM
- Install dependencies using:

  ```bash
  npm install
  ```

## Project Structure

```
├── models
│   └── track.model.js     # Sequelize model for track
├── lib
│   └── index.js           # Sequelize instance and database configuration
├── index.js              # Main server file
└── README.md              # API documentation
```

## Setup Instructions

1. **Database Configuration**: Ensure you have a PostgreSQL (or compatible) database set up. Configure the connection in `lib/index.js`.
2. **Run the Server**:

   ```bash
   node server.js
   ```

3. **Base URL**: The server will run on `http://localhost:3000`.

## API Endpoints

### 1. Seed Database

Populate the database with initial track data.

- **Endpoint**: `/seed_db`
- **Method**: `GET`
- **Response**:
  - Success: `{ "message": "Database seeding successful." }`
  - Failure: `{ "message": "Error seeding the data", "error": "<error_message>" }`

### 2. Fetch All Tracks

Retrieve all tracks from the database.

- **Endpoint**: `/tracks`
- **Method**: `GET`
- **Response**:
  - Success: `{ "tracks": [...] }`
  - Failure: `{ "message": "Error fetching tracks", "error": "<error_message>" }`

### 3. Fetch Track by ID

Retrieve a specific track by its ID.

- **Endpoint**: `/tracks/details/:id`
- **Method**: `GET`
- **Response**:
  - Success: `{ "track": { ... } }`
  - If Not Found: `{ "message": "Track not found." }`

### 4. Fetch Tracks by Artist

Retrieve tracks by a specified artist.

- **Endpoint**: `/tracks/artist/:artist`
- **Method**: `GET`
- **Response**:
  - Success: `{ "tracks": [...] }`
  - If Not Found: `{ "message": "Track not found." }`

### 5. Sort Tracks by Release Year

Sort tracks by their release year in ascending or descending order.

- **Endpoint**: `/tracks/sort/release_year`
- **Method**: `GET`
- **Query Parameters**: `order` - `asc` or `desc`
- **Response**:
  - Success: `{ "tracks": [...] }`
  - Failure: `{ "message": "Error sorting the tracks", "error": "<error_message>" }`

### 6. Add a New Track

Add a new track to the database.

- **Endpoint**: `/tracks/new`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "newTrack": {
      "name": "Song Name",
      "genre": "Genre",
      "release_year": 2021,
      "artist": "Artist Name",
      "album": "Album Name",
      "duration": 3
    }
  }
  ```
- **Response**:
  - Success: `{ "newTrack": { ... } }`
  - Failure: `{ "message": "Error adding new track.", "error": "<error_message>" }`

### 7. Update Track Information by ID

Update an existing track by its ID.

- **Endpoint**: `/tracks/update/:id`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "Updated Song Name",
    "genre": "Updated Genre"
  }
  ```
- **Response**:
  - Success: `{ "message": "Track updated successfully.", "updatedTrack": { ... } }`
  - If Not Found: `{ "message": "Track not found." }`

### 8. Delete Track by ID

Delete a track from the database by its ID.

- **Endpoint**: `/tracks/delete`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "id": 1
  }
  ```
- **Response**:
  - Success: `{ "message": "Track record has been deleted successfully." }`
  - If Not Found: `{ "message": "Track not found." }`

## Error Handling

Each endpoint returns a `500` status code with a detailed error message if an unexpected error occurs.
