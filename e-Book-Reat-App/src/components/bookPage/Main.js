import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../axiosConfig';

const Main = () => {
  const {personalId} = useParams();
  const rawPersonalId = personalId.split('.')[0]; // добавете това, за да извадите номера от personalId

  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        // Remove .html extension from personalId
        const personalId = rawPersonalId.replace('.html', '');
        const response = await api.get('/books');
        response.data.forEach(book => console.log('Book personalId:', book.personalId));
        // Ensure personalId and book.personalId are both strings
        const book = response.data.find(book => book.personalId === personalId);
        setBookData(book);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchBookData();
  }, [personalId]);


  if (!bookData) {
    return (
      <div className="error-container">
        <h1 className="error-text">NOT FOUND</h1>
      </div>
    );
  }

  const { title, author, genre, format, summary, cover_image, chapters } = bookData;

  return (
    <main>
      <section className="book" id="book">
        <div className="container">
          <h2 id="title">{title}</h2>
          <div className="book-details">
            <div className="book-cover">
              <img src={cover_image} alt={title} />
            </div>
            <div className="book-summary">
              <h3>Author: {author.name}</h3>
              <h3>Genre: {genre}</h3>
              <h3>Format: {format}</h3>
              <p>{summary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section chapters" id="chapters" aria-label="chapters" style={{ backgroundImage: "url('/assets/images/HELTASA-book.png')" }}>
        <div className="container">
          <p className="section-subtitle">Chapters</p>
          <h2 className="h2 section-title has-underline">
            Chapters Overview
            <span className="span has-before"></span>
          </h2>
          <ul className="grid-list-chapters">
            {chapters.map((chapter, index) => (
              <li key={index}>
                <div className="chapter-card">
                  <p className="card-subtitle">Chapter {String(index + 1).padStart(2, '0')}</p>
                  <h3 className="h3 card-title">{chapter.title}</h3>
                  <p className="card-text">{chapter.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section author" id="author" aria-label="author">
        <div className="container">
          <figure className="author-banner img-holder" style={{ "--width": 500, "--height": 520 }}>
            <img src={author.photo} width="500" height="520" className="img-cover" alt={author.name} />
          </figure>
          <div className="author-content">
            <p className="section-subtitle">The Author</p>
            <h2 className="h2 section-title">{author.name}</h2>
            <div className="section-text">
              {author.bio}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
