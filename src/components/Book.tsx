import React from "react";
import { v4 as uuidv4 } from "uuid";
import { IBook } from "../interfaces/Interfaces";
import Author from "./Author";

interface IBookProps {
  book: IBook;
}
/**
 * React.memo used here to guarantee that the Book ui does not need to be re-rendered if the book is already part of the list
 */
const Book = React.memo(({ book }: IBookProps) => {
  console.log(`Actually rendering book id=${book.id}`);
  return (
    <>
      <div className="book-contents">
        <span>
          <b>{book.name}</b>
        </span>
        <span>{" by "}</span>
        {book.authors.map((author, index) => (
          <span key={uuidv4()}>
            <Author
              key={`book-${book.id}-author-${author.id}`}
              author={author}
            />
            {index + 1 < book.authors.length ? <span>{", "}</span> : null}
          </span>
        ))}

        <span>{" Rating: " + book.rating}</span>
        <span>{" Price: $" + book.price}</span>
      </div>
    </>
  );
});

export default Book;
