import React from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Usuarios = props => {
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                //Validador de usuario logeado
                //actions.check(store, props.history)
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Bienvenido al panel de usuarios</h1>
                            </div>
                            <div className="col-md-12">
                                <p>Acá podrá ver todos los tickets, y los asignados a Ud.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 offset-5">
                                <button className="btn btn-danger" onClick={e => actions.logout(store, props.history)}>
                                    Volver al login
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p>Tickets</p>
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