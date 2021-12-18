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
    //Estados de modificación
    const [editar, setEditar] = React.useState(false)
    const [id, setId] = React.useState('')
    const [listaModificacion, setlistaModificacion] = React.useState([])

    const handleUsuario = (e) => {
        console.log(e.target.value);
        setUsuario(e.target.value)
    }

    const handleModificar = (mod) => {
        console.log(mod)
        setUsuario(mod.usuario)
        setCorreo(mod.correo)
        setCedula(mod.cedula)
        setContrasena(mod.contrasena)
        setTipoUsuario(mod.tipoUsuario)
        setEstado(mod.estado)
        setEditar(true)
        setId(mod.id)
    }

    const guardarDatos = function (e) {
        //Evito el comportamiento por defecto del navegador
        //Que no envíe el formulario y que no refresque el navegador
        e.preventDefault()
        console.log(e.target)

        //Validación
        if (!usuario.trim()) {
            alert(`Campo usuario vacío`)
            return
        }

        if (!correo.trim()) {
            alert(`Campo correo vacío`)
            return
        }

        if (!cedula.trim()) {
            alert(`Campo cedula vacío`)
            return
        }

        if (!contrasena.trim()) {
            alert(`Campo contraseña vacío`)
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

        setlistaModificacion([
            ...listaModificacion,
            {
                usuario,
                correo,
                cedula,
                contrasena,
                tipoUsuario,
                estado
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
            {/* {usuario} */}
            <form onSubmit={guardarDatos}>

                <input type="text"
                    placeholder="Ingrese Nombre"
                    className="form-control mb-2"
                    name="Nombre"
                    onChange={handleUsuario}
                />

                <input type="email"
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

                <div className='mb-3'>
                    {/* <label className='form-label'>Estado</label> */}
                    <select
                        id='inputEstadoUsuario'
                        className='form-select'
                        required
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
                        className='form-select'
                        required
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


                <button className="btn btn-outline-success">Almacenar cambios</button>

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
                                <th>{i + 1}</th>
                                <td>{item.usuario}</td>
                                <td>{item.correo}</td>
                                <td>{item.cedula}</td>
                                <td>{item.tipoUsuario}</td>
                                <td>{item.estado}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-primary btn-sm"
                                        onClick={() => handleModificar(item)}
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