import { Payment } from "./model/Payment.js";
import { Invoice } from "./model/Invoice.js";
import { ListTemplate } from "./model/ListTemplate.js";
const btnAdd = document.getElementById("btnAdd");
const txtInput = document.getElementById("txtTitle");
const sltType = document.getElementById("sltType");
const txtAmount = document.getElementById("txtAmount");
const listContainer = document.getElementById("list-container");
btnAdd.addEventListener("click", function (event) {
    event.preventDefault();
    let doc;
    if (sltType.value === "payment") {
        doc = new Payment(txtInput.value, Number(txtAmount.value));
    }
    else {
        doc = new Invoice(txtInput.value, Number(txtAmount.value));
    }
    let listTemplate = new ListTemplate(listContainer);
    listTemplate.renderList(doc, sltType.value);
    // console.log(doc);
});
