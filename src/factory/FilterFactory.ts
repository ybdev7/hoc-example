import {
  FilterableItem,
  FilterTerm,
  IBook,
  IFilterBuilder,
  IAuthor,
} from "../interfaces/Interfaces";

export const UNCHOOSABLE = -1;
export class FiltersFactory {
  static getRatingFilterItems = (): FilterableItem[] => {
    const filterItems: FilterableItem[] = [
      { displayName: "Choose Rating", displayValue: UNCHOOSABLE },
      { displayName: "All", displayValue: 0 },
      { displayName: "5 Stars", displayValue: 5 },
      { displayName: "4+ Stars", displayValue: 4 },
      { displayName: "3+ Stars", displayValue: 3 },
      { displayName: "2+ Stars", displayValue: 2 },
      { displayName: "1+ Stars", displayValue: 1 },
    ];
    return filterItems;
  };

  static getRatingTerm = (filterStr: FilterableItem): FilterTerm => {
    const filterTerm: FilterTerm = {
      filterName: "Rating",
      filterValue: filterStr,
      compFn: (item: any) => {
        return (item as IBook).rating >= filterStr.displayValue;
      },
    };

    return filterTerm;
  };
}

export class BookFiltersBuilder implements IFilterBuilder<IBook> {
  constructor() {}

  public getFilterItems = (): FilterableItem[] => {
    return FiltersFactory.getRatingFilterItems();
  };

  public getFilterTerm = (filterStr: FilterableItem): FilterTerm => {
    return FiltersFactory.getRatingTerm(filterStr);
  };
}

export class AuthorFiltersBuilder implements IFilterBuilder<IAuthor> {
  constructor() {}

  public getFilterItems = (): FilterableItem[] => {
    return FiltersFactory.getRatingFilterItems();
  };

  public getFilterTerm = (filterStr: FilterableItem): FilterTerm => {
    return FiltersFactory.getRatingTerm(filterStr);
  };
}
