import React, { useEffect } from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../styles/mapTicketsAdmin.css";

let actioncontext = null;
const MapTickets = props => {
    useEffect(() => {
        actioncontext.obtenerTickets()
    }, []);
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                actioncontext = actions;
                const Usuarios = store.dataUsers.map((mapeo, index) => {
                    return (
                        <div className="contenedorsecundarios container" key={index}>
                            <div className="row">
                                <div className="col-md-3">
                                    <button className="dropdown-item" type="button" onClick={e => actions.auxiliarUser(mapeo)}>
                                        {mapeo.username}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                });
                return (
                    <div className="row">
                        <div className="col-md-5">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese ticket"
                                name="ticket_pedido"
                                onChange={e => actions.obtenerTicket(e)}
                            />
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-primary" onClick={e => actions.generarTickets(store.inputTicket, props.history)}>
                                Enviar ticket
                            </button>
                        </div>
                        <div className="col-md-3 offset-1">
                            <div className="dropdown">
                                <button
                                    className="btn btn-info dropdown-toggle"
                                    type="button"
                                    id="dropdownMenu2"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    {store.botonOKASE}
                                        </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    {Usuarios}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Context.Consumer>
    );
}
MapTickets.propTypes = {
    match: PropTypes.any,
    history: PropTypes.any
};

export default MapTickets;