import type { EXENT_FILTERS } from "./consts"

export interface Extension {
  id: string,
  logo: string,
  name: string,
  description: string,
  isActive: boolean
}


export type FilterType = typeof EXTEN_FILTERS[keyof typeof EXENT_FILTERS]

export type ListOfExtensions = Extension[]