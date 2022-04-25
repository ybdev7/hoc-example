import { v4 as uuidv4 } from "uuid";
import { IBook } from "../interfaces/Interfaces";
import Author from "./Author";

interface IBookProps {
  book: IBook;
}

const Book = ({ book }: IBookProps) => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export default Book;
