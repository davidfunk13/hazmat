let toggle = false;
let currentWidth = window.screen.availWidth;
//onclick fires toggle nav
$('#closeNav').on('click', () => {
  return toggleNav();
});
$('#closeNav').on('touchstart', () => {
  return toggleNav();
});

//if orientation changes, this function will fire changing currentWidth in global scope
window.addEventListener("orientationchange", function () {
  console.log(`angle ${screen.orientation.angle}`)
  console.log(`last clicked : ${lastClicked}`)
  orientationHandler()
});
$(window).resize(function (e) {
  if (lastClicked === null) {
    console.log('is null')
    return
  } else {
    console.log('is not null')
    console.log(lastClicked)
    $('html, body').animate({
      scrollTop: $(lastClicked).offset().top
    }, 0)
  }

});
$('#menu-toggle').on('click', ()=>{
  toggleNav()
})
$('#menu-toggle').on('touchstart', ()=>{
  toggleNav()
})
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
  orientationHandler()
  //this is the opacity layer. needs to be on top z-index.
  document.getElementById('opacity').style.display = "none";
  //opacity layer. top z index
  document.getElementById('menu-toggle').style.display = "block";
}

//resize listener functions
function orientationHandler() {
  // if closed, open
  console.log(screen.orientation.angle)
  if (toggle === true) {

    if (screen.orientation.angle === 0) {
      console.log('vertical')
      document.getElementById("pushNav").style.width = "45%";

      document.getElementById("pushNav__container").style.transform = "translateX(44%)";
      //this pushes fixed video along with the rest of the document.
      document.getElementById("video").style.marginLeft = "45%";
    }
    if (screen.orientation.angle === 90) {
      console.log('horizontal')
      document.getElementById("pushNav").style.width = "30%";
      document.getElementById("pushNav__container").style.transform = "translateX(29%)";
      //this pushes fixed video along with the rest of the document.
      document.getElementById("video").style.marginLeft = "30%";
    }
    if (screen.orientation.angle === 270) {
      console.log('horizontal')
      document.getElementById("pushNav").style.width = "30%";
      document.getElementById("pushNav__container").style.transform = "translateX(30%)";
      //this pushes fixed video along with the rest of the document.
      document.getElementById("video").style.marginLeft = "30%";
    }
  }
  // if open, close
  if (toggle === false) {
    document.getElementById("pushNav").style.width = "0%";
    document.getElementById("pushNav__container").style.transform = "translateX(0%)";
    //this pushes fixed video along with the rest of the document.
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
