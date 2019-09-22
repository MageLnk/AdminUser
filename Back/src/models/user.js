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
userModel.obtenerTickersPorUsuario = (userData, callback) =>{
    console.log("Probando el otro userdata", userData);
    if (connection) {
        connection.query(
            `SELECT * FROM ticket 
            WHERE id_usuarios = ${connection.escape(userData.id_usuarios)}
            `,
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
userModel.editarTicket = (userData, callback) => {
    if (connection){
        const sql = `
            UPDATE ticket SET
            id_usuarios = ${connection.escape(userData.id_usuarios)},
            ticket_pedido = ${connection.escape(userData.ticket_pedido)}
            WHERE id_ticket = ${connection.escape(userData.id_ticket)}
        `
        connection.query(sql, (err, result) => {
            if (err){
                throw err;
            } else {
                callback(null, {
                    msg:"Información modificada con éxito",
                    success: true
                })
            }
        })
    }
}

// Las siguientes funciones, son para borrar información a través de método DELETE
userModel.borrarTicket = (id, callback) => {
    if (connection) {
        let sql = `
            SELECT * FROM ticket WHERE id_ticket = ${connection.escape(id)}
        `;
        connection.query(sql, (err, row) => {
            if (row){
                let sql = `
                DELETE FROM ticket WHERE id_ticket = ${id}
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
userModel.borrarUsuario = (id, callback) => {
    if (connection) {
        let sql = `
            SELECT * FROM usuarios WHERE id_usuarios = ${connection.escape(id)}
        `;
        connection.query(sql, (err, row) => {
            if (row){
                let sql = `
                DELETE FROM usuarios WHERE id_usuarios = ${id}
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