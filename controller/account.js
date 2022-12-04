const mysql = require('../model/db');

const signIn = async (account) => {
    try {
        const { email, password } = account;
        const sql = 'SELECT * FROM Users WHERE email = ? AND password = ?';
        const result = await mysql.query(sql, [email, password]);
        if (result.length > 0) {
            return { name: result[0]['name'], authority: result[0]['authority'] };
        } else {
            throw 'Invalid email/password';
        }
    } catch (err) {
        throw err;
    }
};

const signUp = async (account) => {
    try {
        account['authority'] = 0;
        const sql = 'INSERT INTO Users SET ?';
        await mysql.query(sql, account);
        console.log(account);
        const email = account.email;
        const height = account.height;
        const weight = account.weight;

        const sql2 = 'INSERT INTO Health(email,height,weight) VALUES(?,?,?)';
        await mysql.query(sql2, [email, height, weight]);

        const sql3 = `UPDATE Health SET gender = 'male', date = '12/4',bodyfat='28',waistline='20',height='168',weight='55',step='6187',totalcal='1500',sportcal='400',sleep='7',period='0'
WHERE email =?`;
        await mysql.query(sql3, email);
    } catch (err) {
        throw err;
    }
};
module.exports = { signIn, signUp };
