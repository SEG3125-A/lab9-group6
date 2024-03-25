import React from 'react';
import './NewReleasesPage.css'; // Assurez-vous que le chemin du fichier CSS est correct

// Simulez une base de données des nouveaux livres
const newReleasesDatabase = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    summary: 'A book about all the lives you could live and deciding what truly matters.',
    coverUrl: 'https://th.bing.com/th/id/R.139780a5f64545dbe9dadebbd7dd8813?rik=YEiNY3hyr0cMJg&pid=ImgRaw&r=0'
  },
  {
    id: 2,
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    summary: 'A lone astronaut must save the earth from disaster in this incredible new science-based thriller.',
    coverUrl: 'https://th.bing.com/th/id/R.fd52cf4e8fb484c8ac61a914872cb109?rik=6bXlUrR9xMfIsA&pid=ImgRaw&r=0'
  },

  {
    id: 3,
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    summary: 'A mystery and coming-of-age novel set in the 1950s and 1960s, telling the story of a young girl who grows up isolated in the marshes of North Carolina.',
    coverUrl: 'https://images.findawayworld.com/v1/image/cover/CD193450?aspect=1:1&width=960'
  },
  {
    id: 4,
    title: 'Atomic Habits',
    author: 'James Clear',
    summary: 'An essential guide on how small changes can lead to remarkable results in your personal and professional life by forming good habits and breaking bad ones.',
    coverUrl: 'https://th.bing.com/th/id/OIP.40YdU1lR2EQdFRfSxnTERQHaHa?rs=1&pid=ImgDetMain'
  },
  {
    id: 5,
    title: 'The Four Winds',
    author: 'Kristin Hannah',
    summary: 'A powerful American epic about love and heroism and hope, set during the Great Depression, a time when the country was in crisis and at a crossroads.',
    coverUrl: 'https://th.bing.com/th/id/OIP.xl208eFx7E4AXMZsuX1OsgHaHa?rs=1&pid=ImgDetMain'
  },
  {
    id: 6,
    title: 'The Invisible Life of Addie LaRue',
    author: 'V.E. Schwab',
    summary: 'A young woman makes a Faustian bargain to live forever and is cursed to be forgotten by everyone she meets, leading to a magical and emotional journey across centuries.',
    coverUrl: 'https://th.bing.com/th/id/R.a3c548934d41bd91f8baaf13ec71b612?rik=EUNSspnu1p2jxg&pid=ImgRaw&r=0'
  },
  {
    id: 7,
    title: 'Becoming',
    author: 'Michelle Obama',
    summary: 'In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her.',
    coverUrl: 'https://th.bing.com/th/id/OIP.e__NEYvJpiqMPy4lAR_zHgHaLQ?rs=1&pid=ImgDetMain'
  }
  
  // Ajoutez d'autres livres selon vos besoins
];

const NewReleasesPage = () => {
  return (
    <div>
      <h1>New Releases</h1>
      <div className="book-container">
        {newReleasesDatabase.map(book => (
          <div key={book.id} className="book-item">
            <img src={book.coverUrl} alt={`Cover of ${book.title}`} className="book-cover" />
            <div className="book-info">
              <h2>{book.title}</h2>
              <h3>by {book.author}</h3>
              <p>{book.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleasesPage;
