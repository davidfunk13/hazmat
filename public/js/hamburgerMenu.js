function openNav() {
    document.getElementById("pushNav").style.width = "150px";
    //this pushes sections and text
    document.getElementById("pushNav__container").style.marginLeft = "150px";
    //this pushes fixed video along with the rest of the document.
    document.getElementById("video").style.marginLeft = "150px";
    //this is the opacity layer. needs to be on top z-index.
    document.getElementById('opacity').style.display = "block";
}

function closeNav() {
    document.getElementById("pushNav").style.width = "0";
    //this pushes sections and text
    document.getElementById("pushNav__container").style.marginLeft= "0";
    //this pushes fixed video along with the rest of the document
    document.getElementById("video").style.marginLeft= "0";
    //this is the opacity layer. needs to be on top z-index.
    document.getElementById('opacity').style.display = "none";
}

let toggle = false;
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