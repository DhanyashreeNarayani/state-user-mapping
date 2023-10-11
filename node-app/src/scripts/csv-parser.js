const fs = require("fs");
const { readFile } = require("fs");
const csv = require("csv-parser");
const pgp = require('pg-promise')();;
const db = pgp('postgres://postgres:password@localhost:5432/geodata');

module.exports = db;
const readline = require('readline');
const lineByLine = require('n-readlines');



console.log(__dirname)

const func = async () => {
    const liner = new lineByLine(`${__dirname}/individuals.csv`);
    user_id = 0;
    while (line = liner.next()) {
        user_id++;

        try {
            const rowItems = line.toString('ascii').split(',')
            console.log(rowItems)


            const geometryLongitude = rowItems[4].split('"coordinates":[').pop();
            const geometryLatitude = rowItems[5].split(']}')[0]
            console.log(geometryLatitude, geometryLongitude)
            await db.one('INSERT INTO user_table (firstname,lastname,location,user_id) VALUES ($1, $2,$3,$4) RETURNING user_id', [
                rowItems[0], rowItems[1], `POINT(${geometryLongitude} ${geometryLatitude})`, user_id
            ])




        } catch (error) {
            console.log(error, "ERROR")
        }

    }
}

func();

// readFile(`${__dirname}/individuals.csv`, "utf8", async (error, textContent) => {





// })

// const promises = []
// fs.createReadStream(`${__dirname}/individuals.csv`)
//     .pipe(csv())
//     // .pipe(parse({ delimiter: ",", from_line: 1 }))
//     .on("data", function (row) {
//         console.log(row);
//         const geometryLongitude = row._4.split('"coordinates":[').pop().split(",")[0];
//         const geometryLatitude = row._4.split('"coordinates":[').pop().split(",")[1].replace("]}", "")
//         console.log(geometryLatitude, geometryLongitude)
//         promises.push(db.one('INSERT INTO user_table (firstname,lastname,location) VALUES ($1, $2,$3) RETURNING user_id', [
//             row.firstname, row.lastname, `POINT(${geometryLongitude} ${geometryLatitude})`
//         ]))

//     }).on("end", function () {
//         console.log('CSV file successfully parsed and uploaded to the user table.');
//         Promise.all(promises)
//             .then(data => {
//                 console.log(data, "DATA")
//             }).catch(error => {
//                 console.log(error)
//             })
//     })