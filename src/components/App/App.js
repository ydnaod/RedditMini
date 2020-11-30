import './App.css';
import React, {useState} from 'react';
import {NavBar} from '../NavBar/NavBar'
import {PostList} from '../PostList/PostList'
import {SubList} from '../SubList/SubList'

function App() {
  return (
    <div className="App">
      <NavBar />
      <PostList />
      <SubList />
    </div>
  );
}

export default App;
