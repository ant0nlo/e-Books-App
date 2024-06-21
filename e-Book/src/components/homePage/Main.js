import React, { useEffect, useState } from 'react';

const Main = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetch('./booksData.json')
      .then(response => response.json())
      .then(data => setBooksData(data))
      .catch(error => console.error('Error fetching books data:', error));
  }, []);

  return (
    <main>
      <section className="welcome">
        <div className="container welcome-container">
          <div className="welcome-text">
            <h1>Welcome to e-Books</h1>
            <p>
              Welcome to e-Books, your digital gateway to a universe of stories! We are thrilled to have you join our community of book lovers and explorers. Dive into our extensive collection and let your imagination soar with every page you turn. Discover a diverse range of e-books across multiple genres and dive into the world of reading.
            </p>
          </div>
          <div className="welcome-image">
            <img src="./assets/images/book-pages2.png" alt="Reading Books" />
          </div>
        </div>
      </section>

      <section className="section benefits" id="benefits">
        <div className="container">
          <div>
            <h2 id="section-title">About Our Site</h2>
            <p className="section-text">
              At e-Books, we believe in the transformative power of reading. Our platform is designed to provide easy access to a vast selection of e-books, making reading more convenient and enjoyable for everyone.
            </p>
          </div>

          <div className="grid-list">
            <div>
              <div className="benefits-card has-before has-after">
                <div className="card-icon">
                  <img src="./assets/images/benefits/benefit1.png" alt="Diverse Library" />
                </div>
                <h3 className="h3 card-title">Diversity</h3>
                <p className="card-text">
                  Enjoy a vast collection across genres, from classics to contemporary bestsellers.
                </p>
              </div>
            </div>

            <div>
              <div className="benefits-card has-before has-after">
                <div className="card-icon">
                  <img src="./assets/images/benefits/benefit2.png" alt="User-Friendly Interface" />
                </div>
                <h3 className="h3 card-title">Ease</h3>
                <p className="card-text">
                  Navigate effortlessly, download easily, and read on any device seamlessly.
                </p>
              </div>
            </div>

            <div>
              <div className="benefits-card has-before has-after">
                <div className="card-icon">
                  <img src="./assets/images/benefits/benefit3.png" alt="Personalized Recommendations" />
                </div>
                <h3 className="h3 card-title">Recommendations</h3>
                <p className="card-text">
                  Get book suggestions tailored to your interests and preferences.
                </p>
              </div>
            </div>

            <div>
              <div className="benefits-card has-before has-after">
                <div className="card-icon">
                  <img src="./assets/images/benefits/benefit4.png" alt="Anywhere Access For Everyone" />
                </div>
                <h3 className="h3 card-title">Accessibility</h3>
                <p className="card-text">
                  Read anywhere, anytime, easily. Your next adventure is a click away.
                </p>
              </div>
            </div>

            <div>
              <div className="benefits-card has-before has-after">
                <div className="card-icon">
                  <img src="./assets/images/benefits/benefit5.png" alt="Community Engagement" />
                </div>
                <h3 className="h3 card-title">Community</h3>
                <p className="card-text">
                  Engage with a community of readers, share reviews, and join discussions.
                </p>
              </div>
            </div>

            <div>
              <div className="benefits-card has-before has-after">
                <div className="card-icon">
                  <img src="./assets/images/benefits/benefit6.png" alt="Exclusive Content" />
                </div>
                <h3 className="h3 card-title">Exclusives</h3>
                <p className="card-text">
                  Access special editions, author interviews, and unique previews.
                </p>
              </div>
            </div>

            <div>
              <div className="benefits-card has-before has-after">
                <div className="card-icon">
                  <img src="./assets/images/benefits/benefit7.png" alt="Learning Resources" />
                </div>
                <h3 className="h3 card-title">Resources</h3>
                <p className="card-text">
                  Enhance your reading with guides, summaries, and analytical tools.
                </p>
              </div>
            </div>

            <div>
              <div className="benefits-card has-before has-after">
                <div className="card-icon">
                  <img src="./assets/images/benefits/benefit8.png" alt="Offline Reading" />
                </div>
                <h3 className="h3 card-title">Offline</h3>
                <p className="card-text">
                  Download books for convenient reading anytime, without internet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section moving-books">
        <div className="container">
          <h2>Recommendations:</h2>
          <div className="books-carousel">
            <button className="carousel-button left-arrow">&lt;</button>
            <div className="books-container">
              {booksData.map((book) => (
                <div className="book-item" key={book.id}>
                  <a href={`book/${book.id}.html`}>
                    <img src={book.cover_image} alt={book.title} />
                  </a>
                  <p>{book.title}</p>
                  <p className="moving-books-author">by {book.author.name}</p>
                </div>
              ))}
            </div>
            <button className="carousel-button right-arrow">&gt;</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
