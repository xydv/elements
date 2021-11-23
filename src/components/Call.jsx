import React from 'react'
import Item from './Item'
import HomeJson from '../data/Home.json'


function Call(props) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    {HomeJson.map((e) => {
                        return (
                            <div className="col-sm-4 col-md-3 col-lg-2 my-3" key={e.number}>
                                {/* Use Repository Name like /elements/images/png/${e.number}.png */}
                                <Item imagesrc={`/elements/images/png/${e.number}.png`} name={e.name} pngdownload={`/elements/images/png/${e.number}.png`} svgdownload={`/elements/images/svg/${e.number}.svg`} images={props.images} symbol={e.symbol} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Call