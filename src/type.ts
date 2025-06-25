import type { EXT_FILTERS } from "./consts"

export interface Extension {
  id: string,
  logo: string,
  name: string,
  description: string,
  isActive: boolean
}


export type FilterType = typeof EXT_FILTERS[keyof typeof EXT_FILTERS]

export type ListOfExtensions = Extension[]