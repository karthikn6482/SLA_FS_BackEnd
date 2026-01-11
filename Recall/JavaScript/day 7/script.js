const circle1 = document.createElement('div');
circle1.className = 'circle one';

const circle2 = document.createElement('div');
circle2.className = 'circle two';

const card = document.createElement('div');
card.className = 'card';

const title = document.createElement('h1');
title.textContent = 'JavaScript Website';

const text = document.createElement('p');
text.textContent = 'This website is powered using JavaScript.';

const btn = document.createElement('button');
btn.textContent = 'Click Me';

btn.addEventListener('click', () => {
  title.textContent = 'Button Clicked!';
  text.textContent = 'Content updated dynamically using JavaScript.';
  card.style.background = 'rgba(0,0,0,0.45)';
});

card.append(title, text, btn);
document.body.append(circle1, circle2, card);
