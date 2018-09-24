let toggle = false;
let currentWidth = window.screen.availWidth;
//onclick fires toggle nav
$('#closeNav').on('click', () => {
  return toggleNav();
});
//if orientation changes, this function will fire changing currentWidth in global scope
$(window).resize(function () {

  currentWidth = window.screen.availWidth;
  console.log(lastClicked)
  if (lastClicked === null) {
    console.log(`Widow Resized or Re-oriented. lastClicked is currently ${lastClicked}`)
  }
  else {
    console.log(`hit. lastClick: ${lastClicked}`);
    $('html, body').animate({
      scrollTop: $(lastClicked).offset().top
    }, 0)
  }
});

$(window).on('orientationchange', (e) => {
  if (toggle === true && e.target.innerWidth === 360) {
    // document.getElementById("pushNav__container").style.transform = "translateX(23%)";
    $('#pushNav__container').css({
      'transition': 'none',
      'transform': 'translate(23%)'
    })
  }
  if (toggle === true && e.target.innerWidth === 640) {
    $('#pushNav__container').css({
      'transition': '.5s',
      'transform': 'translateX(41%)'
    })
    // document.getElementById("pushNav__container").style.transform = "translateX(41%)";
  }
});

function openNav() {
  if ($('#pushNav__container').css('transition') === 'none 0s ease 0s') {
    $('#pushNav__container').css({
      'transition': 'all .5s ease 0s'
    })
  }
  toggle = true;
  document.getElementById("pushNav").style.width = "150px";
  //this pushes sections and text
  console.log(currentWidth)
  if (currentWidth === 360) {
    document.getElementById("pushNav__container").style.transform = "translateX(41%)";
  };
  if (currentWidth === 640) {
    document.getElementById("pushNav__container").style.transform = "translateX(23%)";
  };
  //this pushes fixed video along with the rest of the document.
  document.getElementById("video").style.marginLeft = "150px";
  //this is the opacity layer. needs to be on top z-index.
  document.getElementById('opacity').style.display = "block";
  //for the logo
  document.getElementById('menu-toggle').style.display = "none";
}

function closeNav() {
  toggle = false;
  document.getElementById("pushNav").style.width = "0";
  //this pushes sections and text
  document.getElementById("pushNav__container").style.transform = "translateX(0%)";
  //this pushes fixed video along with the rest of the document
  document.getElementById("video").style.marginLeft = "0";
  //this is the opacity layer. needs to be on top z-index.
  document.getElementById('opacity').style.display = "none";
  //opacity layer. top z index
  document.getElementById('menu-toggle').style.display = "block";
}

function toggleNav() {
  switch (toggle) {
    case true:
      toggle = false;
      return closeNav()
    case false:
      toggle = true;
      return openNav()
    default:
      return "something went wrong"
  }
}
