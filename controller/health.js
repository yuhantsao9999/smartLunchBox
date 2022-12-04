const mysql = require('../model/db');

const Health = async (userid) => {
    const sql = 'SELECT * FROM health WHERE userid = ?';
    const results = await mysql.query(sql, [userid]).catch((err) => {
        console.log(err);
    });
    const data = {};
    if (results.length > 0) {
        for (let result of results) {
            data.gender = result.gender;
            data.date = result.date;
            data.bodyfat = result.bodyfat;
            data.waistline = result.waistline;
            data.height = result.height;
            data.weight = result.weight;
            data.step = result.step;
            data.totalcal = result.totalcal;
            data.sportcal = result.sportcal;
            data.sleep = result.sleep;
            data.period = result.period;
        }
        return { error: false, data };
    }
    return { error: true };
};

module.exports = Health;
