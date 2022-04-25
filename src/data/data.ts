import { Genre } from "../interfaces/Entity";
import { IAuthor, IBook } from "../interfaces/Interfaces";

export const authors: Array<IAuthor> = [
  {
    id: "author1",
    first: "Lewis",
    last: "Carol",
    bornAt: "England",
    rating: 1.1,
    genre: [Genre.Fantacy],
  },
  {
    id: "auhtor2",
    first: "Alexandre",
    last: "Dumas",
    bornAt: "France",
    rating: 2.2,
    genre: [Genre.HistoricalFiction, Genre.Adventure],
  },
  {
    id: "author3",
    first: "Emily Jane",
    last: "Brontë",
    bornAt: "England",
    rating: 3.3,
    genre: [Genre.HistoricalFiction],
  },
];

export const books: Array<IBook> = [
  {
    id: "book1",
    name: "Alice in Wonderland",
    authors: [authors[0]],
    pubDate: new Date(1865, 11, 18),
    rating: 2.2,
  },
  {
    id: "book2",
    name: "The Three Musketeers",
    authors: [authors[1]],
    pubDate: new Date(1845, 7, 1),
    rating: 3.3,
  },
  {
    id: "book3",
    name: "Wuthering Heights",
    authors: [authors[2]],
    pubDate: new Date(1847, 12, 1),
    rating: 4.4,
  },
];
