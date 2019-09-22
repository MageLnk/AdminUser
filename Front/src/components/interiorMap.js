import React, { useEffect } from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { ModalEliminar } from "./modalEliminar";

let actioncontext = null;
const MapUsers = props => {
    useEffect(() => {
        actioncontext.obtenerUsuarios();
    }, []);
    function userCompare(infoTicket, infoUser) {
        for (let i = 0; i < infoUser.length; i++) {
            if (infoUser[i].id_usuarios === infoTicket.id_usuarios) {
                return infoUser[i].username
            }
        }
    }
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
                                    <div className="col-md-5">
                                        {mapeo.ticket_pedido}
                                    </div>
                                    <div className="col-md-4 offset-3">
                                        <p>Este ticket es del usuario:</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-1">
                                        <ModalEliminar 
                                            ID={mapeo.id_ticket}
                                            historia={props.history}
                                            action={actions}
                                        />
                                    </div>
                                    <div className="col-md-1">
                                        <Link to={"/editarticket/" + mapeo.id_ticket }>
                                            <p><FaEdit /></p>
                                        </Link>
                                    </div>
                                    <div className="col-md-3 offset-7">
                                        <p>{userCompare(mapeo, store.dataUsers)}</p>
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