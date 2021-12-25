import React from 'react'

function Item(props) {
  return (
    <>
      {/* Card */}
      <div className="card">
        <img src={props.imagesrc} className="card-img-top zoom-in" data-bs-toggle="modal" data-bs-target={"#" + props.name} alt={props.name} />
        <div className="text-center my-3">
          <a href={props.pngdownload} target="_blank" rel="noreferrer" download={props.name} className="btn btn-primary btn-sm mx-2">PNG</a>
          <a href={props.svgdownload} target="_blank" rel="noreferrer" download={props.name} className="btn btn-primary btn-sm mx-2">SVG</a>
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id={props.name} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body">
              <img src={props.imagesrc} className="card-img-top zoom-out" data-bs-toggle="modal" data-bs-target={"#" + props.name} alt={props.name} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item