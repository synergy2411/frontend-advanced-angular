export class Payment {
    constructor(title, amount) {
        this.title = title;
        this.amount = amount;
    }
    format() {
        return `Payment made for ${this.title} for the amount $${this.amount}`;
    }
}
