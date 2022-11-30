import { HasFormatter } from "./model/HasFormatter.js"
import { Payment } from "./model/Payment.js"
import { Invoice } from "./model/Invoice.js"
import { ListTemplate } from "./model/ListTemplate.js"


const btnAdd = document.getElementById("btnAdd") as HTMLButtonElement
const txtInput = document.getElementById("txtTitle") as HTMLInputElement
const sltType = document.getElementById("sltType") as HTMLSelectElement
const txtAmount = document.getElementById("txtAmount") as HTMLInputElement
const listContainer = document.getElementById("list-container") as HTMLUListElement


btnAdd.addEventListener("click", function (event: Event) {
    event.preventDefault()
    let doc: HasFormatter;
    if (sltType.value === "payment") {
        doc = new Payment(txtInput.value, Number(txtAmount.value))
    } else {
        doc = new Invoice(txtInput.value, Number(txtAmount.value))
    }

    let listTemplate = new ListTemplate(listContainer)
    listTemplate.renderList(doc, sltType.value)
    // console.log(doc);
})