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
                            <div className="col-sm-2 my-3" key={e.number}>
                                <Item imagesrc={`/e/images/png/${e.number}.png`} name={e.name} pngdownload={`/e/images/png/${e.number}.png`} svgdownload={`/e/images/svg/${e.number}.svg`} images={props.images} symbol={e.symbol} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Call