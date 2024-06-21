import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetch('./booksData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Books data loaded:', data);
        setBooksData(data);
      })
      .catch(error => console.error('Error fetching books data:', error));
  }, []);

  return (
    <main>
      <section className="section book-library">
        <div className="container">
          <h2>Library Collection</h2>
          <div className="lib-grid">
            <div className="lib-container">
              {booksData.map((book) => (
                <div className="lib-item" key={book.id}>
                  <a href={`book/${book.id}.html`} title={book.title}>
                    <img src={book.cover_image} alt={book.title} />
                    <p>{book.title}</p>
                  </a>
                  <a className="item-books-author" href={`book/${book.id}.html#author`} title={`by ${book.author.name}`}>
                    <p>by {book.author.name}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="help-card">
        <div className="help-card-text">
          <h4>Can&#x27;t find what you&#x27;re looking for?</h4>
        </div>
        <div>
          <span className="Text">Get help and learn more about the design.</span>
        </div>
        <div className="help-contact">
        <Link to="/contact">
            <span>Contacts</span>
            </Link>
          </div>
      </div>
    </main>
  );
};

export default Main;
