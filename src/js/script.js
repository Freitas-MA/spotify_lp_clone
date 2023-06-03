  const body = document.body;
  const navbar = document.querySelector('#navbar');
  const rotate = document.querySelector('#rotate-img');
  const album = document.querySelectorAll('.img-album');

  function getVisibleScrollPercentage() {
    const totalHeight = body.scrollHeight - body.clientHeight;
    const scrollPosition = body.scrollTop;
    return Math.round((scrollPosition / totalHeight) * 100);
  }

  function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const visiblePercentage = getVisibleScrollPercentage();
    const elementHeight = rect.bottom - rect.top;
    const visibleHeight = windowHeight * (visiblePercentage / 100);
    const buffer = 100;
    if (window.innerHeight < 900) {
      return rect.top <= windowHeight - buffer && rect.bottom >= 0;
    } else {
      return rect.bottom >= 0 && rect.bottom <= windowHeight + elementHeight / 2 - buffer;
    }
  }

  function handleScroll() {
    const scrollPercentage = getVisibleScrollPercentage();

    if (scrollPercentage > 2) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('navbar-transparent');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('navbar-transparent');
    }

    album.forEach((album, index) => {
      if (isElementVisible(album) && !album.classList.contains('album-animation')) {
        album.classList.add('album-animation');
        album.classList.remove('album-noAnimation');
      }
    });

    if (isElementVisible(rotate) && !rotate.classList.contains('rotate-and-fade')) {
      rotate.classList.remove('reverse-rotate-and-fade');
      rotate.classList.add('rotate-and-fade');
    }
  }

  body.addEventListener('scroll', handleScroll);

  function logWindowWidth() {
    const width = window.innerWidth;
    const device = {
      xxs: width < 360,
      xs: width >= 360 && width < 576,
      mobile: width >= 576 && width < 768,
      tablet: width >= 768 && width < 992,
      desktop: width >= 992
    }
  }