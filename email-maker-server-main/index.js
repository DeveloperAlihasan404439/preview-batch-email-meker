const express = require('express');
const app = express();
const port = process.env.PORT ||5000;

app.post('/emila', async(req, res)=>{
  console.log(req)
})

app.get('/', (req, res) => {
    res.send('mail server is started');
});

app.listen(port, () => {
    console.log(`mail server is running on port ${port}`)
});
