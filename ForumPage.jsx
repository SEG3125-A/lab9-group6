import React from 'react';
import './ForumPage.css'; // Assurez-vous que le chemin est correct

const forumTopics = [
  {
    id: 1,
    title: 'How to Choose the Perfect Book Title',
    summary: 'Discuss strategies for picking a title that’s both catchy and meaningful.',
  },
  {
    id: 2,
    title: 'Tips for Writing Your First Novel',
    summary: 'Share advice and lessons learned from writing and completing your first novel.',
  },
  {
    id: 3,
    title: 'Overcoming Writer’s Block: Strategies That Work',
    summary: 'Explore effective ways to break through creative blocks and keep writing.',
  },
  // Ajoutez d'autres sujets selon vos besoins
];

const ForumPage = () => {
  return (
    <div className="forum-container">
      <h1>Forum Topics</h1>
      <div className="topics-container">
        {forumTopics.map((topic) => (
          <div key={topic.id} className="topic-item">
            <h2>{topic.title}</h2>
            <p>{topic.summary}</p>
            {/* Vous pouvez ajouter ici des boutons ou des liens pour rejoindre la discussion */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
