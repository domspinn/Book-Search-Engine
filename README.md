# MERN Book Search Engine

## Description

The Book Search Engine is a MERN stack application that allows users to search for books using the Google Books API. Users can save their favorite books to their profile and view or remove them at any time. The app is refactored to use GraphQL with Apollo Server for handling queries and mutations, replacing the original RESTful API.

## Table of Contents

- [MERN Book Search Engine](#mern-book-search-engine)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [License](#license)

## Installation

1. Clone the repository:

    git clone https://github.com/domspinn/Book-Search-Engine
    

2. Navigate to the root directory:

    cd Book-Search-Engine
    

3. Install the dependencies for both the client and server:

    npm install
    npm run install-client
    

4. Set up the environment variables by creating a `.env` file in the root directory and adding the following:

    
    MONGODB_URI=mongodb://localhost/book-search-engine
    JWT_SECRET=your_secret_key
    

5. Start the development server:

    npm run develop
    

6. The application will now be running locally on `http://localhost:3000`.

## Usage

- Search for books using the Google Books API by entering a search term.
- View book details including title, author, description, and a link to the Google Books page.
- Sign up or log in to save books to your profile.
- View your saved books and remove any you no longer want.

## Technologies Used

- **MongoDB**: For storing user and book data.
- **Express.js**: For building the server.
- **React**: For building the front-end user interface.
- **Node.js**: As the back-end runtime environment.
- **GraphQL & Apollo Server**: For managing data with queries and mutations.
- **JWT Authentication**: For user login and secure access.

## Features

- Search for books from the Google Books API.
- Save books to your profile.
- Remove books from your saved list.
- Login and signup functionality.
- Secure user authentication with JWT tokens.

## License

This project is licensed under the MIT License.
