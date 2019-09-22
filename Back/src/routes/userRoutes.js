const User = require('../models/user');
module.exports = function (app) {

    // Todas las rutas que vienen acá, están asociadas al método GET
    app.get('/todoslosusuarios', (request, respond) => {
        User.obtenerTodosUsuarios((err, data) => {
            respond.status(200).json(data)
        })
    });
    app.get('/tiposdeusuario', (request, respond) => {
        User.obtenerTiposDeUsuario((err, data) => {
            respond.status(200).json(data)
        })
    });
    app.get('/todoslostickets', (request, respond) => {
        User.obtenerLosTickets((err, data) => {
            respond.status(200).json(data)
        })
    });
    app.get('/usuariosadministradores', (request, respond) => {
        User.obtenerUsuariosAdministradores((err, data) => {
            respond.status(200).json(data)
        })
    });
    app.get('/obtenertickersporusuario/:id', (request, respond) => {
        const userData = {
            id_usuarios: request.params.id
        }
        console.log("UserData", userData);
        User.obtenerTickersPorUsuario(userData, (err, data) => {
            respond.status(200).json(data)
        })
    });

    // Todas las rutas que vienen acá, están asociadas al método POST
    app.post('/logindeusuarios', (request, respond) => {
        const userData = {
            username: request.body.username,
            password: request.body.password
        }
        //console.log("Probando el userData", userData);
        User.loginDeUsuario((err, data) => {
            //console.log("Probando el data sin json", data);
            //console.log("Probando el err", err);
            for (let i = 0; i < data.length; i++) {
                //console.log("Probando el data con el for de iterador", data[i]);
                //console.log("Probando el data con el for de iterador en un solo valor", data[i].username);
                //console.log("Probando el userData dentro del for", userData.username)
                if (userData.username == data[i].username && userData.password == data[i].pass) {
                    respond.status(200).json({
                        success: true,
                        msg: 'Usuario existe',
                        data: data[i]
                    })
                    return;
                }
            }
            respond.status(500).json({
                success: false,
                msg: 'Error'
            })
        })
    });
    app.post('/registrousuario', (request, respond) => {
        const userData = {
            id_usuarios: null,
            id_tipousuarios: request.body.id_tipousuarios,
            username: request.body.username,
            pass: request.body.pass,
            correo: request.body.correo
        }
        User.registroUsuarios(userData, (err, data) => {
            if (data && data.insertId) {
                respond.json({
                    success: true,
                    msg: 'Usuario creado',
                    data: data
                })
            } else {
                respond.status(500).json({
                    success: false,
                    msg: 'Error'
                })
            }
        })
    });
    app.post('/agregarticket', (request, respond) => {
        const userData = {
            id_ticket: null,
            id_usuarios: request.body.id_usuarios,
            ticket_pedido: request.body.ticket_pedido
        }
        console.log("Probando userData", userData);
        User.ingresarTicket(userData, (err, data) => {
            if (data && data.insertId) {
                respond.json({
                    success: true,
                    msg: 'Ticket creado',
                    data: data
                })
            } else {
                respond.status(500).json({
                    success: false,
                    msg: 'Error'
                })
            }
        })
    });

    // Todas las rutas que vienen acá, están asociadas al método PUT
    app.put('/editarticket/:id', (request, respond) => {
        const userData = {
            id_ticket: request.params.id,
            id_usuarios: request.body.id_usuarios,
            ticket_pedido: request.body.ticket_pedido,
        }
        User.editarTicket(userData, (err, data) => {
            if (data && data.msg) {
                respond.json(data)
            } else {
                respond.json({
                    success: false,
                    msg: 'error'
                })
            }
        })
    });

    // Todas las rutas que vienen acá, están asociadas al método DELETE
    app.delete('/ticket/:id', (request, respond) => {
        User.borrarTicket(request.params.id, (err, data) => {
            if (data && data.msg === 'borrado' || data.msg === 'no existe') {
                respond.json({
                    success: true,
                    data
                })
            } else {
                respond.status(500).json({
                    msg: 'Error'
                })
            }
        })
    });
    app.delete('/usuario/:id', (request, respond) => {
        User.borrarUsuario(request.params.id, (err, data) => {
            if (data && data.msg === 'borrado' || data.msg === 'no existe') {
                respond.json({
                    success: true,
                    data
                })
            } else {
                respond.status(500).json({
                    msg: 'Error'
                })
            }
        })
    });

}