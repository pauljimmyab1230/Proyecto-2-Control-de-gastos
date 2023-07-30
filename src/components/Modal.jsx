import { useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'
import Mensaje from './Mensaje'

function Modal({ setModal, animarModal, setAnimarModal, guardarGasto }) {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios');
            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return;
        }

        guardarGasto({nombre, cantidad, categoria})
    }

    const ocultarModal = () => {
        setAnimarModal(false);

        setTimeout(() => {
            setModal(false);

        }, 500);
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img
                    src={CerrarBtn}
                    alt="Cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form action="#" className={`formulario ${animarModal ? 'animar' : 'cerrar'}`} onSubmit={handleSubmit}>
                <legend >Nuevo Gasto</legend>
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor="nombre">Nombre gasto</label>
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder='Añade el nombre del gasto'
                        onChange={e => { setNombre(e.target.value) }}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        type="number"
                        name="cantidad"
                        id="cantidad"
                        placeholder='Añade la cantidad del gasto: ej. 300'
                        onChange={e => { setCantidad(Number(e.target.value)) }}

                    />
                </div>

                <div className='campo'>
                    <label htmlFor="cateogria">Categoria</label>

                    <select name="categoria" id="categoria" onChange={e => { setCategoria(e.target.value) }}>
                        <option value="">---Seleccione---</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value="Añadir gasto" />
            </form>
        </div>
    )
}

export default Modal