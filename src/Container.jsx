import React, { useCallback, useState } from 'react'
import Tile from './Tile'


let array =
    [{ id: 1, name: "Amir", color: "red" },
    { id: 2, name: "Amir", color: "red" },
    { id: 3, name: "Amir", color: "red" },
    { id: 4, name: "Amir", color: "red" },
    { id: 5, name: "Amir", color: "red" },
    { id: 6, name: "Amir", color: "red" },
    { id: 7, name: "Amir", color: "red" },
    { id: 8, name: "Amir", color: "red" },
    { id: 9, name: "Amir", color: "red" },
    { id: 10, name: "Amir", color: "red" },
    { id: 11, name: "Amir", color: "red" },
    { id: 12, name: "Amir", color: "red" },
    { id: 13, name: "Amir", color: "red" },
    { id: 14, name: "Amir", color: "red" },
    { id: 15, name: "Amir", color: "red" },
    { id: 16, name: "Amir", color: "red" },
    { id: 17, name: "Amir", color: "red" },
    { id: 18, name: "Amir", color: "red" },
    { id: 19, name: "Amir", color: "red" },
    { id: 20, name: "Amir", color: "red" },
    { id: 21, name: "Amir", color: "red" },
    { id: 22, name: "Amir", color: "red" }];

const Container = () => {

    const [items, setItems] = useState(array);


    const changeColorHandler = useCallback((itemID) => {
        setItems(items => {
            let array = items.map(item => (item.id == itemID ? { ...item, color: "blue" } : item));
            return array;
        })
    }, [])
    // const changeColorHandler = (itemID) => {
    //     setItems(items => {
    //         let array = items.map(item => (item.id == itemID ? { ...item, color: "blue" } : item));
    //         return array;
    //     })
    // }


    return (
        <>
            <div style={{ margin: "auto", display: "flex", flexWrap: "wrap" }}>
                {items.map((item, index) => (
                    <>
                        <Tile id={item.id} name={item.name} color={item.color} clickHandler={changeColorHandler} />
                    </>
                ))}
            </div>
        </>
    )
}

export default Container
