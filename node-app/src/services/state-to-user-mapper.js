const db = require('../db');


const stateToUserMapper = (stateID) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT u.*
        FROM user_table u                                                             
        JOIN state s                                                                 
        ON ST_Within(u.location, s.wkb_geometry) WHERE s.ogc_fid=$1`;

        db.any(query, [stateID])
            .then((users) => {
                console.log('Users within the state:');
                console.table(users);
                return resolve(users)
            })
            .catch((error) => {
                console.error('Error executing query:', error);
                return resolve(error)
            })
            .finally(() => {
                // db.$pool.end(); // Close the database connection pool
            });
    })

}
module.exports = {
    stateToUserMapper
}