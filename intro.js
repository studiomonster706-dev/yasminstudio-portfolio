document.addEventListener("DOMContentLoaded", function () {

    const enterButton = document.querySelector(".enter-button");

    if (!enterButton) return;

    enterButton.addEventListener("click", function () {

        window.location.href = "home.html";

    });

});
