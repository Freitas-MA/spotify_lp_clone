// Check if DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const navbar = document.querySelector('#navbar');
  const rotate = document.querySelector('#rotate-img');
  const albums = document.querySelectorAll('.album');

  // Traking scroll position
  function getVisibleScrollPercentage() {
    const totalHeight = body.scrollHeight - body.clientHeight;
    const scrollPosition = body.scrollTop;
    return Math.round((scrollPosition / totalHeight) * 100);
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

  // Listen for scroll events on the body
  body.addEventListener('scroll', () => {
    const scrollPercentage = getVisibleScrollPercentage();
    console.log(`Scroll percentage: ${scrollPercentage}%`);

    // Add or remove classes on the navbar depending on scroll position
    if (scrollPercentage > 2) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('navbar-transparent');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('navbar-transparent');
    }

    // Add or remove classes on the albums depending on scroll position
    albums.forEach(album => {
      if (isElementVisible(album)) {
        album.classList.add('album-animation');
        album.classList.remove('album-noAnimation');
      } else {
        album.classList.remove('album-animation');
        album.classList.add('album-noAnimation');
      }
    });

    // Add or remove classes on the rotate element depending on scroll position
    if (isElementVisible(rotate)) {
      console.log('Rotate is visible');
      if (!rotate.classList.contains('rotate-and-fade')) {
        rotate.classList.remove('reverse-rotate-and-fade');
        rotate.classList.add('rotate-and-fade');
      }
    } else {
      if (!rotate.classList.contains('reverse-rotate-and-fade')) {
        rotate.classList.remove('rotate-and-fade');
        rotate.classList.add('reverse-rotate-and-fade');
      }
    }
  });
});

// Log the window width and device type on resize events
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