import { Chapter } from './chapter.model';

export class Audiobook {
  identifier: string;
  title?: string;
  author?: string;
  description?: string;
  subjects?: string;
  length?: string;
  rating?: string;
  imageUrl?: string;
  chapters?: Chapter[];

    constructor(
      identifier: string,
      title?: string,
      author?: string,
      description?: string,
      subjects?: string,
      length?: string,
      rating?: string,
      imageUrl?: string,
      chapters?: Chapter[]
    ) {
      this.identifier = identifier;
      this.title = title;
      this.author = author;
      this.description = description;
      this.subjects = subjects;
      this.length = length;
      this.rating = rating;
      this.imageUrl = imageUrl;
      this.chapters = chapters;
    }
}
