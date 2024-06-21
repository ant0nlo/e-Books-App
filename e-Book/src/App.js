import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LibraryPage from './components/libraryPage/LibraryPage.js';
import BookPage from './components/bookPage/BookPage.js';
import ContactPage from './components/contactPage/ContactPage.js';
import HomePage from './components/homePage/HomePage.js';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/library" component={LibraryPage} />
        <Route path="/book/:id" component={BookPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;

