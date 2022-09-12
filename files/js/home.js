
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('hero-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'files/json/hero.json'
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

    function removeHash () { 
      setTimeout(function () {
        history.replaceState(null, null, ' ');
      }, 100);
    }

    carouselTriggers.forEach(trigger =>{
      trigger.addEventListener('click', (e)=> {
        removeHash();
        toggleClasses(e.currentTarget);
      })
    })