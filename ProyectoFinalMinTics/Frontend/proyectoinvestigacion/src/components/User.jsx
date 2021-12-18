import React from 'react'
import '../App.css'

export const User = () => {

    const [usuario, setUsuario] = React.useState('')
    const [correo, setCorreo] = React.useState('')
    const [cedula, setCedula] = React.useState('')
    const [contrasena, setContrasena] = React.useState('')
    const [tipoUsuario, setTipoUsuario] = React.useState('')
    const [estado, setEstado] = React.useState('')
    const [listaUsuario, setListaUsuarios] = React.useState([])

    const handleUsuario = (e) => {
        console.log(e.target.value);
        setUsuario(e.target.value)
    }

    const guardarDatos = function (e) {
        //Evito el comportamiento por defecto del navegador
        //Que no envíe el formulario y que no refresque el navegador
        e.preventDefault()
        console.log(e.target)

        //Validación
        if (!usuario.trim()) {
            console.log(`Campo usuario vacío`)
            return
        }

        if (!correo.trim()) {
            console.log(`Campo correo vacío`)
            return
        }

        if (!cedula.trim()) {
            console.log(`Campo cedula vacío`)
            return
        }

        if (!contrasena.trim()) {
            console.log(`Campo contraseña vacío`)
            return
        }

        if (!tipoUsuario.trim()) {
            console.log(`Campo Tipo Usuario vacío`)
            return
        }

        if (!estado.trim()) {
            console.log(`Campo Estado vacío`)
            return
        }

        //LLamado base de datos
        console.log(`Se guardaron los datos`)

        setListaUsuarios([
            //Accedemos al valor actual del estado
            ...listaUsuario,
            //Asignación de un nuevo elemeto
            {
                usuario: usuario,
                correo: correo,
                cedula: cedula,
                contrasena: contrasena,
                tipoUsuario: tipoUsuario,
                estado: estado
            }
        ])

        //Limpieza del estado
        setUsuario('')
        setCorreo('')
        setCedula('')
        setContrasena('')
        setTipoUsuario('')
        setEstado('')
        //Limpiar los campos del formulario
        e.target.reset()
    }

    return (
        <div>
            <h2>Agregar Usuario</h2>
            <hr />
            {usuario}
            <form onSubmit={guardarDatos}>

                <input type="text"
                    placeholder="Ingrese Nombre"
                    className="form-control mb-2"
                    name="Nombre"
                    onChange={handleUsuario}
                />

                <input type="text"
                    placeholder="Ingrese Correo"
                    className="form-control mb-2"
                    name="Correo"
                    // Asiganos el evento de cambio al input y accedemos al valor del input mediante su target.value
                    onChange={(e) => setCorreo(e.target.value)}
                />

                <input type="number"
                    placeholder="Ingrese Cedula"
                    className="form-control mb-2"
                    name="Cedula"
                    onChange={(e) => setCedula(e.target.value)}
                />

                <input type="password"
                    placeholder="Ingrese Contraseña"
                    className="form-control mb-2"
                    name="Contrasena"
                    onChange={(e) => setContrasena(e.target.value)}
                />

                <input type="text"
                    placeholder="Ingrese Tipo Usuario"
                    className="form-control mb-2"
                    name="tipousuario"
                    onChange={(e) => setTipoUsuario(e.target.value)}
                />

                <input type="text"
                    placeholder="Ingrese Estado"
                    className="form-control mb-2"
                    name="estado"
                    onChange={(e) => setEstado(e.target.value)}
                />

                <button className="btn btn-outline-success">Agregar Usuario</button>

            </form>

            <hr />

            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Id</th>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Correo</th>
                        <th scope='col'>cedula</th>
                        <th scope='col'>Tipo de Usuario</th>
                        <th scope='col'>Estado</th>
                        <th scope='col'>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaUsuario

                        .map((item, i) => (
                            <tr key={i + 1}>
                                {/* <tr key={item.id}> */}
                                <th scope='row'>{i + 1}</th>
                                {/* <td>{item.id}</td> */}
                                <th>{i + 1}</th>
                                <td>{item.usuario}</td>
                                <td>{item.correo}</td>
                                <td>{item.cedula}</td>
                                <td>{item.tipoUsuario}</td>
                                <td>{item.estado}</td>
                                <td>
                                    {/* <Link
                            className='btn btn-outline-primary btn-sm'
                            to={`/productos/${producto.id}`}
                          > */}
                                    <button
                                        className='btn btn-outline-primary btn-sm'
                                    >
                                        Editar

                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}