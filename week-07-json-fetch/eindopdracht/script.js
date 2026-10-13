let allArticles = [];

const showArticles = (articles) => {
  const container = document.getElementById('articles')
  
    container.innerHTML = articles.map(article => `
    <article>
      <h2>${article.title}</h2>
      <p><strong>${article.category}</strong></p>
      <p>${article.summary}</p>
    </article>
  `).join('');
};

fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
      allArticles = articles;
    showArticles(allArticles);
  })
  .catch(error => console.error('Fout bij laden:', error));

  const filterByCategory = (category) => {
  const filteredArticles =
    category === 'Alle'
      ? allArticles
      : allArticles.filter(article => article.category === category);

  showArticles(filteredArticles);
};


document.getElementById('filter-alle').addEventListener('click', () => {
  filterByCategory('Alle');
});

document.getElementById('filter-stad').addEventListener('click', () => {
  filterByCategory('Stad');
});

document.getElementById('filter-technologie').addEventListener('click', () => {
  filterByCategory('Technologie');
});

document.getElementById('filter-media').addEventListener('click', () => {
  filterByCategory('Media');
});