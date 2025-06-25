import { useEffect, useState } from "react"

export function useDarkTheme (): [boolean, React.Dispatch<React.SetStateAction<boolean>>]  {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false

    return (
      localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches
      )
    )
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [isDark])

  return [isDark, setIsDark]
}