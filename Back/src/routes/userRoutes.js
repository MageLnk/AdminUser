const User = require('../models/user');
module.exports = function (app)     {
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

    // Todas las rutas que vienen acá, están asociadas al método POST
    app.post('/todo', (request, respond) => {
        const userData = {
            id: null,
            usernametodo: request.body.usernametodo,
            time: request.body.time,
            estado: request.body.estado
        }
        User.insertTodoUser(userData, (err, data) => {
            if (data && data.insertId) {
                respond.json({
                    success: true,
                    msg: 'Todo creado',
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
    app.put('/todo/:id', (request, respond) => {
        const userData = {
            id: request.params.id,
            estado: request.body.estado,
        }
        User.updateUserTodo(userData, (err, data) => {
            if (data && data.msg){
                respond.json(data)
            } else{
                respond.json({
                    success: false,
                    msg: 'error'
                })
            }
        })
    });

    // Todas las rutas que vienen acá, están asociadas al método DELETE
    app.delete('/todo/:id', (request, respond) => {
        User.deleteUserTodo(request.params.id, (err, data) => {
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