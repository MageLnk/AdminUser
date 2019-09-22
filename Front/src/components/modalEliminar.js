import React from 'react';
import Modal from 'react-modal';
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from "prop-types";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

export class ModalEliminar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    enviarData = (ID, actions) => {
        //console.log("Probando parámetros, ID", ID);
        //console.log("Probando actions", actions);
        actions.borrarTicket(ID, actions)
        this.closeModal()
    }
    render() {
        return (
            <div>
                <p onClick={this.openModal}>
                    <FaTrashAlt />
                </p>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Modal Eliminar"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 offset-4">
                                <h2 ref={subtitle => this.subtitle = subtitle}>Confirmación</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-3">
                                <p>¿Estás seguro que deseas borrar el ticket?</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-4">
                                <button className="btn btn-danger" onClick={this.closeModal}>
                                    Cancelar
                                </button>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-info" onClick={e => this.enviarData(this.props.ID, this.props.action)}>
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

ModalEliminar.propTypes = {
    ID: PropTypes.any,
    action: PropTypes.any
};