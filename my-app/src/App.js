import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className='app_wrapper'>
      <Header />
      <Navbar />
      <Profile />
      <div>
        <img className='content_ava' src='https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg' />
      </div>
    </div>
  );
}

export default App;