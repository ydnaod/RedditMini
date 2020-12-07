import React, {useState, useEffect} from 'react';
import {Post} from '../Post/Post'
import './PostList.css';
import axios from '../../util/Axios';
import {LoadingDiv} from '../LoadingDiv/LoadingDiv';

export function PostList(props){

    const [page, setPage] = useState([]);
    const [pageData, setPageData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    let data = []

    useEffect(() => {
        if(!props.searchResults){
            async function fetchData(){
            setLoading(true);
            const request = await axios.get(props.url).then(response => 
                    {
                        data = response.data.data.children.map(post => ({
                            id: post.data.id,
                            name: post.data.name,
                            title: post.data.title,
                            url: post.data.url,
                            created_utc: calculateTime(post.data.created_utc),
                            author: post.data.author,
                            num_comments: post.data.num_comments,
                            score: post.data.score,
                            post_hint: post.data.post_hint,
                            reddit_video_preview: post.data.reddit_video_preview,
                        }))
                            setPage(data)
                            setPageData(data)
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
        }
        else{
            setPage(prev =>  pageData.filter(post => checkKeywordBool(props.searchResults, post.title)));
        }
      }, [props.url, props.searchResults]);

      const checkKeywordBool = (word, list) => {
        if(!word){
            return;
        }
        const lowerWord = word.toLowerCase();
        const stringList = list.split(" ");
        const lowerList = [];
        stringList.forEach(word => lowerList.push(word.toLowerCase()));
        console.log(lowerList.includes(lowerWord));
        return lowerList.includes(lowerWord);
      }


      const calculateTime = (utc) => {
        const now = Date.now();
        const nowDate = new Date(now);
        const postDate = new Date(utc * 1000);
        const diffTime = Math.abs(nowDate - postDate);
        const diffHours = (Math.ceil(diffTime / (1000 * 60 * 60)).toString() + ' hours ago');
        const diffDays = (Math.ceil(diffTime / (1000 * 60 * 60 * 24)).toString() + ' days ago');
        if(Math.ceil(diffTime / (1000 * 60 * 60)) >= 24){
            return diffDays;
        }
        else{
            return diffHours;
        }
    }

    return (
        <div className="PostList">
            <LoadingDiv />
            {
                
                loading ? <LoadingDiv /> : hasError ? <div>error...</div> :
                page.map(post => {
                    return <Post post={post}
                                key = {post.id}
                            />
                })
                
            }
        </div>
    );
}