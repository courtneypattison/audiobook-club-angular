import { Chapter } from './chapter.model';

export class Audiobook {
    identifier: string;
    title?: string;
    authors?: string[];
    description?: string;
    subjects?: string;
    length?: string;
    rating?: string;
    imageURL?: string;
    chapters?: Chapter[];
}
