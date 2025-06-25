import { EXT_FILTERS } from "../consts"
import type { FilterType, ListOfExtensions } from "../type"

export const initialState = {
  sync: false,
  extensions: [],
  filterSelected: (() => {
    const params = new URLSearchParams(window.location.search)
    const filter = params.get('filter') as FilterType | null
    if(filter === null) return EXT_FILTERS.ALL
    return Object
      .values(EXT_FILTERS)
      .includes(filter)
      ? filter
      : EXT_FILTERS.ALL
  })()
}

type Action = 
  | { type: 'INIT_EXTENSIONS', payload: { extensions: ListOfExtensions } }
  | { type: 'STATE', payload: { id: string, isActive: boolean } }
  | { type: 'FILTER_CHANGE', payload: { filter: FilterType } }
  | { type: 'REMOVE', payload: { id: string } }

interface State {
  sync: boolean
  extensions: ListOfExtensions
  filterSelected: FilterType
}

export const extensionReducer = (state: State, action: Action): State => {
  if(action.type === 'INIT_EXTENSIONS') {
    const { extensions } = action.payload
    return {
      ...state,
      sync: false,
      extensions
    }
  }
  if(action.type === 'FILTER_CHANGE') {
    const { filter } = action.payload
    return {
      ...state,
      sync: true,
      filterSelected: filter
    }
  }
  if(action.type === 'STATE') {
    const { id, isActive} = action.payload
    return {
      ...state,
      sync: true,
      extensions: state.extensions.map(ext => {
        if (ext.id === id) {
          return {
            ...ext,
            isActive
          }
        }
        return ext
      })
    }
  }
  if(action.type === 'REMOVE') {
    const { id } = action.payload
    return {
      ...state,
      sync: true,
      extensions: state.extensions.filter(ext => ext.id !== id)
    }
  }

  return state
}