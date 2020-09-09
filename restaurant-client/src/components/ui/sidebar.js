import React, { Component } from 'react';
import { NavLink }  from 'react-router-dom';

class Sidebar extends Component {
  state = {  }
  render() { 
    return (
      <>
        <div className='md:w-2/5 lg:w-1/5 bg-gray-800'>
          <div className='p-6'>
            <p className='uppercase text-white text-2xl tracking-wide text-center font-bold'>
              Restaurante
            </p>

            <p className='mt-3 text-gray-600'>
              Administra tu restaurante desde aquí
            </p>

            <nav className='mt-10'>
              <NavLink  className='p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900' activeClassName='text-yellow-500' exact='true' to='/'>
                Ordenes
              </NavLink>

              <NavLink  className='p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900' activeClassName='text-yellow-500' exact='true' to='/menu'>
                Menú
              </NavLink>
            </nav>
          </div>
        </div>
      </>
    );
  }
}
 
export default Sidebar;
