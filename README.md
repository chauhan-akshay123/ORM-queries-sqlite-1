# Music Track Database API

This is an Express.js API for managing a music track database. It allows seeding, retrieving, adding, updating, and deleting track records using Sequelize for ORM.

## Features

- **Database Seeding**: Populate the database with sample track data.
- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on track records.
- **Sorting & Filtering**: Fetch tracks by various filters, like artist or release year, and sort them in ascending/descending order.

## Technologies Used

- Node.js & Express.js
- Sequelize ORM
- PostgreSQL (or any other SQL database supported by Sequelize)

## Installation

1. Clone this repository:
   ```bash
   git clone <repo-url>
   cd <repo-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure database settings in `./lib/index.js` (ensure you have a running PostgreSQL or other SQL database).

4. Run the server:
   ```bash
   node app.js
   ```

   The server will run at `http://localhost:3000`.

## API Endpoints

### 1. **Seed Database**

   - **Route**: `/seed_db`
   - **Method**: `GET`
   - **Description**: Seeds the database with sample track data.

### 2. **Fetch All Tracks**

   - **Route**: `/tracks`
   - **Method**: `GET`
   - **Description**: Retrieves all tracks.
   - **Response**:
     - Success: 200 OK and list of tracks.
     - Error: 404 if no tracks are found.

### 3. **Fetch Track by ID**

   - **Route**: `/tracks/details/:id`
   - **Method**: `GET`
   - **Description**: Fetches track details by track ID.
   - **Parameters**:
     - `id`: ID of the track to retrieve.
   - **Response**:
     - Success: 200 OK with track details.
     - Error: 404 if track not found.

### 4. **Fetch Tracks by Artist**

   - **Route**: `/tracks/artist/:artist`
   - **Method**: `GET`
   - **Description**: Retrieves tracks by a specific artist.
   - **Parameters**:
     - `artist`: Name of the artist.
   - **Response**:
     - Success: 200 OK with list of tracks.
     - Error: 404 if no tracks by that artist.

### 5. **Sort Tracks by Release Year**

   - **Route**: `/tracks/sort/release_year`
   - **Method**: `GET`
   - **Query Params**:
     - `order`: Specify `ASC` for ascending or `DESC` for descending.
   - **Description**: Sorts tracks by release year in the specified order.

### 6. **Add New Track**

   - **Route**: `/tracks/new`
   - **Method**: `POST`
   - **Description**: Adds a new track to the database.
   - **Body**:
     ```json
     {
       "newTrack": {
         "name": "string",
         "genre": "string",
         "release_year": number,
         "artist": "string",
         "album": "string",
         "duration": number
       }
     }
     ```

### 7. **Update Track by ID**

   - **Route**: `/tracks/update/:id`
   - **Method**: `POST`
   - **Description**: Updates track details by ID.
   - **Parameters**:
     - `id`: ID of the track to update.
   - **Body**: New track data to update.
   - **Response**:
     - Success: 200 OK with updated track details.
     - Error: 404 if track not found.

### 8. **Delete Track by ID**

   - **Route**: `/tracks/delete`
   - **Method**: `POST`
   - **Description**: Deletes a track by ID.
   - **Body**:
     ```json
     {
       "id": number
     }
     ```
   - **Response**:
     - Success: 200 OK with a deletion confirmation.
     - Error: 404 if track not found.

## Sample Data for Seeding

The project includes sample track data, which is used to populate the database initially. You can modify this data in the `movieData` array in `app.js`.

## Error Handling

- Proper error handling has been implemented for all routes, providing meaningful responses on invalid input or server errors.
