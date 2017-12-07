import { Chapter } from './chapter.model';

export class Audiobook {
  identifier: string;
  title?: string;
  authors?: string[];
  description?: string;
  subjects?: string;
  length?: string;
  rating?: string;
  imageUrl?: string;
  chapters?: Chapter[];

    constructor(
      identifier: string,
      title?: string,
      authors?: string[],
      description?: string,
      subjects?: string,
      length?: string,
      rating?: string,
      imageUrl?: string,
      chapters?: Chapter[]
    ) {
      this.identifier = identifier;
      this.title = title;
      this.authors = authors;
      this.description = description;
      this.subjects = subjects;
      this.length = length;
      this.rating = rating;
      this.imageUrl = imageUrl;
      this.chapters = chapters;
    }
}
