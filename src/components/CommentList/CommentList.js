import React, {useEffect, useState} from 'react';
import './CommentList.css';
import axios from '../../util/Axios';
import {CommentLoadingDiv} from '../CommentLoadingDiv/CommentLoadingDiv';
import {Comment} from '../Comment/Comment'
import {calculateTime} from '../../util/calculateTime'

export function CommentList(props){

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function fetchData(){
            setLoading(true);
            const baseUrl = 'https://www.reddit.com/r/'
            const urlToFetch = `${baseUrl}${props.subreddit}/comments/${props.id}/.json`
            const request = await axios.get(urlToFetch).then(response => {
                //console.log(response);
                let data = [];
                //console.log(response.data[1].data.children);
                data = response.data[1].data.children.map(comment => ({
                    author: comment.data.author,
                    body: comment.data.body,
                    id: comment.data.id,
                    created_utc: calculateTime(comment.data.created_utc),
                }));
                //console.log(data);
                setComments(data);
                setLoading(false);
            }).catch(err => {
                console.log(err);
                setHasError(true);
                setLoading(false);
            })
            return request;
        }
        fetchData();
    }, [])

    const loadingBlock = <CommentLoadingDiv />

    return (
        <div className="CommentList">
            {
                loading ? loadingBlock :
                comments.map(comment=> {
                    return <Comment 
                        body={comment.body}
                        author={comment.author}
                        created_utc={comment.created_utc}
                        key={comment.id}/>
                })
            }
        </div>
    );
}