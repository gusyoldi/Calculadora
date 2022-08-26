const express = require('express');
const app = express();
const path = require('path');


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`running on port ${PORT}`));

let mensaje = "Esto funca";

console.log(mensaje)

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});