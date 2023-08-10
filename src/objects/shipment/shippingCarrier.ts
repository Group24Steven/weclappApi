export class ShippingCarrier {
    id!: number;
    version!: number;
    active!: number;
    createdDate!: number;
    internalShippingCarrier!: string;
    lastModifiedDate!: number;
    name!: string;
    positionNumber!: number;

    constructor(init?:Partial<ShippingCarrier>) {
        Object.assign(this, init);
    }
}