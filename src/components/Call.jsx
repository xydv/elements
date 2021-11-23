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
                            <div className="col-sm-3 my-3" key={e.number}>
                                <Item imagesrc={`/images/png/${e.number}.png`} name={e.name} pngdownload={`/images/png/${e.number}.png`} svgdownload={`/images/svg/${e.number}.svg`} images={props.images} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Call