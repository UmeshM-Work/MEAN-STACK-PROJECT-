const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);


const datacon = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gaana'
}
let adduser = async(input) => {


        const con = mysql.createConnection(datacon);

        await con.connectAsync();

        let sql = "INSERT INTO USER(fname,email,pass)VALUES(?,?,?)"

        await con.queryAsync(sql, [input.fname, input.email, input.pass]);

        await con.endAsync();
    }
    // FOR LOGIN AND DEACTIVATION
let authenticateUser = async(input) => {
    const connection = mysql.createConnection(datacon);
    await connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE email=? AND pass=?";
    const results = await connection.queryAsync(sql, [
        input.email,
        input.pass,
    ]);

    await connection.endAsync();

    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }
};

let authenticateUser2 = async(input) => {
    const connection = mysql.createConnection(datacon);
    await connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE email=?";
    const results = await connection.queryAsync(sql, [
        input.email,

    ]);

    await connection.endAsync();

    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }
};







//

let updateuser = async(input) => {


    const con = mysql.createConnection(datacon);

    await con.connectAsync();

    let sql = "UPDATE user SET pass=? WHERE email=?"

    let results = await con.queryAsync(sql, [input.pass, input.email]);

    await con.endAsync();

    return results;
}



let deleteuser = async(input) => {


    const con = mysql.createConnection(datacon);

    await con.connectAsync();

    let sql = "DELETE FROM USER WHERE email=? AND pass= ? ";

    let results = await con.queryAsync(sql, [input.email, input.pass]);

    await con.endAsync();

    return results;
}

module.exports = { adduser, authenticateUser, authenticateUser2, updateuser, deleteuser }