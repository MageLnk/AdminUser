const enlace = "http://localhost:3000/"
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			inputsLogin: {
				username: "",
				password: ""
			},
			estado: false,
			inputsRegistro: {
				id_tipousuarios: 2,
				username: "",
				pass: "",
				correo: ""
			}
		},
		actions: {
			check: (store, redirect) => {
				if (store.estado == false) {
					redirect.push("/");
				}
			},
			logout: (store, redirect) => {
				console.log(store)
				setStore({estado : false})
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
								setStore({ estado: true })
								redirect.push("/administracion");
							}
							if (resp.data.id_tipousuarios == 2) {
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
					.then(resp => {
						return resp.json();
					})
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
			}
		}
	};
};

export default getState;
