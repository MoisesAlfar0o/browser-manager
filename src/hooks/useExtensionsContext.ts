import { useContext } from "react"
import { ExtensionsContext } from "../context/extensionContext"


export const useExtensionsContext = () => {
  const context = useContext(ExtensionsContext)
  if (!context) {
    throw new Error('useExtensionsContext must be used inside an <ExtensionsProvider>.')
  }
  return context
}