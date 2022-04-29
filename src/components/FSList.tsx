import {
  FilterTerm,
  IEntity,
  IFilterBuilder,
  IGenericFilterableSearchableListProps,
} from "../interfaces/Interfaces";
import { withFilterable } from "./FilterableList";
import { withSearchable } from "./SearchableList";

const GenericList = <T extends IEntity>({
  data,
  getKey,
  renderUI,
  filterBy,
  filterInfo,
  searchS,
  searchBy,
}: IGenericFilterableSearchableListProps<T>) => {
  const filtering = (entity: T) => {
    if (filterInfo)
      return filterBy(entity, filterInfo) && searchBy(entity, searchS);
  };

  return (
    <>
      {data.filter(filtering).map((entity) => {
        return <div key={getKey(entity)}>{renderUI(entity)}</div>;
      })}
    </>
  );
};

const FSGenericList = withFilterable(withSearchable(GenericList));

export default FSGenericList;

export abstract class BaseFilterableSearchableListProps
  implements IGenericFilterableSearchableListProps<IEntity>
{
  public data: IEntity[];
  public searchS: string;
  public filterInfo: FilterTerm[] | null;

  constructor(data: IEntity[]) {
    this.data = data;
    this.filterInfo = null;
    this.searchS = "";
  }

  public abstract searchBy: (entity: IEntity, searchStr: string) => boolean;
  public abstract renderUI: (entity: IEntity) => React.ReactNode;
  public abstract filterBuilder: IFilterBuilder<IEntity>;

  public getKey = (entity: IEntity) => {
    return entity.id;
  };

  public filterBy = (b: IEntity, filterTerm: FilterTerm[]): boolean => {
    console.log(`number of filters :: filterTerm.length=${filterTerm.length}`);
    let inFilter = true;
    filterTerm.map((term) => {
      inFilter = inFilter && term.compFn(b);
    });
    return inFilter;
  };
}
