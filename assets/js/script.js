function show_more(event, id) {
    if (document.getElementById(id).classList.contains('h-100') == false) {
        document.getElementById(id).classList.add("h-100")
        event.target.innerHTML = "Show Less"
    } else {
        document.getElementById(id).classList.remove("h-100")
        event.target.innerHTML = "Show More"
    }
}
function linkActive(event) {
    var acat = document.getElementById("page-link-ul").getElementsByClassName('active')[0].classList.remove('active')
    event.target.parentElement.classList.add('active')
}