import React from 'react'
import { Link } from 'react-router-dom';
import 'styles/bootstrap.css'

export const Login = () => {
    return (
        <div className='flex flex-col w-full justify-center items-center'>
            <h2 className='m-5 text-center text-3xl font-extrabold text-gray-900'>Inicia Sesión</h2>
            <hr />
            <form className='mt-8 max-w-md'>

                <div>
                    {/* <label>Usuario: </label> */}
                    <input
                        type="email"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                        placeholder="usuario@correo.com"
                        required
                    />

                    {/* <label>Contraseña: </label> */}
                    <input
                        type="password"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                        placeholder="Contraseña"
                        required
                    />
                </div>

                <div className='flex justify-between'>
                    <div>
                        <label htmlFor='recuerdame'>
                            <input type='checkbox' name='recuerdame' />
                            Recuerdame
                        </label>
                    </div>
                </div>

                <div className = 'flex justify-center'>
                    <Link to='/admin'>
                        <button
                            className="btn btn-primary" 
                            type="submit"
                        >Ingresar</button>
                    </Link>
                </div>

            </form>
        </div>
    )
}

export default Login;