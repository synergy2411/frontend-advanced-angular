export class Invoice {
    constructor(title, amount) {
        this.title = title;
        this.amount = amount;
    }
    format() {
        return `Invoice received for ${this.title} for the amount $${this.amount}`;
    }
}
