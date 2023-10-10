const fs = require("fs");
const csv = require("csv-parser");
const db = require('../db');

console.log(__dirname)

fs.createReadStream(`${__dirname}/individuals.csv`)
    .pipe(csv())
    // .pipe(parse({ delimiter: ",", from_line: 1 }))
    .on("data", function (row) {
        console.log(row);
        const geometryLongitude = row._4.split('"coordinates":[').pop().split(",")[0];
        const geometryLatitude = row._4.split('"coordinates":[').pop().split(",")[1].replace("]}", "")
        console.log(geometryLatitude, geometryLongitude)
        db.one('INSERT INTO user_table (firstname,lastname,location) VALUES ($1, $2,$3) RETURNING user_id', [
            row.firstname, row.lastname, `POINT(${geometryLongitude} ${geometryLatitude})`
        ]).then(data => {
            console.log(data, "DATA")
        }).catch(error => {
            console.log(error)
        })
    }).on("end", function () {
        console.log('CSV file successfully parsed and uploaded to the user table.');
    })