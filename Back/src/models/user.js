const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apitickets'
});

let userModel = {};

userModel.obtenerUsuarios = (callback) =>{
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

userModel.insertUser = (userData, callback) => {
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