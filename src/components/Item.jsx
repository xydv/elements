import React from 'react'

function Item(props) {
  return (
    <div>
      <div className="card">
        {props.images ? <img src={props.imagesrc} className="card-img-top" alt={props.name} /> : ""}
          <h5 className="text-center my-1">{props.symbol}</h5>
          <h6 className="text-center">{props.name}</h6>
          <div className="text-center">
            <a href={props.pngdownload} target="_blank" rel="noreferrer" download={props.name} className="btn btn-primary btn-sm mb-3 mx-2">PNG</a>
            <a href={props.svgdownload} target="_blank" rel="noreferrer" download={props.name} className="btn btn-primary btn-sm mb-3 mx-2">SVG</a>
        </div>
      </div>
    </div>
  )
}

export default Item