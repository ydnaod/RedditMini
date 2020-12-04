import './App.css';
import React, {useState, useEffect} from 'react';
import {NavBar} from '../NavBar/NavBar'
import {PostList} from '../PostList/PostList'
import {SubList} from '../SubList/SubList'
import axios from '../../util/Axios'

function App() {

  const [searchResults, setSearchResults] = useState('Search');
  const [url, setUrl] = useState("r/popular/.json");

  const handleSubChange = (url) => {
    setUrl(`r/${url}/.json`)
  }

  return (
    <div className="App">
      <NavBar searchResults={searchResults}/>
      <div className="content">
        <PostList url={url}/>
        <SubList handleSubChange={handleSubChange}/>
      </div>
    </div>
  );
}

export default App;
