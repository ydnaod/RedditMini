import './App.css';
import React, {useState, useEffect} from 'react';
import {NavBar} from '../NavBar/NavBar'
import {PostList} from '../PostList/PostList'
import {SubList} from '../SubList/SubList'
import {Reddit} from '../../util/Reddit'

function App() {

  const [searchResults, setSearchResults] = useState('Search');
  const loadedContent = Reddit.getPage();

  const [page, setPage] = useState([]);

  return (
    <div className="App">
      <NavBar searchResults={searchResults}/>
      <div className="content">
        {console.log(loadedContent)}
        <PostList setPage={setPage} loadedContent={loadedContent}/>
        <SubList />
      </div>
    </div>
  );
}

export default App;
