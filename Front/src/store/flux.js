const enlace = "http://localhost:3000/"
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			auxUser: "",
			inputsLogin: {
				username: "",
				password: ""
			},
			botonOKASE: "Usuarios",
			estado: false,
			inputsRegistro: {
				id_tipousuarios: 2,
				username: "",
				pass: "",
				correo: ""
			},
			inputTicket: {
				id_usuarios: "",
				ticket_pedido: ""
			},
			dataID: {},
			ticketsAdmin: [],
			dataUsers: []
		},
		actions: {
			auxiliarUser: info => {
				setStore({ auxUser: info });
				setStore({ botonOKASE: info.username })
			},
			check: (store, redirect) => {
				if (store.estado == false) {
					redirect.push("/");
				}
			},
			logout: (store, redirect) => {
				//console.log(store)
				setStore({
					auxUser: "",
					inputsLogin: {
						username: "",
						password: ""
					},
					botonOKASE: "Usuarios",
					estado: false,
					inputsRegistro: {
						id_tipousuarios: 2,
						username: "",
						pass: "",
						correo: ""
					},
					inputTicket: {
						id_usuarios: "",
						ticket_pedido: ""
					},
					dataID: {},
					ticketsAdmin: [],
					dataUsers: [],
				})
				redirect.push("/");
			},
			obtenerDatosLogin: evento => {
				const store = getStore();
				const name = evento.target.name;
				let oldStore = store.inputsLogin;
				oldStore[name] = evento.target.value;
				setStore({ inputsLogin: oldStore });
			},
			obtenerDatosRegistro: evento => {
				const store = getStore();
				const name = evento.target.name;
				let oldStore = store.inputsRegistro;
				oldStore[name] = evento.target.value;
				setStore({ inputsRegistro: oldStore });
			},
			obtenerTicket: evento => {
				const store = getStore();
				const name = evento.target.name;
				let oldStore = store.inputTicket;
				oldStore[name] = evento.target.value;
				setStore({ inputTicket: oldStore });
			},
			obtenerTickets: e => {
				fetch(enlace + "todoslostickets/", {
					method: "GET",
				})
					.then(resp => resp.json())
					.then(resp => {
						setStore({
							ticketsAdmin: resp
						});
						//console.log("Lo que trae el fetch get de la lista todo", resp);
					});
			},
			obtenerUsuarios: e => {
				fetch(enlace + "todoslosusuarios/", {
					method: "GET",
				})
					.then(resp => resp.json())
					.then(resp => {
						setStore({
							dataUsers: resp
						});
						//console.log("Lo que trae el fetch get de la lista todo", resp);
					});
			},
			editarTickets: (infoeditar, redirect, actions, match) => {
				const store = getStore();
				if (store.auxUser == "") {
					alert("Debe elegir un usuario al cual asignar")
					return;
				}
				let oldStore = store.inputTicket
				oldStore.id_usuarios = store.auxUser.id_usuarios;
				setStore({ inputTicket: oldStore })
				fetch(enlace + "editarticket/" + match.params.id , {
					method: "Put",
					body: JSON.stringify(infoeditar),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						if (resp.success == false) {
							alert("Ocurrió un problema con el servidor");
							return;
						}
						if (resp.success == true) {
							redirect.push("/administracion");
							return;
						}
					});

			},
			loginUsuario: (infologin, redirect) => {
				fetch(enlace + "logindeusuarios/", {
					method: "Post",
					body: JSON.stringify(infologin),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log("resp sin json", resp);
						return resp.json();
					})
					.then(resp => {
						//console.log("Probando el resp después del json", resp);
						if (resp.success == false) {
							alert("Su nombre de usuario o contraseña no coinciden");
							return;
						}
						if (resp.success == true) {
							if (resp.data.id_tipousuarios == 1) {
								setStore({ dataID: resp.data.id_usuarios });
								setStore({ estado: true })
								redirect.push("/administracion");
							}
							if (resp.data.id_tipousuarios == 2) {
								setStore({ dataID: resp.data.id_usuarios });
								redirect.push("/tickets/usuario");
							}
							return;
						}
						//console.log("Acá debería estar todo lo que responde el fetch del login", resp);
					});
			},
			registrarUsuario: (infologin, redirect) => {
				fetch(enlace + "registrousuario/", {
					method: "Post",
					body: JSON.stringify(infologin),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						if (resp.success == false) {
							alert("Ocurrió un problema con el servidor");
							return;
						}
						if (resp.success == true) {
							redirect.push("/");
							return;
						}
					});
			},
			generarTickets: (infologin, redirect, actions) => {
				const store = getStore();
				if (store.auxUser == "") {
					alert("Debe elegir un usuario al cual asignar")
					return;
				}
				let oldStore = store.inputTicket
				oldStore.id_usuarios = store.auxUser.id_usuarios;
				setStore({ inputTicket: oldStore })
				fetch(enlace + "agregarticket/", {
					method: "Post",
					body: JSON.stringify(infologin),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						if (resp.success == false) {
							alert("Ocurrió un problema con el servidor");
							return;
						}
						if (resp.success == true) {
							actions.obtenerTickets();
							return;
						}
					});

			},
			borrarTicket: (contactoid, redirect, actions) => {
				fetch(enlace + "ticket/" + contactoid, {
					method: "DELETE",
				}).then(resp => {
					if (resp.ok) {
						actions.obtenerTickets();
						alert("El ticket ha sido borrado con éxito");
					}
				});
			},
		}
	};
};

export default getState;
