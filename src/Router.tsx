
import React, {createContext} from 'react'

export const RouterContext = createContext({
  path: '',
  // eslint-disable-next-line
  pushState: (path:string) => {},
  // eslint-disable-next-line
  replaceState: (path:string) => {},
})

export const Router = ({children}: {children: React.ReactNode}) => {
  const [path, setPath] = React.useState(window.location.pathname)

  const pushState = (path: string) => {
    window.history.pushState({}, '', path)
    setPath(path)
    return {}
  }

  const replaceState = (path: string) => {
    window.history.replaceState({}, '', path)
    setPath(path)
  }

  React.useEffect(() => {
    window.addEventListener('popstate', () => {
      setPath(window.location.pathname)
    })
  }, [])

  return (
    <RouterContext.Provider value={{path, pushState, replaceState}}>
      {children}
    </RouterContext.Provider> 
  )
}