import React from 'react'

export default function About() {
  return (
    <>
      <div>
        <div className="container">
          <h1>About</h1>
        </div>
        <div className="about">
          <div id="nick">
            <h2>Nick Hunter</h2>
            <img
              src={'https://picsum.photos/200/'}
              alt="lorem"
              loading="lazy"
            ></img>
            <p>
              Some informatiion abou Nick Hunter. Nick is a Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nulla perspiciatis pariatur
              consequatur quos? Minima doloremque, labore quos, magni tempore
              atque voluptates consectetur eveniet facilis quod veritatis
              laborum quidem est provident.
            </p>

            <strong>
              <a href="mailto:christyell@hotmail.com">
                n_j_hunter19@hotmail.com
              </a>
            </strong>
          </div>

          <div id="christy">
            <h2>Christy Hunter</h2>
            <img
              src={'https://picsum.photos/200/'}
              alt="lorem"
              loading="lazy"
            ></img>
            <p>
              Chisty is an accomplished flutist and teacher, She Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Voluptatem optio
              laborum suscipit soluta expedita perferendis rem ut temporibus ab.
              Fugiat velit fugit, hic facere blanditiis doloremque delectus
              debitis recusandae illo.
            </p>
            <strong>
              <a href="mailto:christyell@hotmail.com">christyell@hotmail.com</a>
            </strong>
          </div>
        </div>
      </div>
    </>
  )
}
