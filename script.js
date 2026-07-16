// Search Functionality
const searchBox = document.querySelector("input");
const cards = document.querySelectorAll(".card");

searchBox.addEventListener("keyup", function () {
    const value = searchBox.value.toLowerCase();

    cards.forEach(card => {
        const stockName = card.querySelector("h3").textContent.toLowerCase();

        if (stockName.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Watchlist
const watchlistButtons = document.querySelectorAll(".watchlist-btn");

watchlistButtons.forEach(button => {
    button.addEventListener("click", function () {

        if (button.textContent.includes("Added")) {
            button.textContent = "Add to Watchlist ⭐";
            button.style.background = "#22c55e";
        } else {
            button.textContent = "⭐ Added";
            button.style.background = "#f59e0b";
        }

    });
});

// Popup
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");

cards.forEach(card => {
    card.addEventListener("click", () => {
        document.getElementById("stockName").textContent =
            card.querySelector("h3").textContent;

        document.getElementById("stockPrice").textContent =
            card.querySelector("p").textContent;

        popup.style.display = "block";
    });
});

function updateClock() {
    const now = new Date();

    const date = now.toLocaleDateString("en-GB");
    const time = now.toLocaleTimeString();

    document.getElementById("clock").textContent = date + " " + time;
}

setInterval(updateClock, 1000);
updateClock();
setInterval(updateClock, 1000);
updateClock();
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️ Light";
    } else {
        themeBtn.textContent = "🌙 Dark";
    }
});