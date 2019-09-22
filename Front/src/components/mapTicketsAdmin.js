import React, { useEffect } from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../styles/mapTicketsAdmin.css";

let actioncontext = null;
const MapTickets = props => {
    useEffect(() => {
        actioncontext.obtenerTickets()
    }, []);
    function handleSubmit(e, actions, store, props) {
        e.preventDefault();
        actions.generarTickets(store.inputTicket, props.history, actions);
    };
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                actioncontext = actions;
                //Esta variable, trae los nombres de los usuarios, para hacer el botón usuarios más abajo
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
                    <div className="container">
                        <form onSubmit={e => handleSubmit(e, actions, store, props)}>
                            <div className="row">
                                <div className="col-md-5">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ingrese ticket"
                                        name="ticket_pedido"
                                        onChange={e => actions.obtenerTicket(e)}
                                        required
                                        value={store.inputTicket.ticket_pedido}
                                    />
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
                                <div className="col-md-3">
                                    <button className="btn btn-primary" type="submit">
                                        Enviar ticket
                                    </button>
                                </div>
                            </div>
                        </form>
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