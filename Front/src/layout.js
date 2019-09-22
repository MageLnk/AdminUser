import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./store/appContext.js";
import Home from "./views/home";
import Registro from "./views/registro";
import Admin from "./views/admin";
import Usuarios from "./views/usuarios";
import EditarTickets from "./views/editarticket";

// import { Navbar } from "./component/navbar";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="fulldiv d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/registro" component={Registro} />
							<Route exact path="/administracion" component={Admin} />
							<Route exact path="/tickets/usuario" component={Usuarios} />
							<Route exact path="/editarticket/:id" component={EditarTickets} />
							<Route render={() => <h1>Error 404!</h1>} />
						</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
