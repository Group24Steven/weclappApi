export class Title {
    id!: number;
    version!: number;
    active!: boolean;
    createdDate!: number;
    lastModifiedDate!: number;
    name!: string;
    positionNumber!: number;

    constructor(init?:Partial<Title>) {
        Object.assign(this, init);
    }
}