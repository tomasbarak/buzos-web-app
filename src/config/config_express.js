const { dirname } = require('path');
const appDir =      dirname(require.main.filename);

module.exports.configExpress = (express, app) => {
    app.set('view engine', 'ejs');
    app.use(express.static(`${appDir}/public`));

    const port = 3000

    app.listen(port, () => {
        console.log(`Buzos app listening on port ${port}`)
    });
}