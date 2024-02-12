// const title = document.createElement("h1");

// const img = document.createElement("img");

// title.textContent = "CroCoder logo";
// title.style.color = "orange";

// img.src = "https://www.crocoder.dev/icon.png";

// document.body.append(title,img)

const head = document.querySelector("h1");
head.innerHTML = "To do now";
head.style.color = "green";
head.style.frontsize = "25px";

const button = document.querySelector("#add-todo");
const inputField = document.querySelector("#input");
const list = document.querySelector("#list");

function clickButton() {
  const todoText = inputField.value.trim();
  const li = document.createElement("li");
  li.textContent = todoText;
  list.appendChild(li);
}

button.addEventListener("click", clickButton);
