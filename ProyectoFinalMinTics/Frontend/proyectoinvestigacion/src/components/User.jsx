import React from 'react'
import '../App.css'
import { v4 as uuidv4 } from 'uuid';


export const User = () => {

    const [usuario, setUsuario] = React.useState('')
    const [correo, setCorreo] = React.useState('')
    const [cedula, setCedula] = React.useState('')
    const [contrasena, setContrasena] = React.useState('')
    const [tipoUsuario, setTipoUsuario] = React.useState('')
    const [estado, setEstado] = React.useState('')
    const [listaUsuario, setListaUsuarios] = React.useState([])
    //Estados de modificación
    const [editar, setEditar] = React.useState(false)
    const [id, setId] = React.useState('')
    const [listaModificacion, setListaModificacion] = React.useState([])

    const guardarDatos = function (e) {
        //Evito el comportamiento por defecto del navegador
        //Que no envíe el formulario y que no refresque el navegador
        e.preventDefault()
        console.log(e.target)
        //LLamado base de datos
        console.log(`Se guardaron los datos`)

        setListaUsuarios([
            //Accedemos al valor actual del estado
            ...listaUsuario,
            //Asignación de un nuevo elemeto
            {
                id: uuidv4(),
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

    const handleEditar = (edit) => {
        console.log(edit)
        setUsuario(edit.usuario)
        setCorreo(edit.correo)
        setCedula(edit.cedula)
        setContrasena(edit.contrasena)
        setTipoUsuario(edit.tipoUsuario)
        setEstado(edit.estado)
        setEditar(true)
        setId(edit.id)
    }

    const editarDatos = function (e) {
        //Evito el comportamiento por defecto del navegador
        //Que no envíe el formulario y que no refresque el navegador
        e.preventDefault()
        console.log(e.target)
        //LLamado base de datos
        console.log(`Se modificaron los datos`)

        const arregloTemporal = listaModificacion.map((item) => {
            return item.id === id ? 
            { 
                id:id, usuario:usuario, 
                correo:correo, 
                cedula:cedula, 
                contrasena:contrasena, 
                tipoUsuario:tipoUsuario, 
                estado:estado
            } 
                : item
        })

        setListaModificacion(arregloTemporal)


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
            {
                editar ? 
                (<h2>Editar Usuario</h2>) 
                :
                (<h2>Agregar Usuario</h2>)
            }
            
            <hr />
            {/* {usuario} */}
            <form onSubmit={editar ? editarDatos : guardarDatos}>

                <input type="text"
                    placeholder="Ingrese Nombre"
                    required
                    className="form-control mb-2"
                    id="Usuario"
                    onChange={(e) => setUsuario(e.target.value)}
                />

                <input type="email"
                    placeholder="Ingrese Correo"
                    required
                    className="form-control mb-2"
                    id="Correo"
                    // Asiganos el evento de cambio al input y accedemos al valor del input mediante su target.value
                    onChange={(e) => setCorreo(e.target.value)}
                />

                <input type="number"
                    placeholder="Ingrese Cedula"
                    required
                    className="form-control mb-2"
                    id="Cedula"
                    onChange={(e) => setCedula(e.target.value)}
                />

                <input type="password"
                    placeholder="Ingrese Contraseña"
                    required
                    className="form-control mb-2"
                    id="Contrasena"
                    onChange={(e) => setContrasena(e.target.value)}
                />

                <div className='mb-3'>
                    {/* <label className='form-label'>Estado</label> */}
                    <select
                        id='inputEstadoUsuario'
                        required
                        className='form-select'
                        onChange={(e) => setTipoUsuario(e.target.value)}
                    >
                        {tipoUsuario === '' ? (
                            <>
                                <option
                                    diabled
                                    value=''
                                    selected
                                    className='text-muted'
                                >
                                    Seleccione un tipo de Usuario
                                </option>
                                <option value='Administrador'>Administrador</option>
                                <option value='Estudiante'>Estudiante</option>
                                <option value='Lider'>Líder</option>
                            </>
                        ) : tipoUsuario === 'Administrador' ? (
                            <>
                                <option diabled value='' /* class='text-muted' */>
                                    Seleccione un tipo de Usuario
                                </option>
                                <option value='Administrador' selected>
                                    Administrador
                                </option>
                                <option value='Estudiante'>Estudiante</option>
                                <option value='Lider'>Líder</option>
                            </>
                        ) : tipoUsuario === 'Estudiante' ? (
                            <>
                                <option diabled value='' /* class='text-muted' */>
                                    Seleccione un tipo de Usuario
                                </option>
                                <option value='Administrador'>Administrador</option>
                                <option value='Estudiante' selected>
                                    Estudiante
                                </option>
                                <option value='Lider'>Líder</option>
                            </>
                        ) : (
                            <>
                                <option diabled value='' /* class='text-muted' */>
                                    Seleccione un tipo de Usuario
                                </option>
                                <option value='Administrador'>Administrador</option>
                                <option value='Estudiante'>Estudiante</option>
                                <option value='Lider' selected>
                                    Líder
                                </option>
                            </>
                        )};
                    </select>
                </div>

                <div className='mb-3'>
                    {/* <label className='form-label'>Estado</label> */}
                    <select
                        id='inputEstadoUsuario'
                        required
                        className='form-select'
                        onChange={(e) => setEstado(e.target.value)}
                    >
                        {estado === '' ? (
                            <>
                                <option
                                    diabled
                                    value=''
                                    selected
                                    className='text-muted'
                                >
                                    Seleccione un estado
                                </option>
                                <option value='Pendiente'>Pendiente</option>
                                <option value='Autorizado'>Autorizado</option>
                                <option value='No autorizado'>No autorizado</option>
                            </>
                        ) : estado === 'Pendiente' ? (
                            <>
                                <option diabled value='' /* class='text-muted' */>
                                    Seleccione un estado
                                </option>
                                <option value='Pendiente' selected>
                                    Pendiente
                                </option>
                                <option value='Autorizado'>Autorizado</option>
                                <option value='No autorizado'>No autorizado</option>
                            </>
                        ) : estado === 'Autorizado' ? (
                            <>
                                <option diabled value='' /* class='text-muted' */>
                                    Seleccione un estado
                                </option>
                                <option value='Pendiente'>Pendiente</option>
                                <option value='Autorizado' selected>
                                    Autorizado
                                </option>
                                <option value='No autorizado'>No autorizado</option>
                            </>
                        ) : (
                            <>
                                <option diabled value='' /* class='text-muted' */>
                                    Seleccione un estado
                                </option>
                                <option value='Pendiente'>Pendiente</option>
                                <option value='Autorizado'>Autorizado</option>
                                <option value='No autorizado' selected>
                                    No autorizado
                                </option>
                            </>
                        )};
                    </select>
                </div>

                {
                    (editar ?
                        (<button className="btn btn-outline-success">Guardar Cambio</button>)
                        :
                        (<button className="btn btn-outline-success">Crear usuario</button>)
                    )
                }


            </form>

            <hr />

            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Id</th>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Correo</th>
                        <th scope='col'>Cedula</th>
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
                                <th>{item.id}</th>
                                <td>{item.usuario}</td>
                                <td>{item.correo}</td>
                                <td>{item.cedula}</td>
                                <td>{item.tipoUsuario}</td>
                                <td>{item.estado}</td>
                                <td>

                                    <button
                                        className="btn btn-outline-primary btn-sm"
                                        onClick={() => handleEditar(item)}
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