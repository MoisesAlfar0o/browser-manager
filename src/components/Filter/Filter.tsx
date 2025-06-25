import type React from "react"
import type { FilterType } from "../../type"
import { FILTERS_BUTTONS } from "../../consts"

interface Props {
  onFilterChange: (filter: FilterType) => void
  filterSelected: FilterType
}

const Filter = ({ filterSelected, onFilterChange } : Props) => {

  const handleClick = (filter: FilterType) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onFilterChange(filter)
  }

  return (
    <section className="my-6 flex flex-col items-center justify-center gap-4 rounded-lg 
      sm:flex sm:flex-row sm:justify-between"
    >
      <h1 className="text-3xl text-neutral-900 font-bold dark:text-neutral-0
        sm:text-2xl"
      >Extension List</h1>
      <div className="flex space-x-2 text-sm text-neutral-900">
        {
          Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
            const isSelected = key === filterSelected
            const className = isSelected ? 'selected text-neutral-0 dark:text-neutral-900' : ''
            return (
              <a 
                key={key} 
                className={`filter-btn ${className} bg-neutral-0  dark:bg-neutral-700 dark:text-neutral-100
                  dark:border dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-500 hover:opacity-65`}
                href={href}
                onClick={handleClick(key as FilterType)}
              >
                {literal}
              </a>
            )
          })
        }
      </div>
    </section>
  )
}

export default Filter