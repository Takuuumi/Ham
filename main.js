document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("menuB").addEventListener("click", function() {
        this.classList.toggle("active");
        document.getElementById("nav").classList.toggle("active");
    })
});