import { createContext } from "react";
import { useExtensions } from "../hooks/useExtensions.ts";

export const ExtensionsContext = createContext<ReturnType<typeof useExtensions> | undefined>(undefined);