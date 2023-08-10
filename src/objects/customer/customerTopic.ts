export class CustomerTopic {
    id!: number;
    version!: number;
    active!: boolean;
    createdDate!: number;
    lastModifiedDate!: number;
    name!: string;
    positionNumer!: number;

    constructor(init?:Partial<CustomerTopic>) {
        Object.assign(this, init);
    }
}