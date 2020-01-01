import React from 'react'
import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <img src="/static/logo.png" alt=""/>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      img {
        width: 200px
      } 
      li {
        list-style: none
      }
    `}</style>
  </nav>
)

export default Nav
