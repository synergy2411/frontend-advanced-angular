import { HasFormatter } from './HasFormatter';

export class Invoice implements HasFormatter {
    constructor(private title: string, private amount: number) { }
    format(): string {
        return `Invoice received for ${this.title} for the amount $${this.amount}`
    }
}
