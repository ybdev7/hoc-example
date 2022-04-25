import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { UNCHOOSABLE } from "../factory/FilterFactory";
import {
  ExtraType,
  FilterableItem,
  IEntity,
  IGenericFilterableListProps,
} from "../interfaces/Interfaces";

export function withFilterable<P extends IGenericFilterableListProps<IEntity>>(
  WrappedComponentA: React.ComponentType<P>
) {
  const ComponentWithFilter = (props: Omit<P, keyof ExtraType>) => {
    const filterItems = props.filterBuilder.getFilterItems();
    const [filterStr, setFilterStr] = useState<FilterableItem>(filterItems[0]);

    const filterTerm = props.filterBuilder.getFilterTerm(filterStr);

    const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const term = filterItems.find((item) => {
        if (item.displayValue === parseInt(event.target.value)) return item;
      });
      if (term) {
        setFilterStr(term);
      }
    };

    return (
      <>
        <p>
          <label htmlFor="filter1">Rating</label>
          <select
            id={"filter1"}
            value={filterStr.displayValue}
            onChange={handleInputChange}
          >
            {filterItems.map(
              (i) =>
                i && (
                  <option
                    key={uuidv4()}
                    disabled={i.displayValue === UNCHOOSABLE}
                    value={i.displayValue}
                  >
                    {i.displayName}
                  </option>
                )
            )}
          </select>
        </p>
        <WrappedComponentA {...(props as P)} filterInfo={filterTerm} />
      </>
    );
  };

  const displayName =
    WrappedComponentA.displayName || WrappedComponentA.name || "Component";
  ComponentWithFilter.displayName = `Filterable${displayName}`;

  return ComponentWithFilter;
}
