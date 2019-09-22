import React, { useEffect } from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/editarticket.css";

let actioncontext = null;
let storecontext = null

const EditarTickets = props => {
/*    let aux = "";
    let auxfinal = "";
    function match() {
        for (let i = 0; i < storecontext.ticketsAdmin.length; i++) {
            let aux = storecontext.ticketsAdmin[i];
            if (aux.id_ticket === props.match.params.id) {
                auxfinal = aux;
                return;
            }
        }
    }
*/
function value(ID, store, actions) {
    for (let i = 0; i < store.ticketsAdmin.length; i++) {
        let aux = store.ticketsAdmin[i];
        if (aux.id_ticket == ID.params.id) {
            actions.valueAux(aux.ticket_pedido)
            return;
        }
    }
    console.log("ID", ID.params.id);

}
    function handleSubmit(e, actions, store, props) {
        e.preventDefault();
        actions.editarTickets(store.inputTicket, props.history, actions, props.match);
    };
    useEffect(() => {
        value(props.match, storecontext, actioncontext);
    }, []);
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                actioncontext = actions;
                storecontext = store;
                //Validador de usuario logeado
                actions.check(store, props.history);
                const Usuarios = store.dataUsers.map((mapeo, index) => {
                    return (
                        <div className="contenedorsecundarios container" key={index}>
                            <div className="row">
                                <div className="col-md-3">
                                    <button className="dropdown-item" type="button" onClick={e => actions.auxiliarUser(mapeo)}>
                                        {mapeo.username}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                });
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-2">
                                <h1>Bienvenido al panel de edición tickets</h1>
                            </div>
                            <div className="col-md-6 offset-3">
                                <p>Acá podrá editar el ticket elegido</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <Link to="/administracion">
                                    <button className="btn btn-danger">
                                        Volver
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="finalfinal container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Nombre del ticket</h6>
                                </div>
                                <div className="col-md-6">
                                    <h6>Usuario a quien pertenece el ticket</h6>
                                </div>
                            </div>
                            <div>
                                <form onSubmit={e => handleSubmit(e, actions, store, props)}>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Ingrese ticket"
                                                name="ticket_pedido"
                                                onChange={e => actions.obtenerTicket(e)}
                                                required
                                                value={store.valuePower}
                                            />
                                        </div>
                                        <div className="col-md-3 offset-1">
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-info dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenu2"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">
                                                    {store.botonOKASE}
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    {Usuarios}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Enviar ticket
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Context.Consumer >
    );

}
EditarTickets.propTypes = {
    match: PropTypes.any,
    history: PropTypes.any
};

export default EditarTickets;