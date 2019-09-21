import React, { useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

let actioncontext = null;
const MapUsers = props => {
    useEffect(() => {
        actioncontext.obtenerUsuarios();
    }, []);
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                actioncontext = actions;
                const ListaTickets = store.ticketsAdmin.map((mapeo, index) => {
                    return (
                        <div className="contenedorcentral container" key={index}>
                            <div className="row">
                                <div className="col-md-4 offset-5">
                                    <h3>Ticket</h3>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        {mapeo.ticket_pedido}
                                    </div>
                                    <div className="col-md-3 offset-3">
                                        <p>Este ticket es de:</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p onClick={e => actions.borrarTicket(mapeo.id_ticket, props.history, actions)}><FaTrashAlt /></p>
                                    </div>
                                    <div className="col-md-3 offset-6">
                                       <p onLoad={e => actions.userCompare(mapeo, store.dataUsers)}>{store.resultCompare}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                });
                return (
                    <div className="row">
                        <div className="col-md-12">
                            {ListaTickets}
                        </div>
                    </div>
                );
            }}
        </Context.Consumer>
    );
}
MapUsers.propTypes = {
    match: PropTypes.any,
    history: PropTypes.any
};

export default MapUsers;