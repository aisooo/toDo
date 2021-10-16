let inputPart = document.getElementById("getTodo");
let inputBut = document.getElementById("button_to");
todo = document.querySelector(".todo");

inputBut.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.classList.add("p-styling");
  paragraph.innerText = getTodo.value;
  todo.appendChild(paragraph);
  getTodo.value = "";

  let clickMeButton = document.createElement("button");
  clickMeButton.id = "myButton";
  clickMeButton.innerHTML = "Edit";
  clickMeButton.style.background = "yellow";
  document.body.appendChild(clickMeButton);

  let clickButton = document.createElement("button");
  clickButton.id = "myButton";
  clickButton.innerHTML = "Delete";
  clickButton.style.background = "red";
  document.body.appendChild(clickButton);
});
