const questions = document.querySelector(".FAQ__list");
const moreQueastions = document.querySelector(".FAQ__more-btn");
const fakeLoader = (document.createElement("div").textContent = "Loading...");

moreQueastions.addEventListener("click", () => {
  questions.append(fakeLoader);
  setTimeout(() => {
    questions.removeChild(questions.lastChild);
    questions.append(addFakeQuestion());
    questions.append(addFakeQuestion());
  }, 2000);
});

function addFakeQuestion() {
  const item = document.createElement("li");
  const quest = document.createElement("b");
  const reply = document.createElement("p");

  item.classList.add("FAQ__card", "card");
  quest.classList.add("card__quest");
  reply.classList.add("card__reply");

  quest.textContent = "fake quest";
  reply.textContent = "fake reply";
  item.appendChild(quest);
  item.appendChild(reply);
  return item;
}
