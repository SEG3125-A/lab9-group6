import React, { useState } from 'react';
import './SearchPage.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importez useTranslation

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { i18n } = useTranslation(); // Utilisez i18n pour le changement de langue
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log("Recherche pour:", searchQuery);
        navigate(`/book/${searchQuery}`);
    };

    // Fonction pour gérer le changement de langue
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="search-container">
            {/* Barre de navigation contenant le sélecteur de langue */}
            

            <input
                className="search-input"
                type="text"
                placeholder="Chercher un livre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            <button className="search-button" onClick={handleSearch}>Search</button>
            <div className="filter-buttons">
                 <button className="filter-button" onClick={() => navigate('/genre')}>Genre</button>
                <button className="filter-button" onClick={() => navigate('/author')}>Author</button>
                <button className="filter-button" onClick={() => navigate('/new-releases')}>New Releases</button>
                <button className="filter-button" onClick={() => navigate('/popular')}>Popular</button>
            </div>
        </div>
    );
};

export default SearchPage;
