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
  }
]

//generate onclicks
let lastClicked = null;
ids.map(id => {
  $(id.link).click(() => {
    lastClicked = id.div;
    $('html, body').animate({
      scrollTop: $(id.div).offset().top
    }, 1000)
  });
})
