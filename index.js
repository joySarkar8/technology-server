const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('api is running by joy')
});


app.listen(port, () => {
    console.log(`server is runngin on port: ${port}`);
})

