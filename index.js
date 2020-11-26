function activate(x) {
    document.getElementsByClassName("active")[0].className = "nav__link";
    x.className += " active";
}
function handleClick(event) {

    console.log(event);
    const ele = event.className;
    if (ele === "far fa-heart") {
        event.className = "fas fa-heart";
        event.style.color = "crimson";
        event.style.fontSize = "22px";
    }
    else {
        event.className = "far fa-heart";
        event.style.color = "#333";
        event.style.fontSize = "20px";
    }

}

function handleCart(event){
    console.log(event);

    event.style.color="#747589";
}

function check(event) {
    console.log(event);
    var x = document.getElementById('ratingForm');
    for (var i = 0; i < event.value; i++) {
        x[i].checked = true;
    }
}