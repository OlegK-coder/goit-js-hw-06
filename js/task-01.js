const category = document.querySelectorAll(".item");

console.log(`Number of categories: ${category.length}`);

category.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.textContent}\nElements: ${el.lastElementChild.children.length}`
  );
});