import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { ExtensionsProvider } from './providers/extensionProvider'

function App() {
  return (
    <ExtensionsProvider>
      <div className='mx-auto min-h-svh max-w-5xl p-8 font-noto'>
        <Header />
        <Main />
      </div>
    </ExtensionsProvider>
  )
}

export default App
