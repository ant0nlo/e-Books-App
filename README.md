
# e-Book App

This project consists of two main parts: a backend developed in Java using the Spring Boot framework, and a frontend developed in React. The backend manages the e-book collection, while the frontend provides a user interface for viewing and interacting with the e-books.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)

## Installation

### Backend (Java Spring Boot)

1. **Clone the repository:**
   \`\`\`bash
   git clone <repository-url>
   \`\`\`

2. **Navigate to the backend project directory:**
   \`\`\`bash
   cd e-books-java-server
   \`\`\`

3. **Install the dependencies and build the project:**
   \`\`\`bash
   ./mvnw install
   \`\`\`

4. **Run the backend server:**
   \`\`\`bash
   ./mvnw spring-boot:run
   \`\`\`

### Frontend (React)

1. **Navigate to the frontend project directory:**
   \`\`\`bash
   cd e-Book-React-App
   \`\`\`

2. **Install the dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server:**
   \`\`\`bash
   npm start
   \`\`\`

   This will start the React application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

### Backend
The backend server will be running on [http://localhost:8080](http://localhost:8080).

### Frontend
The frontend server will be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

### Backend (Java Spring Boot)
- **src/**: Contains the source code of the Spring Boot application.
  - **main/java/dev/app/e_books/**: Contains the main Java classes and configurations.
    - `EBooksApplication.java`: Main class to run the Spring Boot application.
    - `Book.java`, `Author.java`, `Chapter.java`: Entity classes.
    - `BookRepository.java`, `MessageRepository.java`: Repository interfaces.
    - `BookService.java`, `MessageService.java`: Service classes.
    - `BookController.java`, `MessageController.java`: Controller classes.
  - **resources/**: Contains application resources.
    - `application.properties`: Configuration properties.

### Frontend (React)
- **public/**: Contains the public assets and HTML template.
  - **index.html**: Main HTML file.
- **src/**: Contains the source code of the React application.
  - **components/**: Contains the React components organized by page.
    - **bookPage/**: Components related to the book details page.
    - **contactPage/**: Components related to the contact page.
    - **homePage/**: Components related to the home page.
    - **libraryPage/**: Components related to the library page.
  - **App.js**: Main App component.
  - **index.css**: Global CSS file.
  - **index.js**: Entry point of the application.

## Available Scripts

### Backend (Java Spring Boot)
In the backend project directory, you can run the following scripts:
- `./mvnw spring-boot:run`: Runs the Spring Boot application.

### Frontend (React)
In the frontend project directory, you can run the following scripts:
- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm test`: Launches the test runner (if tests are defined).
- `npm run eject`: Ejects the app from the Create React App configuration (not recommended).

## Dependencies

### Backend (Java Spring Boot)
The backend project relies on the following major dependencies:
- `Spring Boot`: Framework for building Java-based web applications.
- `Spring Data JPA`: Provides repositories for JPA entities.

For a complete list of dependencies, refer to the `pom.xml` file.

### Frontend (React)
The frontend project relies on the following major dependencies:
- `react`: JavaScript library for building user interfaces.
- `react-dom`: Provides DOM-specific methods for React.
- `react-scripts`: Configuration and scripts for Create React App.

For a complete list of dependencies, refer to the `package.json` file.
