import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchPage from './SearchPage';
import CommunicatingPage from './CommunicatingPage';
import BookDetailPage from './BookDetailPage';
// Importez les composants pour les nouvelles pages que vous allez ajouter
import GenrePage from './GenrePage'; // Assurez-vous de créer ce composant
import AuthorPage from './AuthorPage'; // Assurez-vous de créer ce composant
import NewReleasesPage from './NewReleasesPage'; // Assurez-vous de créer ce composant
import PopularPage from './PopularPage'; // Assurez-vous de créer ce composant
import './App.css'; // Assurez-vous que ce chemin est correct
import ForumPage from './ForumPage'; // Vérifiez le chemin d'accès
import Navbar from './Navbar';


function App() {
  return (
    <Router>
      <div>
        <Link to="/" className="nav-link">SearchPage</Link>
        <Navbar /> {/* Ceci inclut le sélecteur de langue sur chaque page */}

        
        

        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/communicate" element={<CommunicatingPage />} />
          <Route path="/book/:searchQuery" element={<BookDetailPage />} />
          <Route path="/genre" element={<GenrePage />} />
          <Route path="/author" element={<AuthorPage />} />
          <Route path="/new-releases" element={<NewReleasesPage />} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/forum" element={<ForumPage />} />






          {/* Ajoutez d'autres routes ici selon vos besoins */}
        </Routes>
      </div>
    </Router>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;
