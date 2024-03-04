const productsCards = document.querySelector(".products");
const useCasesCardsIndividuals = document.querySelector(
  ".individuals__options-list"
);
const useCasesCardsBusiness = document.querySelector(".business__options-list");
const featuresCards = document.querySelector(".details__cards");

const intersectionObserver = new IntersectionObserver(
  (entries) => {
    const element = entries[0].target;

    if (entries[0].intersectionRatio <= 0) return;
    else if (element.classList.contains("products")) {
      productsCards.classList.add("appearanceFromBottom");
      productsCards.classList.remove("opacity");
    } else if (element.classList.contains("individuals__options-list")) {
      element.classList.add("appearanceFromEdges");
    } else if (element.classList.contains("business__options-list")) {
      element.classList.add("appearanceFromEdges");
    } else if (element.classList.contains("details__cards")) {
      element.classList.add("increaseToRight");
    }
  },
  {
    threshold: 1,
  }
);

productsCards.classList.add("opacity");
intersectionObserver.observe(productsCards);

intersectionObserver.observe(useCasesCardsIndividuals);

intersectionObserver.observe(useCasesCardsBusiness);

intersectionObserver.observe(featuresCards);
