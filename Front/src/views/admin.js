import React from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import MapUsers from "../components/mapUsersToAdmin";
import MapTickets from "../components/mapTicketsAdmin";


const Admin = props => {
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                //Validador de usuario logeado
                actions.check(store, props.history)
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-2">
                                <h1>Bienvenido al panel de administrador</h1>
                            </div>
                            <div className="col-md-6 offset-3">
                                <p>Acá podrá ver y administrar los tickets de los usuarios</p>
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
                                <MapUsers />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <MapTickets />
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