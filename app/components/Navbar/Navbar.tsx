'use client'

import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="py-4 border-b-[1px]">
      <Container>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
          <Logo />
          <Search />
          <UserMenu />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
