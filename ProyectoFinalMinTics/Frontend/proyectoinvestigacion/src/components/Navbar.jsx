import React from 'react';
import { Link } from 'react-router-dom';
import 'styles/bootstrap.css';

const Navbar = () => {
  return (
    <nav className='bg-gray-200'>
      <ul className='flex w-full justify-between my-3'>
        <li>Logo</li>
        <li></li>
        <li></li>
        <li></li>
        <li className='px-3'>
        <Link to={`/login`}>
        <button
            className='bg-gray-500 p-2 text-white rounded-lg shadow-md hover:bg-gray-700'
          >
            Iniciar Sesión
          </button>
        </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
