$(document).ready(function () {
    const navContent = $(".header");
    fetch("../../navbar.html")
        .then((res) => res.text()).then((data) => { navContent.innerHTML = data; });
});
