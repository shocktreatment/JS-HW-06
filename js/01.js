const liElements = document.querySelectorAll(".item");
console.log('Number of categories: ', liElements.length);

liElements.forEach(categories => {
  const name = categories.firstElementChild;
  const value = categories.lastElementChild;

  console.log('Category: ', name.textContent);
  console.log('Elements: ', value.children.length);
})
