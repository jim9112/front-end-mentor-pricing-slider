const slider = document.querySelector('.slider');
const pageViews = document.querySelector('.page-views');
pageViews.textContent = slider.value;
slider.addEventListener('change', (e) => pageViews.textContent = e.currentTarget.value)
