export class ListTemplate {
    constructor(ulContainer) {
        this.ulContainer = ulContainer;
    }
    renderList(doc, expType) {
        const liElement = document.createElement("li");
        liElement.classList.add("list-group-item");
        liElement.innerHTML = `
            <h6>${expType.toUpperCase()}</h6>
            <p>${doc.format()}</p>
            `;
        this.ulContainer.appendChild(liElement);
    }
}
