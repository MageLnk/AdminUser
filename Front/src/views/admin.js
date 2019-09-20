import React from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const Admin = props => {
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                actions.check(store, props.history)
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Bienvenido al panel de administrador</h1>
                            </div>
                            <div className="col-md-12">
                                <p>Acá podrá ver y administrar los tickets de los usuarios</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p>Botón de asignar</p>
                            </div>
                            <div>
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
Admin.propTypes = {
    match: PropTypes.any,
    history: PropTypes.any
};

export default Admin;