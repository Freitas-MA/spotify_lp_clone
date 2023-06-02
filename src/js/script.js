// Check if DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const navbar = document.querySelector('#navbar');
  const rotate = document.querySelector('#rotate-img');
  const album = document.querySelectorAll('.img-album');

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

    // Add or remove classes on the album depending on scroll position
    album.forEach((album, index) => {
      if (isElementVisible(album)) {
        console.log(`Album ${index + 1} is visible`);
        album.classList.add('album-animation');
        album.classList.remove('album-noAnimation');
      } 
    });
    function isElementVisible(element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visiblePercentage = getVisibleScrollPercentage();
      const elementHeight = rect.bottom - rect.top;
      const visibleHeight = windowHeight * (visiblePercentage / 100);
      if (window.innerWidth < 768) {
        return rect.top <= windowHeight && rect.bottom >= 0;
      } else {
        return visibleHeight >= elementHeight;
      }
    }
    // Add or remove classes on the rotate element depending on scroll position
    if (isElementVisible(rotate)) {
      console.log('Rotate is visible');
      if (!rotate.classList.contains('rotate-and-fade')) {
        console.log('Rotate does not have rotate-and-fade class');
        rotate.classList.remove('reverse-rotate-and-fade');
        rotate.classList.add('rotate-and-fade');
      }
    } 
  });

  // Check if the first album is visible on page load and add the animation classes to it
  if (isElementVisible(album[0])) {
    console.log('Album 1 is visible');
    album[0].classList.add('album-animation');
    album[0].classList.remove('album-noAnimation');
  }
});

// Log the window width and device type on resize events
function logWindowWidth() {
  const width = window.innerWidth;
  console.log(`Window width: ${width}px`);
  const device = {
    xxs: width < 360,
    xs: width >= 360 && width < 576,
    mobile: width >= 576 && width < 768,
    tablet: width >= 768 && width < 992,
    desktop: width >= 992
  }
  console.log(device);
}

window.addEventListener('resize', logWindowWidth);