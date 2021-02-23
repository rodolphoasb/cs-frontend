import React from "react"
import Link from "next/link"

export const Nav = ({ categories }) => {
  return (
    <div className="bg-gray-300 h-20">
      <nav className="flex w-10/12 mx-auto justify-between h-full items-center">
        <div className="">
          <ul className="">
            <li>
              <Link href="/">
                <a>Strapi Blog</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex space-x-12 font-pop">
            <li>Pessoas</li>
            <li>Listas</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
