
# e-Book App

This project is a React-based web application for managing and viewing a collection of e-books. It features multiple pages including a library page, book details page, contact page, and home page.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)

## Installation

1. **Clone the repository:**
   \`\`\`bash
   git clone <repository-url>
   \`\`\`

2. **Navigate to the project directory:**
   \`\`\`bash
   cd e-Book-App
   \`\`\`

3. **Install the dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

## Usage

1. **Start the development server:**
   \`\`\`bash
   npm start
   \`\`\`

   This will start the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

2. **Build the project for production:**
   \`\`\`bash
   npm run build
   \`\`\`

   This will create a \`build\` directory with the production build of the application.

### Key Files and Directories

- **public/**: Contains the public assets and HTML template.
  - **assets/**: Contains image assets used in the application.
  - **booksData.json**: JSON file with book data.
  - **index.html**: Main HTML file.
  - **script.js**: Additional JavaScript file.
  
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

In the project directory, you can run the following scripts:

- \`npm start\`: Starts the development server.
- \`npm run build\`: Builds the app for production.
- \`npm test\`: Launches the test runner (if tests are defined).
- \`npm run eject\`: Ejects the app from the create-react-app configuration (not recommended).

## Dependencies

The project relies on the following major dependencies:

- \`react\`: JavaScript library for building user interfaces.
- \`react-dom\`: Provides DOM-specific methods for React.
- \`react-scripts\`: Configuration and scripts for Create React App.

For a complete list of dependencies, refer to the \`package.json\` file.
