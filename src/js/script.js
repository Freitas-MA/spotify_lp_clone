document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const navbar = document.getElementById('navbar');

  function getVisibleScrollPercentage() {
    const totalHeight = body.scrollHeight - body.clientHeight;
    console.log(totalHeight, 'total height');
    const scrollPosition = body.scrollTop;
    console.log(scrollPosition, 'scroll position');
    return (scrollPosition / totalHeight) * 100;
  }

  body.addEventListener('scroll', () => {
    const scrollPercentage = getVisibleScrollPercentage();
    console.log(scrollPercentage, 'posição do scroll');
    if (scrollPercentage > 2) {
      console.log('entrou');
      navbar.classList.add('scrolled');
      navbar.classList.remove('navbar-transparent');

    } if (scrollPercentage < 2) {
      navbar.classList.remove('scrolled');
      navbar.classList.add('navbar-transparent');
    }
  });
});

function logWindowWidth() {
  const width = window.innerWidth;
  console.log(`Window width: ${width}px`);
}

window.addEventListener('resize', logWindowWidth);