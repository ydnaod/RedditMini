import React, {useState, useEffect} from 'react';
import {Post} from '../Post/Post'
import './PostList.css';
import axios from '../../util/Axios';

export function PostList(props){

    const [page, setPage] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function fetchData(){
          setLoading(true);
          const request = await axios.get(props.url).then(response => 
                {
                    setPage(response.data.data.children.map(post => ({
                        id: post.data.id,
                        name: post.data.name,
                        title: post.data.title,
                        url: post.data.url,
                        created_utc: post.data.created_utc,
                        author: post.data.author,
                        num_comments: post.data.num_comments,
                        score: post.data.score,
                        post_hint: post.data.post_hint,
                        reddit_video_preview: post.data.reddit_video_preview,
                        hidden: checkKeyword(props.searchResults, post.data.title),
                    })))
                    setLoading(false);

                    /*setPage(response.data.data.children.map(post => ({
                        id: post.data.id,
                        name: post.data.name,
                        title: post.data.title,
                        url: post.data.url,
                        created_utc: post.data.created_utc,
                        author: post.data.author,
                        num_comments: post.data.num_comments,
                        score: post.data.score,
                        post_hint: post.data.post_hint,
                        reddit_video_preview: post.data.reddit_video_preview,
                    })))
                    setLoading(false);*/
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
      }, [props.url, props.searchResults]);

      const checkKeyword = (word, list) => {
        if(!word){
            return;
        }
        let hidden = false;
        const lowerWord = word.toLowerCase();
        const stringList = list.split(" ");
        const lowerList = [];
        stringList.forEach(word => lowerList.push(word.toLowerCase()));
        console.log(stringList);
        if(lowerList.findIndex(element => element === lowerWord) !== -1){
            hidden = false;
        }
        else{
            hidden = true;
        }
        
        return hidden;
      }

    return (
        <div className="PostList">
            {
                //loading ? <div>Loading...</div> : hasError ? <div>error...</div> :
                page.map(post => {
                    return <Post post={post}
                                key = {post.id}
                            />
                })
                
            }
        </div>
    );
}