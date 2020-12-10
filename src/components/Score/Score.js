import React, {useEffect, useState} from 'react';
import './Score.css';

export function Score(props){

    const [upVoted, setUpVoted] = useState(false);
    const [downVoted, setDownVoted] = useState(false);
    const [scoreStyle, setScoreStyle] = useState({});

    let score = props.score;
    if(score > 999){
        score /= 1000;
        score = score.toFixed(1);
        score = score + 'k';
    }

    const handleScoreStyle = (color) => {
        setScoreStyle({
            color: color,
        });
    }

    const toggleUpVote = () => {
        if(downVoted){
            toggleDownVote();
        }
        setUpVoted(!upVoted);
        !upVoted ? handleScoreStyle('green') : handleScoreStyle('black');
    }

    const toggleDownVote = () => {
        if(upVoted){
            toggleUpVote();
        }
        setDownVoted(!downVoted);
        !downVoted ? handleScoreStyle('red') : handleScoreStyle('black');
    }

    const upVotedStyle = {
        color: 'green',
        border: 'solid green',
        transform: 'rotate(-135deg)',
        WebkitTransform: 'rotate(-135deg)',
        borderWidth: '0 3px 3px 0',
    }

    const downVotedStyle = {
        color: 'red',
        border: 'solid red',
        transform: 'rotate(45deg)',
        WebkitTransform: 'rotate(45deg)',
        borderWidth: '0 3px 3px 0',
    }

    const defaultStyle = {

    }

    return (
        <div className="votes">
                <i className="arrow up" onClick={toggleUpVote} style={upVoted ? upVotedStyle : defaultStyle}></i>
                <h6 style={scoreStyle}>{score}</h6>
                <i className="arrow down" onClick={toggleDownVote} style = {downVoted ? downVotedStyle : defaultStyle}></i>
            </div>
    );
}