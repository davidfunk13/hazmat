function openNav() {
    document.getElementById("hamburger").style.width = "250px";
    // document.getElementById("container").style.marginLeft = "250px";
    document.body.style.marginLeft = "250px";
    document.getElementById("opacity").style.display = "block";
    document.getElementById('nav-logo').setAttribute('src', '/img/fixed-logo.png');
}

function closeNav() {
    document.getElementById("hamburger").style.width = "0";
    // document.getElementById("container").style.marginLeft = "0";
    document.body.style.marginLeft = "0";
    document.getElementById("opacity").style.display = "none";
    document.getElementById('nav-logo').setAttribute('src', '/img/nav-logo.png');
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