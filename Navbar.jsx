// Navbar.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav className="navbar">
      <select className="language-select" onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
      {/* Ajoutez d'autres liens ou éléments de navigation ici si nécessaire */}
    </nav>
  );
};

export default Navbar;
