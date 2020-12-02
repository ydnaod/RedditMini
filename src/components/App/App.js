import './App.css';
import React, {useState, useEffect} from 'react';
import {NavBar} from '../NavBar/NavBar'
import {PostList} from '../PostList/PostList'
import {SubList} from '../SubList/SubList'
import axios from '../../util/Axios'

function App() {

  const [searchResults, setSearchResults] = useState('Search');


  const [page, setPage] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get("/popular/.json");
      setPage(request.data.data.children.map(post => ({
        id: post.data.id,
        name: post.data.name,
        title: post.data.title,
    })));
      //setPage(request.data.data.children);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar searchResults={searchResults}/>
      <div className="content">
        <PostList setPage={setPage} page={page}/>
        <SubList />
      </div>
    </div>
  );
}

export default App;
