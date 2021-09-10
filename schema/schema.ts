import Realm from 'realm';

export class Book {
  name!: string;
  pages!: number;
  stars!: number;
  published!: Date;
  //   author!: Author[];
  //
  static schema: Realm.ObjectSchema = {
    name: 'Book',
    properties: {
      name: 'string',
      pages: 'int',
      stars: 'float',
      published: {type: 'date', default: new Date()},
    },
  };
}
export class Author {
  name!: string;
  country!: string;
  //   books?: Book[];
  books?: Realm.List<Book>;
  // books?: Book[];
  createdAt?: Date;

  //
  static schema: Realm.ObjectSchema = {
    name: 'Author',
    properties: {
      name: 'string',
      country: 'string',
      books: 'Book[]',
      createdAt: {type: 'date', default: new Date()},
    },
  };
}

export const realmDB = new Realm({
  schema: [Book, Author],
  schemaVersion: 4,
});
