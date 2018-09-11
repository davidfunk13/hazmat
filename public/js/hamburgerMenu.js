function openNav() {
    document.getElementById("hamburger").style.width = "250px";
    // document.getElementById("container").style.marginLeft = "250px";
    document.body.style.marginLeft = "250px";
    document.getElementById("opacity").style.display = "block";
}

function closeNav() {
    document.getElementById("hamburger").style.width = "0";
    // document.getElementById("container").style.marginLeft = "0";
    document.body.style.marginLeft = "0";
    document.getElementById("opacity").style.display = "none";
}