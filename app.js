let count = 0
let content = document.getElementById("content")
let task = document.getElementById("task")
let output = document.getElementById("output")

task.addEventListener("click", () => {
    const text = content.value.trim()
    if (text === "") {
        alert("plz enter your task!")
        return
    }

    const li = document.createElement("li")
    document.body.classList.add("li")

    li.innerHTML = `  ${text} <input type="checkbox" > <button class="btn">Delete</button>`

    li.querySelector(".btn").addEventListener("click", () => {
        li.remove()
    })
    list.appendChild(li)
    content.value = ""


})
