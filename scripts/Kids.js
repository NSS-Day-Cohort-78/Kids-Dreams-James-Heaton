import { getChildren } from "./database.js";

const children = getChildren();

export const childrenHTML = () => {
  let html = "<ol>";

  for (const child of children) {
    html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}" data-name="${child.name}">${child.name}</li>`;
  }

  html += "</ol>";
  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.dataset.type === "child") {
    window.alert(
      `${itemClicked.dataset.name}'s wish is ${itemClicked.dataset.wish}`
    );
  }
});
