const { dirname } = require('path');
const appDir =      dirname(require.main.filename);

module.exports.init = (app) => {
    app.get('/', (req, res) => {
        res.render(`${appDir}/src/pages/index.ejs`, {
            req: req
        })
    });
}