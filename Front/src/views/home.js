import React from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

let actioncontext = null;
let storecontext = null;

const Home = props => {
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                actioncontext = actions;
                storecontext = store;
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-md-offset-4">
                                <p>Ola k ase?</p>
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