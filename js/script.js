document.addEventListener('click', function(e) {
  const targetElement = e.target;

  if(targetElement.closest('.search-header__label')) {
    document.documentElement.classList.toggle('open')
    e.preventDefault();
  }
})

document.addEventListener('click', function(e) {
  const targetElement = e.target;

  if(targetElement.closest('.nav-header__burger')) {
    document.documentElement.classList.toggle('open-burger')
    e.preventDefault();
  }
})
