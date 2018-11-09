			AOS.init({
				easing: 'ease-out-back',
        duration: 1000,
        once: true, // whether animation should happen only once - while scrolling down
        mirror: true, // whether elements should animate out while scrolling past them
			});
//nav link ids
let ids = [{
    link: ".link--top",
    div: "#top"
  },
  {
    link: '.link--section__1',
    div: '#1',
  },
  {
    link: '.link--section__2',
    div: '#2',
  },
  {
    link: '.link--section__3',
    div: '#3',
  },
  {
    link: '.link--section__4',
    div: '#4',
  },
  {
    link: '.link--section__5',
    div: '#5',
  }
]

//generate onclicks
let lastClicked = null;
ids.map(id => {
  $(id.link).click(() => {
    lastClicked = id.div;
    if ($('.desktop-nav').is(":visible")) {
      $('html, body').animate({
        scrollTop: $(id.div).offset().top - 55
      }, 1000)
    } else {
      $('html, body').animate({
        scrollTop: $(id.div).offset().top
      }, 1000)
    }
  });
})
