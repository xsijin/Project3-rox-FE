import React from 'react';
import Pages from './pages/Pages';
import Category from './maincomponents/Category';
import Searchbar from './maincomponents/Searchbar';
import NavBar from './maincomponents/NavBar';



function App() {
  return (
    <div className='App'>
      <Searchbar />
      <NavBar />
      <Category />
      <Pages />

    </div>
  );
}

export default App