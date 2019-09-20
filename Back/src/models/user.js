const mysql = require('mysql');
const variableAdministradores = "= '1'";

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apitickets'
});

let userModel = {};

// Las siguentes funciones, son para obtener información a través de método GET
userModel.obtenerTodosUsuarios = (callback) =>{
    if (connection) {
        connection.query(
            'SELECT * FROM usuarios ORDER BY id_usuarios',
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, rows);
                }
            }
        )
    }
};
userModel.obtenerTiposDeUsuario = (callback) =>{
    if (connection) {
        connection.query(
            'SELECT * FROM tipo_usuarios ORDER BY id_tipousuarios',
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, rows);
                }
            }
        )
    }
};
userModel.obtenerLosTickets = (callback) =>{
    if (connection) {
        connection.query(
            'SELECT * FROM ticket ORDER BY id_ticket',
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, rows);
                }
            }
        )
    }
};
userModel.obtenerUsuariosAdministradores = (callback) =>{
    if (connection) {
        connection.query(
            `SELECT * FROM usuarios WHERE id_tipousuarios ='1'`,
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, rows);
                }
            }
        )
    }
};
userModel.loginDeUsuario = (callback) =>{
    if (connection) {
        connection.query(
            `SELECT * FROM usuarios`,
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, rows);
                }
            }
        )
    }
};
// Las siguientes funciones, son para guardar información a través de método POST
userModel.registroUsuarios = (userData, callback) => {
    if (connection){
        connection.query(
            'INSERT INTO usuarios SET ?', userData,
            (err, result) => {
                if (err){
                    throw err;
                } else {
                    callback(null, {
                        'insertId': result.insertId
                    })
                }
            }
        )
    }
};
userModel.ingresarTicket = (userData, callback) => {
    if (connection){
        connection.query(
            'INSERT INTO ticket SET ?', userData,
            (err, result) => {
                if (err){
                    throw err;
                } else {
                    callback(null, {
                        'insertId': result.insertId
                    })
                }
            }
        )
    }
};

// Las siguienes funciones, son para editar información a través de método PUT
userModel.updateUser = (userData, callback) => {
    if (connection){
        const sql = `
            UPDATE users SET
            username = ${connection.escape(userData.username)},
            usernametodo = ${connection.escape(userData.usernametodo)},
            password = ${connection.escape(userData.password)},
            email = ${connection.escape(userData.email)}
            WHERE id = ${connection.escape(userData.id)}
        `
        connection.query(sql, (err, result) => {
            if (err){
                throw err;
            } else {
                callback(null, {
                    msg:"Información modificada con éxito"
                })
            }
        })
    }
}

// Las siguientes funciones, son para borrar información a través de método DELETE
userModel.deleteUser = (id, callback) => {
    if (connection) {
        let sql = `
            SELECT * FROM users WHERE id = ${connection.escape(id)}
        `;
        connection.query(sql, (err, row) => {
            if (row){
                let sql = `
                DELETE FROM users WHERE id = ${id}
                `;
                connection.query(sql, (err, result) => {
                    if (err) {
                        throw err;
                    } else {
                        callback (null, {
                            msg: 'borrado'
                        })
                    }
                })
            } else {
                callback(null, {
                    msg: 'no existe'
                })
            }
        })
    }
}

module.exports = userModel;