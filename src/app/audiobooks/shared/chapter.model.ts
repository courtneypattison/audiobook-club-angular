export class Chapter {
    filename: string;
    title?: string;
    length?: string;

    constructor(filename: string, title?: string, length?: string) {
        this.filename = filename;
        this.title = title;
        this.length = length;
    }
}
