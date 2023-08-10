import { Address } from "./address";

export class Contract {
    id!: string;
    version!: string;
    additionalAddresses!: any[];
    automaticExtension!: boolean;
    billUntil!: string;
    billingDay!: number;
    billingType!: string;
    cancellationDate!: number;
    commission!: string;
    commissionSalesPartners!: any[];
    contractCostItems!: any[];
    contractItems!: ContractItem[];
    contractNumber!: string;
    contractNumberAtParty!: string;
    contractStatus!: string;
    correspondenceAddress!: CorrespondenceAddress
    createdDate!: number;
    deliveryAddress!: DeliveryAddress
    differingCorrespondenceAddress!: boolean;
    differingDeliveryAddress!: boolean;
    differingInvoiceAddress!: boolean;
    disableEmailTemplate!: boolean;
    endDate!: number;
    factoring!: boolean;
    invoiceAddress!: InvoiceAddress
    lastModifiedDate!: number;
    latestCancellationWarningQuantity!: number;
    latestCancellationWarningUnit!: string;
    latestPossibleTerminationDate!: number;
    name!: string;
    orderNumberAtCustomer!: string;
    partyId!: string;
    pricingDate!: number;
    recordCurrencyId!: string;
    recordCurrencyName!: string;
    reminderSendType!: string;
    reminderType!: string;
    responsibleUserId!: string;
    salesChannel!: string;
    sentToRecipient!: boolean;
    startDate!: number;
    tags!: any[];
    template!: boolean;
    terminationReasonId!: string;
    types!: Type[];
    unlimited!: boolean;
    commercialLanguage!: string;
    paymentMethodId!: string;
    termOfPaymentId!: string;
    billingTargetInvoiceStatus!: string;
    deliveryEmailAddresses!: DeliveryEmailAddresses
    salesInvoiceEmailAddresses!: SalesInvoiceEmailAddresses
    contractDate!: number;
    nextContractBillingDate!: number;
    authorizationUnitId!: string;
    invoiceRecipientId!: string;
    recordEmailAddresses!: RecordEmailAddresses
    salesOrderEmailAddresses!: SalesOrderEmailAddresses
    purchaseEmailAddresses!: PurchaseEmailAddresses

    constructor(init?:Partial<Contract>) {
        Object.assign(this, init);
    }
}
  
export class ContractItem {
    id!: string;
    version!: string;
    addPageBreakBefore!: boolean;
    articleId!: string;
    articleNumber!: string;
    commissionSalesPartners!: any[];
    createdDate!: number;
    description!: string;
    descriptionFixed!: boolean;
    discountPercentage!: string;
    freeTextItem!: boolean;
    grossAmount!: string;
    grossAmountInCompanyCurrency!: string;
    interval!: string;
    intervalType!: string;
    lastModifiedDate!: number;
    manualQuantity!: boolean;
    manualUnitPrice!: boolean;
    netAmount!: string;
    netAmountForStatistics!: string;
    netAmountForStatisticsInCompanyCurrency!: string;
    netAmountInCompanyCurrency!: string;
    positionNumber!: number;
    previousContractBillingDate!: number;
    quantity!: string;
    reductionAdditionItems!: ReductionAdditionItem[];
    servicePeriodFromDate!: number;
    taxId!: string;
    taxName!: string;
    title!: string;
    type!: string;
    unitId!: string;
    unitName!: string;
    unitPrice!: string;
    unitPriceInCompanyCurrency!: string;
    groupName!: string;
    servicePeriodToDate!: number;
    nextContractBillingDate!: number;

    constructor(init?:Partial<ContractItem>) {
        Object.assign(this, init);
    }
}
  
export class ReductionAdditionItem {
    position!: number;
    source!: string;
    type!: string;
    value!: string;

    constructor(init?:Partial<ReductionAdditionItem>) {
        Object.assign(this, init);
    }
}
  
export class CorrespondenceAddress {
    company!: string;
    countryCode!: string;
    city!: string;
    firstName!: string;
    lastName!: string;
    phoneNumber!: string;
    street1!: string;
    zipcode!: string;

    constructor(init?:Partial<CorrespondenceAddress>) {
        Object.assign(this, init);
    }
}
  
export class SelectedValue {
    id!: string;

    constructor(init?:Partial<SelectedValue>) {
        Object.assign(this, init);
    }
}
  
export class EntityReference {
    entityId!: string;
    entityName!: string;

    constructor(init?:Partial<EntityReference>) {
        Object.assign(this, init);
    }
}
  
export class DeliveryAddress extends Address {}
  
export class InvoiceAddress extends Address {}
  
export class Type {
    id!: string;

    constructor(init?:Partial<Type>) {
        Object.assign(this, init);
    }
}
  
export class DeliveryEmailAddresses {
    toAddresses!: string;

    constructor(init?:Partial<DeliveryEmailAddresses>) {
        Object.assign(this, init);
    }
}
  
export class SalesInvoiceEmailAddresses {
    toAddresses!: string;

    constructor(init?:Partial<SalesInvoiceEmailAddresses>) {
        Object.assign(this, init);
    }
}
  
export class RecordEmailAddresses {
    toAddresses!: string;

    constructor(init?:Partial<RecordEmailAddresses>) {
        Object.assign(this, init);
    }
}
  
export class SalesOrderEmailAddresses {
    toAddresses!: string;

    constructor(init?:Partial<SalesOrderEmailAddresses>) {
        Object.assign(this, init);
    }
}
  
export class PurchaseEmailAddresses {
    toAddresses!: string;

    constructor(init?:Partial<PurchaseEmailAddresses>) {
        Object.assign(this, init);
    }
}
  