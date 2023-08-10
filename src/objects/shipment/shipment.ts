import { Tag } from "../tag";

export class Shipment {
    id!: string;
    version!: string;
    allWithdrawalsConfirmed!: boolean;
    availability!: string;
    availabilityForAllWarehouses!: string;
    createdDate!: number;
    disableEmailTemplate!: boolean;
    invoiceAddress!: InvoiceAddress;
    lastModifiedDate!: number;
    packageHeight!: number;
    packageLength!: number;
    packageTrackingNumber!: string;
    packageWeight!: string;
    packageWidth!: number;
    pickingInstructions!: string;
    purchaseOrders!: any[];
    recipientAddress!: RecipientAddress;
    recipientCustomerNumber!: string;
    recipientPartyId!: string;
    recordEmailAddresses!: RecordEmailAddresses;
    salesInvoiceEmailAddresses!: SalesInvoiceEmailAddresses;
    sentToRecipient!: boolean;
    shipmentItems!: ShipmentItem[];
    shipmentNumber!: string;
    shipmentType!: string;
    shippedFromAddress!: ShippedFromAddress;
    shippingLabelsCount!: number;
    status!: string;
    statusHistory!: StatusHistory[];
    tags!: Tag[];
    warehouseId!: string;
    warehouseName!: string;
    withdrawalsComplete!: boolean;
    packageReferenceNumber!: string;
    salesOrderId!: string;
    salesOrderNumber!: string;
    shippingDate!: number;
    customerPurchaseOrderNumber!: string;
    deliveryDate!: number;
    description!: string;
    packageTrackingUrl!: string;
    shipmentMethodId!: string;
    shipmentMethodName!: string;
    shippingCarrierId!: string;
    shippingCarrierName!: string;
    commercialLanguage!: string;
    additionalDeliveryInformation!: string;
    assignedPickingUserId!: string;
    assignedPickingUserUpdateDate!: number;
    assignedPickingUserUsername!: string;
    declaredValueAmount!: string;
    invoiceRecipientId!: string;
    recipientSupplierNumber!: string;

    constructor(init?:Partial<Shipment>) {
        Object.assign(this, init);
    }
}
  
export class InvoiceAddress {
    company!: string;
    countryCode!: string;
    city!: string;
    lastName!: string;
    street1!: string;
    zipcode!: string;
    firstName!: string;
    state!: string;
    phoneNumber!: string;
    salutation!: string;
    street2!: string;
    company2!: string;
    globalLocationNumber!: string;
    postOfficeBoxCity!: string;
    postOfficeBoxNumber!: string;
    postOfficeBoxZipCode!: string;

    constructor(init?:Partial<InvoiceAddress>) {
        Object.assign(this, init);
    }
}
  
export class RecipientAddress {
    company!: string;
    countryCode!: string;
    city!: string;
    lastName!: string;
    street1!: string;
    zipcode!: string;
    firstName!: string;
    state!: string;
    phoneNumber!: string;
    salutation!: string;
    street2!: string;
    title!: string;
    titleId!: string;
    company2!: string;
    globalLocationNumber!: string;
    postOfficeBoxCity!: string;
    postOfficeBoxNumber!: string;
    postOfficeBoxZipCode!: string;

    constructor(init?:Partial<RecipientAddress>) {
        Object.assign(this, init);
    }
}
  
export class RecordEmailAddresses {
    toAddresses!: string;
    bccAddresses!: string;
    ccAddresses!: string;

    constructor(init?:Partial<RecordEmailAddresses>) {
        Object.assign(this, init);
    }
}
  
export class SalesInvoiceEmailAddresses {
    toAddresses!: string;
    ccAddresses!: string;
    bccAddresses!: string;

    constructor(init?:Partial<SalesInvoiceEmailAddresses>) {
        Object.assign(this, init);
    }
}
  
export class ShipmentItem {
    id!: string;
    version!: string;
    addPageBreakBefore!: boolean;
    articleId!: string;
    articleNumber!: string;
    availability!: string;
    availabilityForAllWarehouses!: string;
    createdDate!: number;
    description!: string;
    descriptionFixed!: boolean;
    freeTextItem!: boolean;
    lastModifiedDate!: number;
    manualQuantity!: boolean;
    positionNumber!: number;
    quantity!: string;
    salesOrderItemId!: string;
    title!: string;
    unitId!: string;
    unitName!: string;
    groupName!: string;
    parentItemId!: string;
    note!: string;

    constructor(init?:Partial<ShipmentItem>) {
        Object.assign(this, init);
    }
}
  
export class ShippedFromAddress {
    city!: string;
    company!: string;
    countryCode!: string;
    street1!: string;
    zipcode!: string;

    constructor(init?:Partial<ShippedFromAddress>) {
        Object.assign(this, init);
    }
}
  
export class StatusHistory {
    status!: string;
    statusDate!: number;
    userId!: string;

    constructor(init?:Partial<StatusHistory>) {
        Object.assign(this, init);
    }
}
  