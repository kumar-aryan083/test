import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/common/Home';
import ImageUpload from './components/common/ImageUpload';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/image-upload' element={<ImageUpload />} />
      </Routes>
    </>
  );
}

export default App;
