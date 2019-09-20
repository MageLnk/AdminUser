import React from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Registro = props => {
    function handleSubmit(e, actions, store, props) {
        e.preventDefault();
        actions.registrarUsuario(store.inputsRegistro, props.history);
    };
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-2">
                                <h1>Favor llenar la información correctamente</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-4">
                                <form onSubmit={e => handleSubmit(e, actions, store, props)}>
                                    <div className="content">
                                        <div className="form">
                                            <div className="form-group">
                                                <label htmlFor="username">Ingrese usuario</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Usuario"
                                                    name="username"
                                                    onChange={e => actions.obtenerDatosRegistro(e)}
                                                    onSubmit={e => handleSubmit()}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Ingrese contraseña</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    name="pass"
                                                    onChange={e => actions.obtenerDatosRegistro(e)}
                                                    onSubmit={e => handleSubmit()}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="correo">Ingrese correo</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Correo"
                                                    name="correo"
                                                    onChange={e => actions.obtenerDatosRegistro(e)}
                                                    onSubmit={e => handleSubmit()}
                                                    required
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p>Elija su perfil dentro del sitio</p>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="id_tipousuarios"
                                                        value="1"
                                                        onChange={e => actions.obtenerDatosRegistro(e)}
                                                        onSubmit={e => handleSubmit()}
                                                    />
                                                    <label className="form-check-label" htmlFor="inlineRadio1">Administrador</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="id_tipousuarios"
                                                        value="2"
                                                        onChange={e => actions.obtenerDatosRegistro(e)}
                                                        onSubmit={e => handleSubmit()}
                                                    />
                                                    <label className="form-check-label" htmlFor="inlineRadio1">Usuario</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footerLogin">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <button type="submit" className="btn btn-primary">
                                                    Registrarse
									            </button>
                                            </div>
                                            <Link to="/">
                                                <button className="btn btn-secondary">
                                                    Volver al login
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
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