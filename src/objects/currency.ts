export class Currency {
    id!: number;
    version!: number;
    createdDate!: number;
    currencySymbol!: string;
    lastModifiedDate!: number;
    name!: string;

    constructor(init?:Partial<Currency>) {
        Object.assign(this, init);
    }
}