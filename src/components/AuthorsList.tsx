import { AuthorFiltersBuilder } from "../factory/FilterFactory";
import { IAuthor, IEntity, IFilterBuilder } from "../interfaces/Interfaces";
import Author from "./Author";
import FSGenericList, { BaseFilterableSearchableListProps } from "./FSList";

const AuthorsList = ({ ...props }: AuthorFilterableSearchableListProps) => {
  return (
    <>
      <FSGenericList {...props} />
    </>
  );
};

export default AuthorsList;

export class AuthorFilterableSearchableListProps extends BaseFilterableSearchableListProps {
  public filterBuilder: IFilterBuilder<IAuthor>;
  public showDetailedView: boolean;

  constructor(data: IAuthor[], showDetailedView = true) {
    super(data);
    this.filterBuilder = new AuthorFiltersBuilder();
    this.showDetailedView = showDetailedView;
  }

  public renderUI = (entity: IEntity) => {
    console.log(`Preparing to render author id=${entity.id}`);
    return (
      <Author
        key={`author-l-${entity.id}`}
        author={entity as IAuthor}
        showDetailedView={this.showDetailedView}
      />
    );
  };

  public searchBy = (entity: IEntity, searchStr: string): boolean => {
    const lcsearchS = searchStr.toLocaleLowerCase();
    return (
      lcsearchS === "" ||
      (entity as IAuthor).first.toLowerCase().includes(lcsearchS) ||
      (entity as IAuthor).last.toLowerCase().includes(lcsearchS)
    );
  };
}
