import React, { FC } from 'react'
import {Header, Footer} from '../components'


interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <>
    <header><Header/></header>
    <main>{children}</main>
    <footer><Footer/></footer>
    </>
  )
}

export default Layout