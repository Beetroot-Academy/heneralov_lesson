function createTextArea() {
  let section = document.querySelector(".first-section");
  document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.code == "KeyE") {
      let text = document.querySelector(".text");
      let textContainer = document.querySelector(".text__container");
      textContainer.remove();
      let textArea = document.createElement("textarea");
      textArea.classList.add("text__container");
      section.append(textArea);
      textArea.textContent = text.textContent;
      event.preventDefault();
    }
    if (event.ctrlKey && event.code == "Equal") {
      let textArea = document.querySelector(".text__container");
      let paragraph = document.createElement("p");
      paragraph.innerText = textArea.value;
      paragraph.classList.add("text");
      textArea.remove();
      let div = document.createElement("div");
      div.classList.add("text__container");
      section.append(div);
      div.append(paragraph);
      event.preventDefault();
    }
  });
}
createTextArea();

let table = document.querySelector(`table`);

table.addEventListener(`click`, (event) => {
  let el = event.target;
  let cell = el.cellIndex;
  let id = el.id;
  sortTable(cell, id);
});

function sortTable(index, type) {
  let sortRow = Array.from(table.rows).slice(1);
  switch (type) {
    case 'number':
    case 'randomnums':
      sortRow.sort(
        (rowA, rowB) =>
          rowA.cells[index].textContent - rowB.cells[index].textContent
      );
      table.tBodies[0].append(...sortRow);
      break;
    case 'text':
      sortRow.sort((rowA, rowB) =>
        rowA.cells[index].textContent > rowB.cells[index].textContent ? 1 : -1
      );
      table.tBodies[0].append(...sortRow);
      break;
  }
}

// Честно не понимаю я эту сортировку ☻