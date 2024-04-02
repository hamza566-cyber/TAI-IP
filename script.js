const filterButtons = document.querySelectorAll(".main-container button");
const filterableCards = document.querySelectorAll(".Filterable-card .card");

const filterCard = e => {
    const filterValue = e.target.dataset.name;

    filterButtons.forEach(button => button.classList.remove("active"));
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        const cardCategory = card.dataset.name;

        if (filterValue === "all" || cardCategory === filterValue) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
};

filterButtons.forEach(button => button.addEventListener("click", filterCard));