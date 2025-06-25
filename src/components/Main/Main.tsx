import Filter from "../Filter/Filter"
import ExtensionCard from "../ExtensionCard/ExtensionCard"
import { useExtensionsContext } from "../../hooks/useExtensionsContext"
import { useAutoAnimate } from "@formkit/auto-animate/react"

const Main = () => {
  const { extension: extensions, filterSelected, handleFilterChange, handleRemove} = useExtensionsContext()
  const [parent] = useAutoAnimate()

  return (
    <main>
      <Filter 
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />

      <section className="grid grid-cols-1 gap-2 sm:grid-cols-3" ref={parent}>
        {extensions.map(ext => (
          <ExtensionCard 
            key={ext.id}
            id={ext.id}
            logo={ext.logo}
            name={ext.name}
            description={ext.description}
            isActive={ext.isActive}
            onDelete={() => {handleRemove(ext.id)}}
          />
        ))
        }
      </section>
    </main>
  )
}

export default Main