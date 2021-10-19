let inputPart = document.getElementById("getTodo");
let inputBut = document.getElementById("button_to");
todo = document.querySelector(".todo");

inputBut.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("p-styling");
  paragraph.innerText = getTodo.value;
  todo.appendChild(paragraph);
  getTodo.value = "";

  let clickMeButton = document.createElement("button");
  clickMeButton.id = "myButton";
  paragraph.classList.add("btn-styling");
  clickMeButton.innerHTML = "Edit";
  clickMeButton.style.background = "yellow";
  paragraph.appendChild(clickMeButton);

  let clickButton = document.createElement("button");
  clickButton.id = "myButton";
  paragraph.classList.add("btn-styling");
  clickButton.innerHTML = "Delete";
  clickButton.style.background = "red";
  paragraph.appendChild(clickButton);

  let checkbox = createElement("checkbox");
  let label = createElement("label");

  paragraph.append(checkbox);
  paragraph.append(label);

  checkbox.addEventListener("click", function () {
    if (checkbox === false) {
      label.style.textDecoration = "none";
      paragraph.style.backgroundColor = "transparent";
      label.innerHTML = value;
    } else {
      label.style.textDecoration = "line-through";
      paragraph.style.backgroundColor = "gray";
      label.innerHTML = value;
    }
  });

  clickMeButton.addEventListener("click", function () {
    let edit = document.createElement("div");
    let Input = document.createElement("input");
    let save = document.createElement("button");

    edit.classList = "edit_part";
    Input.type = "text";
    Input.placeholder = "Изменить на ...";
    Input.classList = "input_part";
    save.classList = "btn submit";
    save.textContent = "Подтвердить";
  });
});

