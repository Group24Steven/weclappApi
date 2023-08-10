export class ArticleLabel {
    detail!: string;
    error!: string;
    instance!: string;
    messages!: Message[];
    status!: number;
    title!: string;
    type!: string;
    validationErrors!: ValidationError[];

    constructor(init?:Partial<ArticleLabel>) {
        Object.assign(this, init);
    }
}
  
export class Message {
    constructor(init?:Partial<Message>) {
        Object.assign(this, init);
    }
}

export class ValidationError {
    allowed!: string[];
    detail!: string;
    instance!: string;
    location!: string;
    title!: string;
    type!: string;

    constructor(init?:Partial<ValidationError>) {
        Object.assign(this, init);
    }
}
  