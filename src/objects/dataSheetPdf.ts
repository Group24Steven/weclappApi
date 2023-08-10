export class DataSheetPdf {
    commercialLanguageId!: string;
    salesChannel!: string;

    constructor(init?:Partial<DataSheetPdf>) {
        Object.assign(this, init);
    }
}