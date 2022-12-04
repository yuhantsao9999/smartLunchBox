const mysql = require('../model/db');


const Health = async(userid) => {
    const sql = 'SELECT * FROM health WHERE userid = ?'
    const results = await mysql.query(sql, [userid])
        .catch((err) => {
            console.log(err)
        })
    const data = {}
    if (results.length > 0){
        for (let result of results){
            data.date = result.date;
            data.step = result.step;
            data.cal = result.cal;
        }
        return { error: false, data}
    }
    return {error: true }
}

module.exports = Health;