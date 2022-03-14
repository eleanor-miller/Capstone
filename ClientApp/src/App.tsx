import React from 'react'
import logo from '/src/logo.svg'

export function App() {
  return (
    <>
      <header>
        <div>
          <a href="#">
            <img
              className="logo"
              src={logo}
              alt="Wip Stitch"
              height={50}
              width={50}
            />
          </a>
          <nav>
            <ul>
              <li>
                <p>Hi, Eleanor!</p>
              </li>
              <li>
                <a href="#">New Project</a>
              </li>
            </ul>
          </nav>
        </div>
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
        <p>Made with HEART in Tampa, Florida.</p>
      </footer>
    </>
  )
}
