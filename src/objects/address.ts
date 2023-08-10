export class Address {
    id!: string;
    version!: string;
    countryCode!: string;
    createdDate!: number;
    deliveryAddress!: boolean;
    invoiceAddress!: boolean;
    lastModifiedDate!: number;
    primeAddress!: boolean;
    city!: string;
    street1!: string;
    zipcode!: string;
    lastName!: string;
    company!: string;
    state!: string;
    firstName!: string;
    street2!: string;
    salutation!: string;
    company2!: string;

    constructor(init?:Partial<Address>) {
        Object.assign(this, init);
    }
}