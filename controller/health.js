const mysql = require('../model/db');


const Health = async(email) => {
    const sql = 'SELECT * FROM health WHERE email = ?'
    const results = await mysql.query(sql, [email])
        .catch((err) => {
            console.log(err)
        })
    const data = {}
    if (results.length > 0){
        for (let result of results){
            data.date = result.date;
            data.step = result.step;
        }
        return { error: false, data}
    }
    return {error: true }
}

module.exports = Health;