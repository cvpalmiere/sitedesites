const books = document.querySelectorAll('.book.interactive');
const cards = document.querySelectorAll('.info-card');

books.forEach(book => {
    book.addEventListener('click', () => {
        books.forEach(b => b.classList.remove('active'));
        cards.forEach(card => card.classList.remove('active-card'));
        book.classList.add('active');
        const targetId = book.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active-card');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

if (books.length > 0) {
    books[0].click();
}
