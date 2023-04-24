const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

const newEl = ingredients.map((el) => {
  const createdLi = document.createElement("li");

  createdLi.textContent = el;

  createdLi.classList.add("item");
  return createdLi;
});
ingredientsList.append(...newEl);
