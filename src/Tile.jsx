import React from 'react'

const Tile = ({ id, name, color, clickHandler }) => {
    return (
        <div onClick={() => clickHandler(id)} style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "10px", width: "200px", height: "200px", backgroundColor: color, textAlign: "center" }}>
            <span>{name}</span>
        </div>
    )
}

export default React.memo(Tile)
