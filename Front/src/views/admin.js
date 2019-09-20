import React from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

let actioncontext = null;
let storecontext = null;

const Admin = props => {
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                actioncontext = actions;
                storecontext = store;
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
                                <Link to="/">
                                    <button className="btn btn-danger">
                                        Volver al login
                                    </button>
                                </Link>
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