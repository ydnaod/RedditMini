import React, {useState, useEffect} from 'react'
import {Sub} from '../Sub/Sub'
import './SubList.css'
import axios from '../../util/Axios';

export function SubList(props){

    const [subList, setSubList] = useState([]);
    const [loading, setLoading] = useState();
    const [hasError, setHasError] = useState();

    useEffect(() => {
        async function fetchData(){
          setLoading(true);
          const request = await axios.get("/subreddits/.json").then(response => 
                {
                    console.log(response);
                    setSubList(response.data.data.children.map(post => ({
                        id: post.data.id,
                        icon_img: post.data.icon_img,
                        display_name: post.data.display_name,
                        url: post.data.url,
                        created_utc: post.data.created_utc,
                        author: post.data.author,
                        num_comments: post.data.num_comments,
                        score: post.data.score,
                        post_hint: post.data.post_hint,
                        reddit_video_preview: post.data.reddit_video_preview,
                    })))
                    setLoading(false);
             }
            ).catch(err => {
                console.log(err);
                setHasError(true);
                setLoading(false);
            })
        ;
          return request;
        }
        fetchData();
      }, []);

    return (
        <div className="SubList">
            <h1>SubReddits</h1>
            {
                subList.map(sub => {
                    return <Sub sub={sub}
                                key = {sub.id}
                                handleSubChange = {props.handleSubChange}
                            />
                })
                
            }
        </div>
    );
}