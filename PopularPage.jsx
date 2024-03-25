import React from 'react';
import './PopularPage.css'; // Assurez-vous que le chemin du fichier CSS est correct

const popularBooksDatabase = [
    {
      id: 1,
      title: 'Educated',
      author: 'Tara Westover',
      summary: 'A memoir about a young girl who escapes her strict family to learn about the wider world through education.',
      coverUrl: 'https://th.bing.com/th/id/OIP.NNp3hK5kaGi_K4UJGSgUUwHaHa?rs=1&pid=ImgDetMain',
      rating: 4.5
    },
    {
      id: 2,
      title: 'The Night Circus',
      author: 'Erin Morgenstern',
      summary: 'A novel about a magical competition between two young illusionists, set in an enchanted circus.',
      coverUrl: 'https://johnesimpson.com/images/nightcircuscover.jpg',
      rating: 4.3
    },
    {
      id: 3,
      title: 'Normal People',
      author: 'Sally Rooney',
      summary: 'A story about the complex friendship and relationship between two teenagers from different backgrounds in modern-day Ireland.',
      coverUrl: 'https://media.s-bol.com/JlwK0GRNLMLy/81oXorg/548x840.jpg',
      rating: 4.2
    },
    {
      id: 4,
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      summary: 'A psychological thriller about a woman’s act of violence against her husband—and the therapist obsessed with uncovering her motive.',
      coverUrl: 'https://th.bing.com/th/id/OIP.KfGA6sIOwIv0Ba7k38WmIQHaLQ?rs=1&pid=ImgDetMain',
      rating: 4.6
    },
    {
      id: 5,
      title: 'Circe',
      author: 'Madeline Miller',
      summary: 'A retelling of the story of Circe, a goddess in Greek mythology who is banished by Zeus to a deserted island.',
      coverUrl: 'https://th.bing.com/th/id/R.0d8b716e1f75fa6de9419c1e05c69b5c?rik=oaqkaONGRK1XGg&pid=ImgRaw&r=0',
      rating: 4.4
    },
    {
      id: 6,
      title: 'Becoming',
      author: 'Michelle Obama',
      summary: 'In her memoir, Michelle Obama chronicles the experiences that have shaped her, from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work.',
      coverUrl: 'https://th.bing.com/th/id/OIP.e__NEYvJpiqMPy4lAR_zHgHaLQ?rs=1&pid=ImgDetMain',
      rating: 4.8
    }
  ];
  


const PopularPage = () => {
  return (
    <div>
      <h1>Popular Books</h1>
      <div className="book-container">
        {popularBooksDatabase.map(book => (
          <div key={book.id} className="book-item">
            <img src={book.coverUrl} alt={`Cover of ${book.title}`} className="book-cover" />
            <div className="book-info">
              <h2>{book.title}</h2>
              <h3>by {book.author}</h3>
              <p>{book.summary}</p>
              <p>Rating: {book.rating} / 5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPage;
