import React from "react";
import { v4 as uuidv4 } from "uuid";
import { IAuthor } from "../interfaces/Interfaces";

interface IAuthorProps {
  author: IAuthor;
  showDetailedView?: boolean;
}

/**
 * React.memo used here to guarantee that the Auhtor ui does not need to be re-rendered if the Author is already part of the list
 */
const Author = React.memo(
  ({ author, showDetailedView = false }: IAuthorProps) => {
    console.log(`Actually rendering author id=${author.id}`);
    return (
      <>
        <div>
          <span>
            <b>{author.first + " " + author.last}</b>
          </span>{" "}
          {showDetailedView && (
            <p>
              <span>Born: {author.bornAt}</span>
              <br></br>
              <span>{" Rating: " + author.rating}</span>
              <br></br>
              <span>{" Genre: "}</span>
              {author.genre.map((genre, index) => (
                <span key={uuidv4()}>
                  <span>
                    {index + 1 < author.genre.length &&
                    author.genre.length > 1 ? (
                      <span>{genre + ", "}</span>
                    ) : (
                      <span>{genre}</span>
                    )}
                  </span>
                </span>
              ))}
            </p>
          )}
        </div>
      </>
    );
  }
);

export default Author;
