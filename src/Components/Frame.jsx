import React from 'react'

export default function Frame({ src, text, title }) {
  return (
    <div className="frame">
      <iframe
        width="500"
        height="255"
        src={`https://www.youtube.com/embed/${src}?autoplay=1&mute=1`}
        srcdoc={`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/${src}?autoplay=1&mute=1><img src=https://img.youtube.com/vi/${src}/hqdefault.jpg alt='${title}'><span>&#x25BA</span></a>`}
        title={title}
        frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br></br>
      <div className="frametext">
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  )
}
