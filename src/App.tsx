import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import './index.css';
import NewPost from './pages/NewPost';
import Posts from './pages/Posts'

function App() {
  return (
    <BrowserRouter> 
      <div className='max-w-960 sm:m-auto '>
        <Header />
        <Routes>
          <Route path='/posts' element={<Posts />}>
          </Route>

          <Route path='/new-post' element={<NewPost />}>
         </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
