import React from 'react';
import './App.css'
// import AboutTheBook from './components/AboutTheBook.tsx'
// import Banner from './components/Banner.tsx'
// import BookContent from './components/BookContent.tsx'
// import HeaderBar from './components/HeaderBar.tsx'
// import WhatIsGonnaBeLearned from './components/WhatIsGonnaBeLearned.tsx'
import ChapterCarrousel from './components/ChapterCarrousel.tsx'
import CustomCursor from './components/CustomCursor.tsx'

const App: React.FC = () => {

  return (
    <div>
      <CustomCursor></CustomCursor>
      <ChapterCarrousel></ChapterCarrousel>
    </div>
  );
};

export default App;
