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
			loginUsuario: (contacto, redirect) => {
				const store = getStore();
				fetch(enlace + "/api/token/", {
					method: "Post",
					body: JSON.stringify(contacto),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log("resp sin json", resp);
						if (resp.ok === true) {
							setStore({
								InputsLoginBeta: resp.ok
							});
						}
						//console.log("Debería guardar el response.ok, true o false", store.InputsLoginBeta);
						return resp.json();
					})
					.then(resp => {
						setStore({
							InputsToken: resp
						});
						if (store.InputsLoginBeta === true) {
							redirect.push("/");
						} else {
							alert("Su nombre de usuario o contraseña no coinciden");
						}
						//console.log("Acá debería estar todo lo que responde el fetch del login", resp);
					});
			}
		}
	};
};

export default getState;
