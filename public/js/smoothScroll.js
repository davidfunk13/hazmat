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
ids.map(id => {
  $(id.link).click(function () {
    $('html, body').animate({
      scrollTop: $(id.div).offset().top
    }, 1000)
  });
})
//figuring out menu container problems
let oldY = null;
$('#menu-toggle').on('click', () =>{
  oldY = window.pageYOffset
  console.log(`Y coordinates on open:  ${window.pageYOffset}`)
})
$('.closebtn').on('click', () => {
  console.log(`Old Y coordinates to scroll to when closing!!!: ${oldY}`)
  console.log(`Y coordinates on close:  ${window.pageYOffset}`)
})
