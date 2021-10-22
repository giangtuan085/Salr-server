import * as expressModule from "express";
import AppError from './src/utils/appError';
const cors = require('cors');

// fire function
const app = expressModule();

// CORS allow
app.use(cors());

app.use('/assets', expressModule.static('assets'));

app.get('/cat', (req, res) => {
	res.send('cat page');
	res.sendStatus(200);
});

app.get('/cat/:name', (req, res) => {
	res.send(`cat name is : ${req.params.name}`);
});


app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next('not found');
});

// PORT for Heroku host or default PORT
app.listen(process.env.PORT || 3000);
console.log('Server start');

export default app;