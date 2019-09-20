import React, { useEffect } from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

let actioncontext = null;
const MapUsers = props => {
    useEffect(() => {
		actioncontext.obtenerUsuarios()
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
                            <div className="row">
                                <div className="col-md-12">
                                    {mapeo.ticket_pedido}
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