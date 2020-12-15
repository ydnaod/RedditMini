import React from 'react'
import './LoadingDiv.css';

export function LoadingDiv(){
    return (
        <div className="LoadingDiv">
            <div className="votes">
                <h6 className='gradient'>6</h6>
            </div>
            <div className="loadingPostContent">
                <h3 className='gradient'>content</h3>
                <div className='bigBox gradient'>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                    content<br/>
                </div>
                <div className="loadingPostDetails">
                    <h5 className='gradient'>content</h5>
                    <h5 className='gradient'>content</h5>
                    <h5 className='gradient'>content</h5>
                </div>
            </div>
        </div>
    );
}