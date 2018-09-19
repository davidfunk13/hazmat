let toggle = false;
let section1ShapeContainer = document.getElementsByClassName('section__1__shapecontainer');
let section1Shapes = document.getElementsByClassName('section__1__shapecontainer--shape')

function openNav() {
  toggle = true;
  document.getElementById("pushNav").style.width = "150px";
  //this pushes sections and text
  document.getElementById("pushNav__container").style.marginLeft = "150px";
  //this pushes fixed video along with the rest of the document.
  document.getElementById("video").style.marginLeft = "150px";
  //this is the opacity layer. needs to be on top z-index.
  document.getElementById('opacity').style.display = "block";
  //for the logo
  document.getElementById('menu-toggle').style.display = "none";
  //make section__1 a column when menu is open
  document.getElementById('1-flex-toggle').style.flexFlow = "column";
  //resizes section 1 shapes on toggle nav
  for (var i = 0; i < section1Shapes.length; i++) {
    section1Shapes[i].style.width = "3rem";
    section1Shapes[i].style.height = "3rem";
    section1Shapes[i].style.marginBottom = "0rem";
  }
  section1Shapes[1].style.marginRight = '1rem';
  section1Shapes[1].style.marginLeft = '1rem';
  //toggles flex for section 1 shape container
  section1ShapeContainer[0].style.flexDirection = 'row';
}

function closeNav() {
  toggle = false;
  document.getElementById("pushNav").style.width = "0";
  //this pushes sections and text
  document.getElementById("pushNav__container").style.marginLeft = "0";
  //this pushes fixed video along with the rest of the document
  document.getElementById("video").style.marginLeft = "0";
  //this is the opacity layer. needs to be on top z-index.
  document.getElementById('opacity').style.display = "none";
  //opacity layer. top z index
  document.getElementById('menu-toggle').style.display = "block";
  //make section__1 a row again when menu is closed
  document.getElementById('1-flex-toggle').style.flexFlow = "row wrap";
  //resizes section 1 shapes on toggle nav
  for (var i = 0; i < section1Shapes.length; i++) {
    section1Shapes[i].style.width = "7rem";
    section1Shapes[i].style.height = "7rem";
    section1Shapes[i].style.marginBottom = "1rem";
  }
  section1Shapes[1].style.marginRight = '0rem';
  section1Shapes[1].style.marginLeft = '0rem';
  //toggles flex for section 1 shape container
  section1ShapeContainer[0].style.flexDirection = 'column';
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
