const { dirname } = require('path');
const appDir =      dirname(require.main.filename);

module.exports.init = (app) => {
    app.get('/', (req, res) => {
        const isLogged = res.locals.isLogged;
        const user = res.locals.user || {};
        if(isLogged){
            res.render(`${appDir}/src/pages/index.ejs`, {
                locals: {
                    user: user
                }
            })
        }else{
            res.redirect('/login')
        }
    });
}