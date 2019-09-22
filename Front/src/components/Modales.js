import React from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Modali, { useModali } from 'modali';

const Modales = props => {
    const [modalEliminar, toggleEliminarModal] = useModali({
        animated: true,
        title: 'Confirmación',
        message: "¿Estás seguro que deseas borrar el ticket?",
        buttons: [
            <Modali.Button
                label="Cancelar"
                isStyleCancel
                onClick={() => toggleEliminarModal()}
            />,
            <Modali.Button
                label="Confirmar"
                isStyleDefault
                onClick={console.log("Probando algo del onclick del modal")}
            />,
        ],
    });
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                return (
                    <div className="row">
                        <Modali.Modal {...modalEliminar} />
                    </div>
                );
            }}
        </Context.Consumer>
    );
}
Modales.propTypes = {
    match: PropTypes.any,
    history: PropTypes.any
};

export default Modales;