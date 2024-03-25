import React, { useState } from 'react';

import './CommunicatingPage.css'; // Assurez-vous que le chemin est correct
import { useNavigate } from 'react-router-dom'; // Importez useNavigate

const CommunicatingPage = () => {
    const navigate = useNavigate(); // Initialisez useNavigate ici

    // Définissez handleNavigate pour qu'elle prenne un chemin en paramètre et utilise navigate pour changer de page
    const handleNavigate = (path) => {
        navigate(`/${path}`);
    };

    return (
        <div className="filter-buttons">
            <button className="filter-button" onClick={() => handleNavigate('forum')}>Forum</button>
            <button className="filter-button" onClick={() => handleNavigate('chat')}>Chat</button>
            {/* Assurez-vous d'implémenter la route /chat ou de la modifier selon vos besoins */}
        </div>
    );
};

export default CommunicatingPage;
