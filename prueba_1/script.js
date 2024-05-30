document.getElementById("settings-btn").addEventListener("click", function() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});

document.addEventListener("click", function(event) {
    var isClickInside = document.getElementById("settings-btn").contains(event.target);
    if (!isClickInside) {
        document.getElementById("dropdown").style.display = "none";
    }
});

function redireccionar() {
    var seleccion = document.getElementById("period-select");
    var url = seleccion.value;
    if (url) {
        window.location.href = url;
    }
}