import React from 'react'
import logo from '/src/logo.svg'

import '@shoelace-style/shoelace/dist/themes/light.css'
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path'

setBasePath(
  'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.71/dist/'
)

export function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <nav>
              <a href="#">New Project</a>
              <p>Hi, Eleanor!</p>
            </nav>
          </li>
          <li></li>
        </ul>
      </header>

      {/* Test different pages and components here before creating files. */}

      <main className="home">
        <h1>
          <img src={logo} alt="Wip Stitch" height={50} width={50} />
        </h1>
        <form className="search">
          <input type="text" placeholder="Search..." />
        </form>
        <ul className="results">
          <li>
            <h3>Sweater</h3>
            <p>
              <b>Started: </b>01/01/2022
            </p>
            <p>
              <b>Type: </b>Knit
            </p>
          </li>
          <li>
            <h3>Socks</h3>
            <p>
              <b>Started: </b>02/02/2022
            </p>
            <p>
              <b>Type: </b>Knit
            </p>
          </li>
          <li>
            <h3>Blanket</h3>
            <p>
              <b>Started: </b>03/03/2022
            </p>
            <p>
              <b>Type: </b>Crochet
            </p>
          </li>
        </ul>
      </main>

      <footer>
        <p>Made with heart in Tampa, Florida.</p>
      </footer>
    </>
  )
}
