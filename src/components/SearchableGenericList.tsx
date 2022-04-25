import { useMemo } from "react";
import {
  IAuthor,
  IBook,
  IEntity,
  IGenericListProps,
} from "../interfaces/Interfaces";
import Author from "./Author";
import Book from "./Book";
import { withSearchable } from "./SearchableList";

const GenericList = <T extends IEntity>({
  data,
  getKey,
  renderUI,
  filterBy,
  searchS,
}: IGenericListProps<T>) => {
  const filtering = (entity: T) => {
    return filterBy(entity, searchS);
  };

  return (
    <>
      {data.filter(filtering).map((entity) => {
        return <div key={getKey(entity)}>{renderUI(entity)}</div>;
      })}
    </>
  );
};

const SearchableGenericList = withSearchable(GenericList);

export default SearchableGenericList;

export class BookListProps implements IGenericListProps<IBook> {
  public data: IBook[];
  constructor(data: IBook[]) {
    this.data = data;
    this.searchS = "";
  }

  public getKey = (entity: IEntity) => {
    return entity.id;
  };
  public renderUI = (entity: IEntity) => {
    return <Book key={`book-l-${entity.id}`} book={entity as IBook} />;
  };

  public filterBy = (b: IEntity, searchStr: string): boolean => {
    const lcsearchS = searchStr.toLocaleLowerCase();
    return (
      lcsearchS === "" || (b as IBook).name.toLowerCase().includes(lcsearchS)
    );
  };
  public searchS: string;
}

export class AuthorListProps implements IGenericListProps<IAuthor> {
  public data: IAuthor[];
  constructor(data: IAuthor[]) {
    this.data = data;
    this.searchS = "";
  }
  public getKey = (entity: IEntity) => {
    return entity.id;
  };
  public renderUI = (entity: IEntity) => {
    return <Author author={entity as IAuthor} showDetailedView />;
  };

  public filterBy = (a: IEntity, searchStr: string) => {
    const lcsearchS = searchStr.toLocaleLowerCase();
    return (
      lcsearchS === "" ||
      (a as IAuthor).first.toLowerCase().includes(lcsearchS) ||
      (a as IAuthor).last.toLowerCase().includes(lcsearchS)
    );
  };
  public searchS: string;
}
