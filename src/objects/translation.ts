export class Translation {
    id!: string;
    version!: string;
    createdDate!: number;
    key!: string;
    lastModifiedDate!: number;
    values!: TranslationValue[];

    constructor(init?:Partial<Translation>) {
        Object.assign(this, init);
    }
}
  
export class TranslationValue {
    id!: string;
    version!: string;
    createdDate!: number;
    lastModifiedDate!: number;
    locale!: string;
    text!: string;

    constructor(init?:Partial<TranslationValue>) {
        Object.assign(this, init);
    }
}
  