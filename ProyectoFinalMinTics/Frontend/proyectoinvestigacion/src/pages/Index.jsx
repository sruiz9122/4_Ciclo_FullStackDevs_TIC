import React from "react";
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div className="container-fluid">
            <h2>Index Gestión Proyectos</h2>

            <div className="col-4">
                <h4 className="text-center">

                    <Link
                        className='btn btn-dark btn-sm'
                        to={`/Login`}
                    >Login</Link>


                    <Link
                        className='btn btn-dark btn-sm'
                        to={`/User`}
                    >Registrar Usuario</Link>

                    <Link
                        className='btn btn-dark btn-sm'
                        to={`/Proyect`}
                    >Resgistrar Proyectos</Link>

                </h4>

            </div>

        </div>
    );
};

export default Index;