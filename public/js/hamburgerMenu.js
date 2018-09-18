let toggle = false;

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
}

function closeNav() {
  toggle = false;11
  document.getElementById("pushNav").style.width = "0";
  //this pushes sections and text
  document.getElementById("pushNav__container").style.marginLeft = "0";
  //this pushes fixed video along with the rest of the document
  document.getElementById("video").style.marginLeft = "0";
  //this is the opacity layer. needs to be on top z-index.
  document.getElementById('opacity').style.display = "none";
  //opacity layer. top z index
  document.getElementById('menu-toggle').style.display = "block";
}

function toggleNav() {
  console.log(toggle)
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
