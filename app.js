const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

// console.log(item);

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function dragstart(event) {
  // console.log("drag start", event.target);
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
  // console.log("drag end");
  // event.target.classList.remove("hold", "hide"); //можно указать два класса через запятую. .classList - это неоторый объект, у котороно есть методы, которые позволяют манипулировать классами
  // event.target.classList.remove("hide");
  event.target.className = "item"; // Тоже самое что и две строки выше. .className - всегда работает со строчкой
}

function dragover(event) {
  event.preventDefault();
  // console.log("drag over");
}

function dragenter(event) {
  event.target.classList.add("hovered");
  // console.log("drag enter");
}

function dragleave(event) {
  event.target.classList.remove("hovered");
  // console.log("drag leave");
}

function dragdrop(event) {
  // console.log("drag drop");
  event.target.classList.remove("hovered");
  event.target.append(item);
}
