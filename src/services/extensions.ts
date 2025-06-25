import { mockExtensions } from "../mocks/data"
import type { ListOfExtensions } from "../type"

const LOCAL_STORAGE_KEY = 'extension'

export async function getExtensions (): Promise<ListOfExtensions> {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (stored) {
    try {
      return JSON.parse(stored) as ListOfExtensions
    } catch {
      console.error('Error parsing localStorage extensions')
      return []
    }
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockExtensions))
  return mockExtensions
}