// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dynamic News Section
fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=YOUR_API_KEY')
  .then(response => response.json())
  .then(data => {
    const newsContainer = document.getElementById('news-container');
    data.articles.forEach(article => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
      newsItem.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <a href="${article.url}" target="_blank">Read More</a>
      `;
      newsContainer.appendChild(newsItem);
    });
  });

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out!');
});
