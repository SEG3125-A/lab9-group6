import React from 'react';

const BookDetailPage = () => {
    // Informations du livre définies localement
    const book = {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki and Sharon Lechter",
        summary: "Rich Dad Poor Dad is a personal finance book by Robert Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy, financial independence, and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence. The book is framed around Kiyosaki's two fathers: his biological father (the poor dad) and the father of his best friend (the rich dad). These two figures represent contrasting approaches to money management and financial education, providing the backdrop for Kiyosaki's financial advice and insights.",
        coverUrl: "https://www.deslegte.com/images/cached/resample/jpg/data/uploads/596/902/cms_visual_1481427.jpg_1601259530000_596x902.jpg"
    };

    return (
        <div>
            <h2>{book.title}</h2>
            <h3>par {book.author}</h3>
            <img src={book.coverUrl} alt={`Couverture du livre: ${book.title}`} style={{ width: '200px', height: 'auto' }} />
            <p>{book.summary}</p>
        </div>
    );
};

export default BookDetailPage;
