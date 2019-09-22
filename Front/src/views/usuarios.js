import React, { useEffect } from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../styles/usuarios.css";

let actioncontext = null;

const Usuarios = props => {
    useEffect(() => {
        actioncontext.obtenerTicketsByUser(props.match);
    }, []);
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                actioncontext = actions;
                //Validador de usuario logeado
                //actions.check(store, props.history)
                const listaTicketsUser = store.dataTickerPorUsuario.map((mapeo, index) => {
                    return (
                        <div className="contenedorcentraldos container" key={index}>
                            <div className="row">
                                <div className="col-md-4 offset-5">
                                    <h3>Ticket</h3>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <p>Su ticket asignado es:</p>
                                    </div>
                                    <div className="col-md-4 offset-3">
                                        <p>{mapeo.ticket_pedido}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                });
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-2">
                                <h1>Bienvenido al panel de tickets</h1>
                            </div>
                            <div className="col-md-6 offset-3">
                                <p>Acá podrá ver los tickets asignados por algún administrador</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 offset-9">
                                <button className="btn btn-danger" onClick={e => actions.logout(store, props.history)}>
                                    Volver al login
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                {listaTicketsUser}
                            </div>
                        </div>
                    </div>
                );
            }}
        </Context.Consumer>
    );
}
Usuarios.propTypes = {
    match: PropTypes.any,
    history: PropTypes.any
};

export default Usuarios;