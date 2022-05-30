const express = require('express');
const app = express();

//Middleware
app.use(express.json());

function middleware1(req, res, next) {
    console.log("Middleware 1");
    next();
}

function middleware2(req, res, next) {
    console.log("Middleware2");
    next();
}

app.use(middleware1);
app.use(middleware2);

app.get('/localhost/9000/trips', (req, res) => {
    res.status(200).json({
        message: 'Some messfage',
    });
});

app.listen(8000, () => {
    console.log("Server running on port 9000");
})