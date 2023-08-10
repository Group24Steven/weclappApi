import { Address } from "../address"
import { Contact } from "../contact";
import { Tag } from "../tag";

export class Supplier {
    id!: string;
    version!: string;
    addresses!: Address[];
    bankAccounts!: BankAccount[];
    company!: string;
    company2!: string;
    contacts!: Contact[];
    createdDate!: number;
    currencyId!: string;
    currencyName!: string;
    description!: string;
    lastModifiedDate!: number;
    onlineAccounts!: any[];
    orderBlock!: boolean
    partyType!: string;
    primaryAddressId!: string;
    supplierNumber!: string;
    tags!: Tag[];
    vatRegistrationNumber!: string;
    customerNumberAtSupplier!: string;
    commercialLanguageId!: string;
    email!: string;
    paymentMethodId!: string;
    paymentMethodName!: string;
    phone!: string;
    sectorId!: string;
    sectorName!: string;
    supplierRatingId!: string;
    supplierRatingName!: string;
    termOfPaymentId!: string;
    termOfPaymentName!: string;
    website!: string;
    primaryContactId!: string;
    deliveryAddressId!: string;
    fax!: string;
    nonStandardTaxId!: string;
    referenceNumber!: string;
    shipmentMethodId!: string;
    shipmentMethodName!: string;
    invoiceAddressId!: string;

    constructor(init?:Partial<Supplier>) {
        Object.assign(this, init);
    }
}
  
export class BankAccount {
    id!: string;
    version!: string;
    accountNumber!: string;
    bankCode!: string;
    createdDate!: number;
    creditInstitute!: string;
    lastModifiedDate!: number;
    partyId!: string;
    primary!: boolean
    accountHolder!: string;

    constructor(init?:Partial<BankAccount>) {
        Object.assign(this, init);
    }
}