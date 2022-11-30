"use strict";
const btnAdd = document.getElementById("btnAdd");
const txtInput = document.getElementById("txtTitle");
btnAdd.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(txtInput.value);
});
