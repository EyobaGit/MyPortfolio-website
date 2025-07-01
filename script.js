// Array of card data
const cardsData = [
  {
    title: "Languages",
    content: "HTML, CSS, JavaScript React Js, Node Js",
    icon: "&#60;&#47;&#62;" // HTML code tags as icon
  },
  {
    title: "Education",
    content: "Electrical & Computer Engineering",
    icon: "&#x1F393;" // Unicode for graduation cap
  },
  {
    title: "Projects",
    content: "Built more than 5 projects",
    icon: "&#x1F4BC;" // Unicode for briefcase
  }
];

// Function to create and append cards
function createPortfolioCards() {
  const container = document.getElementById("portfolioContainer");

  cardsData.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const iconElement = document.createElement("div");
    iconElement.classList.add("icon");
    iconElement.innerHTML = card.icon;

    const titleElement = document.createElement("h3");
    titleElement.textContent = card.title;

    const contentElement = document.createElement("p");
    contentElement.textContent = card.content;

    cardElement.appendChild(iconElement);
    cardElement.appendChild(titleElement);
    cardElement.appendChild(contentElement);

    container.appendChild(cardElement);
  });
}

// Call the function when the page loads
window.onload = createPortfolioCards;