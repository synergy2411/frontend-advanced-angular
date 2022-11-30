import { HasFormatter } from './HasFormatter';

export class Payment implements HasFormatter {
    constructor(private title: string, private amount: number) { }
    format(): string {
        return `Payment made for ${this.title} for the amount $${this.amount}`
    }
}