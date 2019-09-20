import React from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

let actioncontext = null;
let storecontext = null;

const Registro = props => {
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                actioncontext = actions;
                storecontext = store;
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>Ola k ase - Formulario registro o k ase</p>
                            </div>
                        </div>
                        <div className="row">
                            <Link to="/">
                                <button className="btn btn-secondary">
                                    Volver al login
                                </button>
                            </Link>
                        </div>
                    </div>
                );
            }}
        </Context.Consumer>
    );
}
Registro.propTypes = {
    match: PropTypes.any,
    history: PropTypes.any
};

export default Registro;