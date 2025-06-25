import { useExtensionsContext } from "../../hooks/useExtensionsContext"

interface Props {
  id: string,
  name: string,
  logo: string,
  description: string,
  isActive: boolean,
  onDelete: () => void
}

const ExtensionCard = ({ id, name, logo, isActive, description, onDelete}: Props) => {
  const { handleActive } = useExtensionsContext()
  return (
    <div className="flex border border-neutral-200 flex-col justify-between bg-neutral-0 rounded-2xl px-3 py-4 gap-6 shadow-sm
      dark:bg-neutral-800 dark:border dark:border-neutral-600"
    >
      <div className="flex items-start gap-3">
        <img src={logo} alt="Extension Logo" className="size-12 object-cover" />
        <div className="flex flex-col justify-start gap-2">
          <h3 className="text-base font-semibold text-neutral-900 leading-none dark:text-neutral-0">{name}</h3>
          <p className="text-[13px] text-neutral-500 leading-4 dark:text-neutral-300">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="remove-btn hover:bg-red-500 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={onDelete}
        >
          Remove
        </button>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isActive}
            onChange={(e) => {handleActive(id, e.target.checked)}}
          />
          <div className="w-8 h-4.5 bg-gray-300 peer-checked:bg-red-400 rounded-full relative transition-colors duration-300 peer-focus:ring-2 peer-focus:ring-red-500" />
          <div className="absolute left-0.5 top-0.1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-3" />
        </label>
      </div> 
    </div>
  )
}

export default ExtensionCard
