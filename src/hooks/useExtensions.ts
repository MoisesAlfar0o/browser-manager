import { useEffect, useReducer } from "react";
import type { FilterType } from "../type";
import { extensionReducer, initialState } from "../reducer/extensions";
import { EXT_FILTERS } from "../consts";
import { getExtensions } from "../services/extensions";

export const useExtensions = () => {
  const [{ extensions, filterSelected }, dispatch] = useReducer(extensionReducer, initialState);

  const handleFilterChange = (filter: FilterType) => {
    dispatch({ type: "FILTER_CHANGE", payload: { filter } });
    const params = new URLSearchParams(window.location.search);
    params.set("filter", filter);
    window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
  };

  const handleActive = (id: string, isActive: boolean) => {
    dispatch({ type: "STATE", payload: { id, isActive } });
  };

  const handleRemove = (id: string) => {
    dispatch({ type: "REMOVE", payload: { id } });
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (filterSelected === EXT_FILTERS.ACTIVE) return ext.isActive;
    if (filterSelected === EXT_FILTERS.INACTIVE) return !ext.isActive;
    return ext;
  });

  useEffect(() => {
    getExtensions()
      .then((extensions) => {
        dispatch({ type: "INIT_EXTENSIONS", payload: { extensions } });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return {
    extension: filteredExtensions,
    filterSelected,
    handleFilterChange,
    handleActive,
    handleRemove,
  };
};
