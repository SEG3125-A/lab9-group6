import React, { useState } from 'react';
import './AuthorPage.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct

// Supposons que vous avez déjà défini votre base de données d'auteurs comme ceci :
const authorDatabase = [
    {
        id: 1,
        name: 'Robert T. Kiyosaki',
        bio: 'Author of "Rich Dad Poor Dad", Robert Kiyosaki is an entrepreneur and financial educator.',
        imageUrl: 'https://th.bing.com/th/id/R.9a8de8acd3ef1153d004894bef0a720f?rik=XrcF%2fQy4QNx%2fTA&pid=ImgRaw&r=0'
    },
    {
        id: 2,
        name: 'J.K. Rowling',
        bio: 'Known for writing the Harry Potter series, J.K. Rowling is one of the world\'s most famous authors.',
        imageUrl: 'https://th.bing.com/th/id/OIP.BDBcFqFJu4MICed0NhLoMQHaIh?rs=1&pid=ImgDetMain'
    },
    {
    id: 3,
    name: 'Malcolm Gladwell',
    bio: 'Author of bestsellers on sociology, psychology, and social science.',
    imageUrl: 'https://th.bing.com/th/id/R.99cc69ff1e141a525b0b1e7e0682f7c3?rik=1FxQIOId3Q3rTA&riu=http%3a%2f%2fstatic2.businessinsider.com%2fimage%2f54499aab69bedd955d264091%2fmalcolm-gladwell-reveals-the-personality-trait-thats-made-him-so-successful.jpg&ehk=ccBW5yGqp2U7ncsAEQ9Zi6s5DtQS0YW0nKjHZuJxAiQ%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 4,
    name: 'George Orwell',
    bio: 'Known for his novels "1984" and "Animal Farm", Orwell critiqued politics and society.',
    imageUrl: 'https://th.bing.com/th/id/OIP.RfIU6kODllXoyzoyhBawoQHaGL?rs=1&pid=ImgDetMain'
  },
  {
    id: 5,
    name: 'Agatha Christie',
    bio: 'Known as the "Queen of Crime", Christie authored numerous detective novels.',
    imageUrl: 'https://th.bing.com/th/id/R.562bf9339553590152b7c4a1c35549d9?rik=pAfNe7lti7LNkQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-5HZXq3byWus%2fUSYlOAEMdOI%2fAAAAAAAAADI%2fHS5o-Yxc97E%2fs1600%2fagatha-christie.jpg&ehk=fObIS%2b7Lvj9fSETZCZeNV0%2bkUCwg6KQHX5JB7uL59Og%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 6,
    name: 'Stephen King',
    bio: 'Prolific author known for his contributions to horror, fantasy, and supernatural fiction.',
    imageUrl: 'https://th.bing.com/th/id/R.bc11fb2e2257a3a9c4cd9ad375bd2650?rik=wOBzkJmQbEC1Tg&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f20100000%2fStephen-King-stephen-king-20117261-1980-2560.jpg&ehk=OBhk5HQuPcRMrbZRMbwhrJivouIzjG42rh%2biPWP6r3E%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 7,
    name: 'Toni Morrison',
    bio: 'Nobel Prize laureate, Morrison is famed for her novels exploring the African American experience.',
    imageUrl: 'https://th.bing.com/th/id/OIP.ceriidYCIWwZk45antOl4QHaLF?rs=1&pid=ImgDetMain'
  }
];
const AuthorPage = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleAuthorSelection = (author) => {
    setSelectedAuthor(author);
  };

  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authorDatabase.map((author) => (
          <li key={author.id} onClick={() => handleAuthorSelection(author)} className="author-list-item">
            {author.name}
          </li>
        ))}
      </ul>
      {selectedAuthor && (
        <div className="author-details">
          <h2>{selectedAuthor.name}</h2>
          <p>{selectedAuthor.bio}</p>
          <img src={selectedAuthor.imageUrl} alt={`Portrait of ${selectedAuthor.name}`} style={{ width: '200px', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default AuthorPage;
