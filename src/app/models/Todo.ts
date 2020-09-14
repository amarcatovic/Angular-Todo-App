export default class Todo{
    id: number;
    title: string;
    description: string;
    done: boolean;
    dateCreated: string;

    constructor() {
        this.dateCreated = new Date().toLocaleString();
    }
}