import { BookFiltersBuilder } from "../factory/FilterFactory";
import { IBook, IEntity, IFilterBuilder } from "../interfaces/Interfaces";
import Book from "./Book";
import FSGenericList, { BaseFilterableSearchableListProps } from "./FSList";

const BooksList = ({ ...props }: BookFilterableSearchableListProps) => {
  return (
    <>
      <FSGenericList {...props} />
    </>
  );
};

export default BooksList;

export class BookFilterableSearchableListProps extends BaseFilterableSearchableListProps {
  public filterBuilder: IFilterBuilder<IBook>;

  constructor(data: IBook[]) {
    super(data);
    this.data = data;

    this.filterBuilder = new BookFiltersBuilder();
    this.filterInfo = this.filterBuilder.getFilterTerms();
    this.searchS = "";
  }

  public renderUI = (entity: IEntity) => {
    return <Book key={`book-l-${entity.id}`} book={entity as IBook} />;
  };

  public searchBy = (entity: IEntity, searchStr: string): boolean => {
    const lcsearchS = searchStr.toLocaleLowerCase();
    return (
      lcsearchS === "" ||
      (entity as IBook).name.toLowerCase().includes(lcsearchS)
    );
  };
}
