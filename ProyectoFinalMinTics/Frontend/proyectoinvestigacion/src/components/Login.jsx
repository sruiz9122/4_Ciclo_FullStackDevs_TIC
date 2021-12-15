import React from 'react'

export const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <hr />
            <form>

                <div className="form-group">
                    <label>Usuario</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Usuario"
                    />
                    <small 
                        id="emailHelp" 
                        className="form-text text-muted"
                    >No compartas tu usuario con nadie</small>
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Contraseña"
                     />
                </div>

                <div className="form-check">
                    <input 
                        type="checkbox" 
                        className="form-check-input" 
                    />
                    <label 
                        className="form-check-label"
                    >Recuerdame</label>
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary"
                >Ingresar</button>
            </form>
        </div>
    )
}