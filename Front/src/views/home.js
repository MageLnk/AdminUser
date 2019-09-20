import React from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Home = props => {
    function handleSubmit(e, actions, store, props) {
        e.preventDefault();
        actions.loginUsuario(store.inputsLogin, props.history);
    };
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 offset-4">
                                <h1>Bienvenido!</h1>
                            </div>
                            <div className="col-md-4 offset-4">
                                <p>Por favor, ingrese su usuario y contraseña</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-4">
                                <form onSubmit={e => handleSubmit(e, actions, store, props)}>
                                    <div className="content">
                                        <div className="form">
                                            <div className="form-group">
                                                <label htmlFor="username">Username</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Usuario"
                                                    name="username"
                                                    onChange={e => actions.obtenerDatosLogin(e)}
                                                    onSubmit={e => handleSubmit()}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    name="password"
                                                    onChange={e => actions.obtenerDatosLogin(e)}
                                                    onSubmit={e => handleSubmit()}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="footerLogin">
                                        <button type="submit" className="btn btn-primary">
                                            Login
									    </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-4">
                                <p>Si no posee cuenta, por favor, haga clic en el botón</p>
                            </div>
                            <div className="col-md-4 offset-5">
                                <Link to="/registro">
                                    <button className="btn btn-success">
                                        Ir a registro
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                );
            }}
        </Context.Consumer>
    );
}
Home.propTypes = {
    match: PropTypes.any,
    history: PropTypes.any
};

export default Home;