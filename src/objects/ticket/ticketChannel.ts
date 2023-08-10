export class TicketChannel {
    id!: string;
    version!: string;
    active!: boolean;
    createdDate!: number;
    lastModifiedDate!: number;
    name!: string;
    positionNumber!: number;

    constructor(init?:Partial<TicketChannel>) {
        Object.assign(this, init);
    }
}