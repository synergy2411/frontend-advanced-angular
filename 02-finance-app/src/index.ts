const btnAdd = document.getElementById("btnAdd") as HTMLButtonElement
const txtInput = document.getElementById("txtTitle") as HTMLInputElement

btnAdd.addEventListener("click", function (event: Event) {
    event.preventDefault()
    console.log(txtInput.value)
})