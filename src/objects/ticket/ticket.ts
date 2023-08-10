import { Tag } from "../tag";

export class Ticket {
    id!: string;
    version!: string;
    assignedUserId!: string;
    billable!: boolean;
    billableStatus!: boolean;
    createdDate!: number;
    description!: string;
    disableEmailTemplates!: boolean;
    email!: string;
    entityReferences!: any[];
    firstName!: string;
    lastModifiedDate!: number;
    lastName!: string;
    legacyTimeAndMaterialTicket!: boolean;
    mail2TicketId!: string;
    performanceRecordedStatus!: string;
    resolvedYourIssue!: boolean;
    solutionDueDate!: number;
    subject!: string;
    tags!: Tag[];
    ticketChannelId!: string;
    ticketNumber!: string;
    ticketPriorityId!: string;
    ticketServiceLevelAgreementId!: string;
    ticketStatusId!: string;

    constructor(init?:Partial<Ticket>) {
        Object.assign(this, init);
    }
}