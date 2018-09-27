let toggle = false;
let currentWidth = window.screen.availWidth;
//onclick fires toggle nav
$('#menu-toggle').on('click', () => {
  return toggleNav()
})

$('#closeNav').on('click', () => {
  return toggleNav();
});

//if orientation changes, orientation function fires.
window.addEventListener("orientationchange", function () {
  console.log(`angle ${Math.abs(window.orientation)}`)
  console.log(`last clicked : ${lastClicked}`)
  orientationHandler()
});


//open and close nav
function openNav() {
  //this pushes sections and text
  orientationHandler()
   //this is the opacity layer. needs to be on top z-index.
  //  document.getElementById('opacity').style.display = "block";
  //for the logo
  document.getElementById('menu-toggle').style.display = "none";
}

function closeNav() {
  // console.log($(lastClicked).offset().top)
  orientationHandler()
   //this is the opacity layer. needs to be on top z-index.
  //  document.getElementById('opacity').style.display = "none";
  //opacity layer. top z index
  document.getElementById('menu-toggle').style.display = "block";
}

//resize listener functions
function orientationHandler() {
  // TRUE means menu is currently OPEN

  console.log(Math.abs(window.orientation))
  if (toggle === true) {
    console.log('toggle true')
   
    if (lastClicked !== null) {
      console.log($(lastClicked).offset().top)
      $('html, body').animate({
        scrollTop: $(lastClicked).offset().top
      }, 0)
    }
    if (Math.abs(window.orientation) === 0) {
      console.log('vertical')
      //PORTRAIT MODE pushes elements that need to be pushed and exposes nav
      document.getElementById("pushNav").style.width = "45%";
      document.getElementById("pushNav__container").style.transform = "translateX(45%)";
      document.getElementById("video").style.marginLeft = "45%";
    }
    if (Math.abs(window.orientation) === 90) {
      console.log('horizontal')
      //LANDSCAPE MODE pushes elements that need to be pushed and exposes nav
      document.getElementById("pushNav").style.width = "25%";
      document.getElementById("pushNav__container").style.transform = "translateX(25%)";
      document.getElementById("video").style.marginLeft = "25%";
    }
  }
  // FALSE means menu is currently closed
  if (toggle === false) {
    console.log('toggle false')
    if (lastClicked !== null) {
      $('html, body').animate({
        scrollTop: $(lastClicked).offset().top
      }, 0)
    }
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
