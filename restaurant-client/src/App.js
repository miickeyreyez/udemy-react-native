import React from 'react';
import { Routes, Route } from 'react-router-dom';
import firebase, { FirebaseContext } from './firebase';
import Orders from './components/orders';
import Saucer from './components/saucer';
import Menu from './components/menu';
import Sidebar from './components/ui/sidebar';

function App() {
  return (
    <FirebaseContext.Provider
      value={{ firebase }}
    >
      <div>
        <div className='md:flex min-h-screen'>
          <Sidebar />

          <div className='md:w-3/5 lg:w-4/5 p-6'>
            <Routes>
              <Route path='/' element={<Orders />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/new-saucer' element={<Saucer />} />
            </Routes>
          </div>
        </div>
      </div>
    </FirebaseContext.Provider>
  );
}

export default App;
