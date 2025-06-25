import LogoDark from '../../assets/images/logo-dark.svg';
import LogoLight from '../../assets/images/logo.svg';
import Light from '../../assets/images/icon-sun.svg'
import Dark from '../../assets/images/icon-moon.svg'
import { useDarkTheme } from '../../hooks/useDarkTheme'

const Header = () => {
  const [isDark, setIsDark] = useDarkTheme()

  return (
    <header className="flex items-center justify-between gap-4 rounded-lg bg-neutral-0 p-4 shadow-sm
      dark:bg-neutral-800"
    >
      <img src={isDark ? LogoDark : LogoLight} className='w-36 h-8 object-cover' alt='Theme icon'/>
      {
        isDark ? (
          <button
            className='bg-neutral-700 theme-btn focus'
            onClick={() => setIsDark(false)}
            >
            <img className='size-4' src={Light} alt="Logo" />
          </button>
        ) : (
          <button
            className='bg-neutral-100 theme-btn focus hover:bg-neutral-300 transition-colors duration-300'
            onClick={() => setIsDark(true)}
          >
            <img className='size-4' src={Dark} alt="Logo" />
          </button>
        )
      }
    </header>
  )
}

export default Header