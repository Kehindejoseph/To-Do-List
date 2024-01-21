const inputEl = document.getElementById("input-box");
const listContainerEl = document.getElementById("list-container");

function addTask() {
    if(inputEl.value === '') {
        alert("You write something");
        console.log("clicked");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputEl.value;
        listContainerEl.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputEl.value = "";
    saveData();
}

listContainerEl.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainerEl.innerHTML);
}

function showTask() {
    listContainerEl.innerHTML = localStorage.getItem("data");
}
showTask();