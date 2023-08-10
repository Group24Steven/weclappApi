import { Address } from "../address";
import { Contact } from "../contact";
import { Tag } from "../tag";

export class Customer {
    id!: string;
    version!: string;
    addresses!: Address[];
    bankAccounts!: any[];
    blocked!: boolean;
    commissionSalesPartners!: any[];
    company!: string;
    contacts!: Contact[];
    createdDate!: number;
    currencyId!: string;
    currencyName!: string;
    customerNumber!: string;
    customerTopics!: any[];
    deliveryBlock!: boolean;
    insolvent!: boolean;
    insured!: boolean;
    invoiceBlock!: boolean;
    lastModifiedDate!: number;
    onlineAccounts!: any[];
    optIn!: boolean;
    optInLetter!: boolean;
    optInPhone!: boolean;
    optInSms!: boolean;
    partyType!: string;
    primaryContactId!: string;
    responsibleUserFixed!: boolean;
    salesChannel!: string;
    salesPartner!: boolean;
    tags!: Tag[];
    useCustomsTariffNumber!: boolean;

    constructor(init?:Partial<Customer>) {
        Object.assign(this, init);
    }
}
