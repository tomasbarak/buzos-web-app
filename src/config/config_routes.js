const { dirname } = require('path');
const appDir =      dirname(require.main.filename);
const routesDir =   `${appDir}/src/routes`

module.exports.configRoutes = (app, firebaseAdmin) => {
    require(`${routesDir}/index.js`).init(app);
    require(`${routesDir}/login.js`).init(app);
}