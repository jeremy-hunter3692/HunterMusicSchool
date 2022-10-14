import React from 'react'

export default function Frame({ src }) {
  const youtube = 'https://www.youtube.com/embed/'
  return (
    <div className='frame'>
      <iframe
        width="500"
        height="255"
        src={`${youtube}${src}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}
