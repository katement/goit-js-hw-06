const categoriesListRef = document.getElementById("categories");
const categoriesItemRef = categoriesListRef.querySelectorAll(".item");

console.log(`В списке ${categoriesItemRef.length} категории`);

categoriesItemRef.forEach((el) => {
  const nameEl = el.querySelector("h2").textContent;
  const nameItemEl = el.querySelectorAll("li").length;

  console.log(`Category: ${nameEl}`);
  console.log(`Number: ${nameItemEl}`);
});
