export class ArticleImage {
    printCount!: number;
    startPosition!: number;

    constructor(init?:Partial<ArticleImage>) {
        Object.assign(this, init);
    }
}