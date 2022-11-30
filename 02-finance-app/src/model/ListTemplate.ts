import { HasFormatter } from './HasFormatter';

export class ListTemplate {
    constructor(private ulContainer: HTMLUListElement) { }

    renderList(doc: HasFormatter, expType: string) {
        const liElement = document.createElement("li")
        liElement.classList.add("list-group-item")
        liElement.innerHTML = `
            <h6>${expType.toUpperCase()}</h6>
            <p>${doc.format()}</p>
            `
        this.ulContainer.appendChild(liElement)
    }
}