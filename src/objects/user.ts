export class User {
    id!: string;
    version!: string;
    createdDate!: number;
    email!: string;
    firstName!: string;
    imageId!: string;
    lastModifiedDate!: number;
    lastName!: string;
    phoneNumber!: string;
    status!: string;
    userRoles!: any[];
    username!: string;

    constructor(init?:Partial<User>) {
        Object.assign(this, init);
    }
}