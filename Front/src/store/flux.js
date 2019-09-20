const enlace = "http://localhost:3000/"
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			inputsLogin: {
				username: "",
				password: ""
			}
		},
		actions: {
			obtenerDatosLogin: evento => {
				const store = getStore();
				const name = evento.target.name;
				let oldStore = store.inputsLogin;
				oldStore[name] = evento.target.value;
				setStore({ inputsLogin: oldStore });
			},
			loginUsuario: (infologin, redirect) => {
				const store = getStore();
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
								redirect.push("/administracion");
							}
							if (resp.data.id_tipousuarios == 2) {
								redirect.push("/tickets/usuario");
							}
							return;
						}
						//console.log("Acá debería estar todo lo que responde el fetch del login", resp);
					});
			}
		}
	};
};

export default getState;
