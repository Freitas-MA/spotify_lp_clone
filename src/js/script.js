// Check if DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const navbar = document.getElementById('navbar');
  const rotate = document.getElementById('rotate-img');
// Traking scroll position
  function getVisibleScrollPercentage() {
    const totalHeight = body.scrollHeight - body.clientHeight;
    console.log(totalHeight, 'total height');
    const scrollPosition = body.scrollTop;
    console.log(scrollPosition, 'scroll position');
    return (scrollPosition / totalHeight) * 100;
  }
// Verifying if element is visible
  function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const visiblePercentage = getVisibleScrollPercentage();
    const elementHeight = rect.bottom - rect.top;
    const visibleHeight = windowHeight * (visiblePercentage / 100);
    return visibleHeight >= elementHeight;
  }
//  
  body.addEventListener('scroll', () => {
    const scrollPercentage = getVisibleScrollPercentage();
    console.log(scrollPercentage, 'posição do scroll');
    if (scrollPercentage > 2) {
      console.log('entrou');
      navbar.classList.add('scrolled');
      navbar.classList.remove('navbar-transparent');

    } 
    if (scrollPercentage < 2) {
      navbar.classList.remove('scrolled');
      navbar.classList.add('navbar-transparent');
    }
    if (scrollPercentage > 45) {
      rotate.classList.remove('reverse-rotate-and-fade');
      rotate.classList.add('rotate-and-fade');
    }
    if (scrollPercentage < 45) {
      rotate.classList.remove('rotate-and-fade');
      rotate.classList.add('reverse-rotate-and-fade');
    }
  });
});

function logWindowWidth() {
  const width = window.innerWidth;
  console.log(`Window width: ${width}px`);
  const device = {
    mobile: width < 768,
    tablet: width >= 768 && width < 992,
    desktop: width >= 992
  }
  console.log(device);
}

window.addEventListener('resize', logWindowWidth);