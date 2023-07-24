import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {
    return (
        <div>
            <header>
                <h1>Planificador de gastos</h1>

                {isValidPresupuesto ? (
                    <p>Control de presupuesto</p>
                ) : (
                    <NuevoPresupuesto
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                )}

            </header>
        </div>
    )
}

export default Header