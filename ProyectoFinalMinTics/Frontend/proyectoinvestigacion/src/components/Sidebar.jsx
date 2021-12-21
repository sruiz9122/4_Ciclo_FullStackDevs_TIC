import React from 'react';
import 'styles/bootstrap.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className='hidden lg:flex lg:w-72 border border-gray-300 h-full flex-col bg-gray-200 p-4 sidebar ' > 
      Sidebar
      <div className='flex flex-col justify-center '>
      <Link to={`/admin/registrousuario`}><button className='bg-gray-500 p-2 text-white rounded-lg shadow-md hover:bg-gray-700 mt-2 w-100'>Registrar Usuario</button></Link>
      <Link to={`/admin/registroproyecto`}><button className='bg-gray-500 p-2 text-white rounded-lg shadow-md hover:bg-gray-700 mt-2 w-100'>Registrar Proyecto</button></Link>
      <lin to={'/'}><button className=' bg-gray-500 p-2 text-white rounded-lg shadow-md hover:bg-gray-700 mt-2 w-100'>Cerrar Sesión</button></lin>
      </div>

    </nav>
  )
}

export default Sidebar;
