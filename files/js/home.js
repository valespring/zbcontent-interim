    let development = false;
    let filePath = development ? 'files/' : 'home-22/files/';

    const timeToCheck = 250;

    var animation = bodymovin.loadAnimation({
      container: document.getElementById('hero-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `${filePath}json/hero.json`
    });

    // Carousel Support
    const carouselTriggers = document.querySelectorAll('.js-carousel-trigger');

    function toggleClasses(currentItem = false) {
      const activeItem = Array.from(carouselTriggers).filter(trigger=>{
        return trigger.classList.contains('active');
      })[0];

      if (!currentItem) {
        return;
      }

      if (activeItem) {
        activeItem.classList.remove('active');
      }

      currentItem.classList.add('active');
    }

    function windowFuncs (e) { 
      let target = e.currentTarget.getAttribute('href');
      let url = `${window.location.origin}${target}`;

      location.hash = target;

      setTimeout(function () {
        history.replaceState(null, null, ' ');
      }, timeToCheck);
    }

    function checkOffset(e) {
        const carouselViewport = document.querySelector('.carousel__viewport');

        let target = e.currentTarget.getAttribute('href');
        let targetElement = document.getElementById(target.split('#')[1]);

        // Additional check if anchor fails
        setTimeout(function () {
          if (carouselViewport.scrollLeft != targetElement.offsetLeft) {
            carouselViewport.scrollLeft = targetElement.offsetLeft;
          }
         }, timeToCheck);
    }

    carouselTriggers.forEach(trigger =>{
      trigger.addEventListener('click', (e)=> {
        windowFuncs(e);
        checkOffset(e);
        toggleClasses(e.currentTarget);
      })
    })