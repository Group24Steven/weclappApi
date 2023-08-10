export class Unit {
    id!: string;
    version!: string;
    createdDate!: number;
    lastModifiedDate!: number;
    name!: string;

    constructor(init?:Partial<Unit>) {
        Object.assign(this, init);
    }
}