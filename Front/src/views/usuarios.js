import React from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

let actioncontext = null;
let storecontext = null;

const Usuarios = props => {
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                actioncontext = actions;
                storecontext = store;
                return (
                    <div className="row">
                        <div className="col-md-12">
                            <p>Ola k ase - acá se verán los ticets del usuario</p>
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