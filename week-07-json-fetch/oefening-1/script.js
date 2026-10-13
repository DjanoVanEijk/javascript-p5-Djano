fetch('./books.json')
  .then(response => response.json())
  .then(books => {
    for (const book of books) {
      const bookElement = document.createElement('li');
      bookElement.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Auteur:</strong> ${book.author}</p>
        <p><strong>Jaar:</strong> ${book.year}</p>
      `;
      document.getElementById('books-list').appendChild(bookElement);
    }
  })
  .catch(error => console.error('Fout:', error));
