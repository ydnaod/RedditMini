import React from 'react'
import './Sub.css';

export function Sub(props){

    const handleClick = (e) => {
        props.handleSubChange(props.sub.display_name);
        props.handleIsSelectedChange(props.sub.id);
    }

    const selectedColor = 'rgb(195, 195, 195)'
    const selected = {
        backgroundColor: props.isSelected ? selectedColor : 'white',
    }

    const defaultStyle = {

    }

    return (
        <div className="Sub" onClick={handleClick} style={props.isSelected ? selected : defaultStyle}>
            <div className="subReddit">
                    <img className="subImage" src={props.sub.icon_img}/>
                <h4>{props.sub.display_name}</h4>
            </div>
        </div>
    )
}