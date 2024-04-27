const input = document.querySelector("#data")
const allButtons = document.querySelectorAll("button")
let str = ""

allButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.textContent.trim() === "C") {
      str = "0"
      input.value = str
    } else if (e.target.textContent.trim() === "=") {
      str = eval(str)
      input.value = str
    } else {
      str += e.target.textContent.trim()
      input.value = str
    }
  })
})
