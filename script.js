var addToDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDoContainer");
var inputField = document.getElementById("inputField");

addToDoButton.onclick = function () {
  if (inputField.value != "") {
    var paragraph = document.createElement("p");
  }
  paragraph.innerText = inputField.value;
  paragraph.classList.add("paragraphe_style");
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
};
