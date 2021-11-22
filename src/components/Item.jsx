import React from 'react'

function Item(props) {
  return (
    <div>
      <div className="card">
        <img src={props.imagesrc} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title text-center">{props.name}</h5>
          <div className="text-center">
            <a href={props.pngdownload} target="_blank" rel="noreferrer" download={props.name} className="btn btn-primary btn-sm my-2 mx-2">PNG</a>
            <a href={props.svgdownload} target="_blank" rel="noreferrer" download={props.name} className="btn btn-primary btn-sm my-2 mx-2">SVG</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item