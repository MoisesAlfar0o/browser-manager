import type { ReactNode } from "react"
import { useExtensions } from "../hooks/useExtensions"
import { ExtensionsContext } from "../context/extensionContext"

export const ExtensionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const extensionContextValue = useExtensions()

  return (
    <ExtensionsContext.Provider value={extensionContextValue}>
      {children}
    </ExtensionsContext.Provider>
  )
}