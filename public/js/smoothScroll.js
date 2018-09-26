// var fixed = document.getElementById('video');

// fixed.addEventListener('touchmove', function(e) {

//         e.preventDefault();

// }, false);
//nav link ids
let ids = [{
    link: "#link--top",
    div: "#top"
  },
  {
    link: '#link--section__1',
    div: '#1',
  },
  {
    link: '#link--section__2',
    div: '#2',
  },
  {
    link: '#link--section__3',
    div: '#3',
  },
  {
    link: '#link--section__4',
    div: '#4',
  }
]
//generate onclicks
let lastClicked = null;
ids.map(id => {
  $(id.link).click(() => {
    lastClicked = id.div;
    console.log(`Changed lastClicked to ${lastClicked}`)
    $('html, body').animate({
      scrollTop: $(id.div).offset().top
    }, 1000)
  });
})
