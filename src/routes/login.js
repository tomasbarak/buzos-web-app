const { dirname } = require('path');
const appDir =      dirname(require.main.filename);

module.exports.init = (app) => {
    app.get('/login', (req, res) => {
        res.render(`${appDir}/src/pages/login.ejs`, {
            req: req
        })
    });
}