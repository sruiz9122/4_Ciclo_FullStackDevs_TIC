import React from "react";
import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div > {/* className="container-fluid" */}
            <h2>Index Administración</h2>
            <div >
                <h4><Link to={`/admin/registrousuario`}>Registrar Usuario </Link></h4>
                <h4><Link to={`/admin/registroproyecto`}>Registrar Proyecto</Link></h4>   
            </div>
        </div>
    );
};

export default Index;