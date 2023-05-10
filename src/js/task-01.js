const categoriesList = document.querySelector("#categories");
const items = categoriesList.children;

console.log(`Number of categories: ${items.length}`);

for (let item of items) {
  const category = item.firstElementChild.textContent;
  const elements = item.lastElementChild.childElementCount;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
}
