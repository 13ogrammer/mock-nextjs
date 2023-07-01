import React from 'react'
import { RouterContext } from './Router'

export const Link = ({ to, children }: { to: string, children: React.ReactNode }) => {
  const { pushState } = React.useContext(RouterContext)

  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault()
        pushState(to)
      }}
    >
      {children}
    </a>
  )
}

export default Link