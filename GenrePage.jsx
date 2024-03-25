import React, { useState } from 'react';
import './GenrePage.css';


// ...
// Mise à jour de la base de données des livres pour inclure plusieurs livres par genre
const bookDatabase = [
    { id: 1, title: 'Rich Dad Poor Dad', genre: 'Finance', coverUrl: 'https://th.bing.com/th/id/OIP.0Mpj_tC_uSXkEaHC0r035wHaLJ?rs=1&pid=ImgDetMain' },
    { id: 2, title: 'The Total Money Makeover', genre: 'Finance', coverUrl: 'https://th.bing.com/th/id/R.2b628ddf9b3909fb7ba1403145ac9649?rik=cbgW82SweN6CmA&pid=ImgRaw&r=0' },
    { id: 3, title: 'Think and Grow Rich', genre: 'Finance', coverUrl: 'https://th.bing.com/th/id/R.ac1c9c5c08d1a012c967fbd552e2bda6?rik=xAP05QffBP%2fu8A&pid=ImgRaw&r=0' },
    { id: 4, title: 'The Lean Startup', genre: 'Business', coverUrl: 'https://th.bing.com/th/id/R.92c02369d89e99772e60e85b0056c20f?rik=fvKFQMK5hdUe5Q&pid=ImgRaw&r=0' },
    { id: 5, title: 'Zero to One', genre: 'Business', coverUrl: 'https://th.bing.com/th/id/R.52e37463d4d5d0b821ff8aff13883b88?rik=eS4yhM0tm4QKxw&riu=http%3a%2f%2fwww.paulallenhill.com%2fuploads%2f7%2f1%2f1%2f4%2f7114952%2fzero-to-one_orig.jpg&ehk=XI0gjavWxEswjT%2fe8ijK9ytot8d08jFpQGiTS4a5J%2bg%3d&risl=&pid=ImgRaw&r=0' },
    { id: 6, title: 'Good to Great', genre: 'Business', coverUrl: 'https://media.shortform.com/covers/png/good-to-great-cover@8x.png' },
    { id: 7, title: 'Harry Potter and the Sorcerer\'s Stone', genre: 'Fantasy', coverUrl: 'https://th.bing.com/th/id/OIP.oXoJVYS11aDoXbnm4I2alwHaLH?rs=1&pid=ImgDetMain' },
    { id: 8, title: 'The Hobbit', genre: 'Fantasy', coverUrl: 'https://th.bing.com/th/id/OIP._AWQua901tukexSsdbr6IgHaLH?rs=1&pid=ImgDetMain' },
    { id: 9, title: 'The Lord of the Rings', genre: 'Fantasy', coverUrl: 'https://th.bing.com/th/id/R.84e406df9c9292eb20dea838d27d86e5?rik=agTpyv%2blL5K%2fOA&pid=ImgRaw&r=0' },
    { id: 10, title: 'To Kill a Mockingbird', genre: 'Fiction', coverUrl: 'https://th.bing.com/th/id/OIP.G067O0bgyyx4Edq4bYrwiwHaLJ?rs=1&pid=ImgDetMain' },
    { id: 11, title: '1984', genre: 'Fiction', coverUrl: 'https://th.bing.com/th/id/R.f1b4e91832c4615a43955f2d0f5d1795?rik=MW2%2bzNXYZBR9hw&riu=http%3a%2f%2fwww.bookerworm.com%2fimages%2f1984.jpg&ehk=l8MIFhiWt69hsoMix5qeAYOzlObLECDEUWhhsiywKk4%3d&risl=&pid=ImgRaw&r=0' },
    { id: 12, title: 'The Catcher in the Rye', genre: 'Fiction', coverUrl: 'https://th.bing.com/th/id/R.76c6a201c41e3135fee46162d9a38fb7?rik=hBabwMMOXf34fQ&pid=ImgRaw&r=0' }
  ];






const GenrePage = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedBook, setSelectedBook] = useState(null); 
  // Ajout pour suivre le livre sélectionné

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    setSelectedBook(null); // Réinitialiser les détails du livre sélectionné
  };

  const handleBookSelection = (book) => {
    setSelectedBook(book);
  };

  const renderBookDetails = (book) => {
    return (
      <div>
        <h2>{book.title}</h2>
        <p>Genre: {book.genre}</p>
        <img src={book.coverUrl} alt={`Cover of ${book.title}`} style={{ width: '100px', height: 'auto' }} />
        {/* Ajoutez plus de détails si nécessaire */}
      </div>
    );
  };

  return (
    <div>
      <h1>Book Genres</h1>
      <div>
        {[...new Set(bookDatabase.map(book => book.genre))].map(genre => (
          <button key={genre} onClick={() => handleGenreClick(genre)}>
            {genre}
          </button>
        ))}
      </div>
      {selectedGenre && <h2>Books in {selectedGenre}</h2>}
      <ul>
        {bookDatabase.filter(book => book.genre === selectedGenre).map(book => (
          <li
            key={book.id}
            onClick={() => handleBookSelection(book)}
            className="book-list-item" // Ajoutez cette classe
          >
            {book.title}
          </li>
        ))}
      </ul>
      {selectedBook && renderBookDetails(selectedBook)}
    </div>
  );
};

export default GenrePage;


