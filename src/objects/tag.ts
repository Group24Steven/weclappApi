export class Tag {
    id!: number;
    version!: number;
    createdDate!: number;
    lastModifiedDate!: number;
    name!: string;

    constructor(init?:Partial<Tag>) {
        Object.assign(this, init);
    }
}