const express = require('express');
const app = express();
const port = 3000;
const { stateToUserMapper } = require('./services/state-to-user-mapper');
const { getStateList } = require('./services/get-state')

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users-by-stateId/:id', async (req, res) => {
    try {
        const users = await stateToUserMapper(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                users
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            data: {
                error
            }
        })
    }
})

app.get('/states', async (req, res) => {
    try {
        const states = await getStateList();
        return res.status(200).json({
            status: 'success',
            data: {
                states
            }
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            data: {
                error
            }
        })
    }
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});