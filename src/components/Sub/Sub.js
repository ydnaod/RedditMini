import React from 'react'
import './Sub.css';

export function Sub(props){

    const handleClick = (e) => {
        props.handleSubChange(props.sub.display_name)
    }

    return (
        <div className="Sub">
            <div className="subReddit">
                <img src={props.sub.icon_img}/>
                <h4 onClick={handleClick}>{props.sub.display_name}</h4>
            </div>
        </div>
    )
}