let ids = [
  {
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
ids.map(id => {
  console.log(id);
  $(id.link).click(function() {
    $('html, body').animate({scrollTop: $(id.div).offset().top}, 1000)
  });
})
