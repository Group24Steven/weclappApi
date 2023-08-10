import { Address } from "./address";
import { Tag } from "./tag";
  
export class Contact {
    id!: string;
    version!: string;
    addresses!: Address[];
    company2!: string;
    createdDate!: number;
    firstName!: string;
    lastModifiedDate!: number;
    lastName!: string;
    onlineAccounts!: any[];
    optIn!: boolean
    optInLetter!: boolean
    optInPhone!: boolean
    optInSms!: boolean
    partyType!: string;
    personCompany!: string;
    primaryAddressId!: string;
    salutation!: string;
    tags!: Tag[];
    email!: string;
    mobilePhone1!: string;
    phone!: string;
    deliveryAddressId!: string;
    fax!: string;
    fixPhone2!: string;
    personRoleId!: string;
    website!: string;

    constructor(init?:Partial<Contact>) {
        Object.assign(this, init);
    }
}