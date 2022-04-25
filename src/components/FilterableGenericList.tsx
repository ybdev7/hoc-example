import {
  AuthorFiltersBuilder,
  BookFiltersBuilder,
} from "../factory/FilterFactory";
import {
  FilterTerm,
  IAuthor,
  IBook,
  IEntity,
  IFilterBuilder,
  IGenericFilterableListProps,
} from "../interfaces/Interfaces";
import Author from "./Author";
import Book from "./Book";
import { withFilterable } from "./FilterableList";

const FGenericList = <T extends IEntity>({
  data,
  getKey,
  renderUI,
  filterBy,
  filterInfo,
}: IGenericFilterableListProps<T>) => {
  const filtering = (entity: T) => {
    if (filterInfo) return filterBy(entity, filterInfo);
  };

  return (
    <>
      {data.filter(filtering).map((entity) => {
        return <div key={getKey(entity)}>{renderUI(entity)}</div>;
      })}
    </>
  );
};

const FilterableGenericList = withFilterable(FGenericList);

export default FilterableGenericList;

export class BookFilterableListProps
  implements IGenericFilterableListProps<IBook>
{
  public data: IBook[];
  constructor(data: IBook[]) {
    this.data = data;
    this.filterInfo = null;
    this.filterBuilder = new BookFiltersBuilder();
  }

  public filterBuilder: IFilterBuilder<IBook>;

  public getKey = (entity: IEntity) => {
    return entity.id;
  };
  public renderUI = (entity: IEntity) => {
    return <Book key={`book-l-${entity.id}`} book={entity as IBook} />;
  };

  public filterBy = (b: IEntity, filterTerm: FilterTerm): boolean => {
    return filterTerm.compFn(b);
  };
  public filterInfo: FilterTerm | null;
}

export class AuthorFilterableListProps
  implements IGenericFilterableListProps<IAuthor>
{
  public data: IAuthor[];
  constructor(data: IAuthor[]) {
    this.data = data;
    this.filterInfo = null;
    this.filterBuilder = new AuthorFiltersBuilder();
  }

  public filterBuilder: IFilterBuilder<IAuthor>;

  public getKey = (entity: IEntity) => {
    return entity.id;
  };
  public renderUI = (entity: IEntity) => {
    return <Author author={entity as IAuthor} showDetailedView />;
  };

  public filterBy = (b: IEntity, filterTerm: FilterTerm): boolean => {
    return filterTerm.compFn(b);
  };
  public filterInfo: FilterTerm | null;
}
