import { type FilterType } from "./type"

export const EXT_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  INACTIVE: 'inactive'
} as const


export const FILTERS_BUTTONS: Record<FilterType, { literal: string, href: string}> = {
  [EXT_FILTERS.ALL]: {
    literal: 'All',
    href: `/?filter=${EXT_FILTERS.ALL}`
  },
  [EXT_FILTERS.ACTIVE]: {
    literal: 'Active',
    href: `/?filter=${EXT_FILTERS.ACTIVE}`
  },
  [EXT_FILTERS.INACTIVE]: {
    literal: 'Inactive',
    href: `/?filter=${EXT_FILTERS.INACTIVE}`
  },
} as const

