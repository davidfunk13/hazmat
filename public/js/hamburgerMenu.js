let toggle = false;
// let currentWidth = window.screen.availWidth;
//onclick fires toggle nav
$('#menu-toggle').on('click', (e) => {
  e.preventDefault()
  return toggleNav()
})

$('#closeNav').on('click', (e) => {
  e.preventDefault()
  return toggleNav();
});

//if orientation changes, orientation function fires.
$(window).resize(() => {
  //run orientation handle function first, as to not obscure results from media queries
  orientationHandler()
  //screen size 
  if ($(window).width() >= 1024) {
    console.log('desktop')
    toggle = false;
    desktop()
  }
  if ($(window).width() <= 1023) {
    console.log('mobile')
    mobile()
  }

});

function desktop() {
  closeNav()
  document.getElementById('menu-toggle').style.display = "none";
 

  document.querySelector('.desktop-nav').style.display = "flex";
    document.getElementById('opacity').style.display = "none";
  // document.getElementById("pushNav").style.width = "0%";
  // document.getElementById("pushNav__container").style.transform = "translateX(0%)";
  // document.getElementById("video").style.marginLeft = "0%";
// toggle = false
}

function mobile() {
  document.querySelector('.desktop-nav').style.display = "none";
  document.getElementById('menu-toggle').style.display = "block";
  // document.getElementById('opacity').style.display = "none";
  // document.getElementById("pushNav__container").style.transform = "translateX(0%)";
  // closeNav()
}
//open and close nav
function openNav() {
  //this pushes sections and text
  orientationHandler()
  //this is the opacity layer. needs to be on top z-index.
  document.getElementById('opacity').style.display = "block";
  //for the logo
  document.getElementById('menu-toggle').style.display = "none";
}

function closeNav() {
  // console.log($(lastClicked).offset().top)
  // console.log('closing')
  orientationHandler()
  //this is the opacity layer. needs to be on top z-index.
  document.getElementById('opacity').style.display = "none";

  //opacity layer. top z index
  document.getElementById('menu-toggle').style.display = "block";
}

//resize listener functions
function orientationHandler() {
  screenOrientation = ($(window).width() > $(window).height()) ? 90 : 0;
  console.log(screenOrientation)
  // TRUE means menu is currently OPEN
  if (toggle === true) {
    // console.log('hit')
    if (lastClicked !== null) {
      $('html, body').animate({
        scrollTop: $(lastClicked).offset().top
      }, 0)
    }
    console.log(window.orientation)
    if (screenOrientation === 0) {
      //PORTRAIT MODE pushes elements that need to be pushed and exposes nav
      document.getElementById("pushNav").style.width = "45%";
      document.getElementById("pushNav__container").style.transform = "translateX(45%)";
      document.getElementById("video").style.marginLeft = "45%";
    }
    if (screenOrientation === 90) {
      //LANDSCAPE MODE pushes elements that need to be pushed and exposes nav
      document.getElementById("pushNav").style.width = "25%";
      document.getElementById("pushNav__container").style.transform = "translateX(25%)";
      document.getElementById("video").style.marginLeft = "25%";
    }
  }
  // FALSE means menu is currently closed
  if (toggle === false) {
    // console.log('hit')
    // if (lastClicked !== null) {
    //   $('html, body').animate({
    //     scrollTop: $(lastClicked).offset().top
    //   }, 0)
    // }
    // resets pushed elements back to their normal position
    document.getElementById("pushNav").style.width = "0%";
    document.getElementById("pushNav__container").style.transform = "translateX(0%)";
    document.getElementById("video").style.marginLeft = "0%";
  }
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
