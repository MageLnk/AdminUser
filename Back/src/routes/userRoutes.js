const User = require('../models/user');
module.exports = function (app)     {
    app.get('/users', (request, respond) => {
        User.getUsers((err, data) => {
            respond.status(200).json(data)
        })
    });

    app.post('/users', (request, respond) => {
        const userData = {
            id: null,
            username: request.body.username,
            usernametodo: request.body.usernametodo,
            password: request.body.password,
            email: request.body.email,
        }
        User.insertUser(userData, (err, data) => {
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

    app.put('/users/:id', (request, respond) => {
        const userData = {
            id: request.params.id,
            username: request.body.username,
            usernametodo: request.body.usernametodo,
            password: request.body.password,
            email: request.body.email,
        }
        User.updateUser(userData, (err, data) => {
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

    app.delete('/users/:id', (request, respond) => {
        User.deleteUser(request.params.id, (err, data) => {
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

    app.get('/todo', (request, respond) => {
        User.getTodoUsers((err, data) => {
            respond.status(200).json(data)
        })
    });

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