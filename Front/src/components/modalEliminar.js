import React from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { FaTrashAlt } from 'react-icons/fa';
//onClick={e => actions.borrarTicket(mapeo.id_ticket, props.history, actions)}
//onClick={e => actions.borrarTicket(props.parametroMapeoID, props.history, actions)}
const ModalEliminar = props => {
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                return (
                    <div className="row">
                        <div className="col-md-12">
                            <p data-toggle="modal" data-target="#EliminarTicket">
                                <FaTrashAlt />
                            </p>
                            <div className="modal fade" id="EliminarTicket" tabIndex="-1" role="dialog" aria-labelledby="EliminarTicket" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="EliminarTicket">Confirmación</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            ¿Estás seguro de borrar el ticket?
                                            <button onClick={console.log("Intentando imprimir el parámetro", props.parametroMapeoID)}>
                                                Ola
                                            </button>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary"
                                                onClick={e => actions.borrarTicket(props.parametroMapeoID, props.history, actions)}>Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Context.Consumer>
    );
}
ModalEliminar.propTypes = {
    match: PropTypes.any,
    history: PropTypes.any,
    parametroMapeoID: PropTypes.any
};

export default ModalEliminar;