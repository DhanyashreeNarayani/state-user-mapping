const db = require('../db');


const getStateList = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT ogc_fid, name from state"
        db.any(query).then(data => {
            console.table(data);
            return resolve(data);

        }).catch(error => {
            console.log(error);
            return reject(error)
        })
    })
}

module.exports = {
    getStateList
}