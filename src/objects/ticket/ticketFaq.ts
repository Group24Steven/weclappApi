import { Customer } from "../customer/customer";

export class TicketFaq {
    id!: string;
    version!: string;
    active!: boolean;
    answer!: string;
    createdDate!: number;
    customers!: Customer[];
    lastModifiedDate!: number;
    positionNumber!: number;
    question!: string;
    ticketCategories!: TicketCategory[];
    visibility!: string;
    createdById!: string;

    constructor(init?:Partial<TicketFaq>) {
        Object.assign(this, init);
    }
}

export class TicketCategory {
    id!: string;

    constructor(init?:Partial<TicketCategory>) {
        Object.assign(this, init);
    }
}
  