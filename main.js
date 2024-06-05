fetch('https://fakestoreapi.com/products?limit=10')
  .then(response => response.json())
  .then(data => createCards(data))
  .catch(error => console.error('Error fetching data:', error));

function createCards(users) {
  const container = document.querySelector('.cards');

  users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.classList.add("image")
    img.src = user.image

    const id = document.createElement('h1');
    id.textContent = `Id: ${user.id}`;

    const title = document.createElement('h2');
    title.textContent = `Title: ${user.title}`;

    const price = document.createElement('h3');
    price.textContent = `Price: $${user.price}`;

    const category = document.createElement('h3');
    category.textContent = `Category: ${user.category}`;

    card.append(img,id, title, price, category );

    container.appendChild(card);
  });
}