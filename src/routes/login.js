const { dirname } = require('path');
const appDir =      dirname(require.main.filename);

module.exports.init = (app, admin) => {

    
        app.get('/login', (req, res) => {
            const isLogged = res.locals.isLogged || false;
            if(isLogged){
                res.redirect('/')
            }else{
                res.render(`${appDir}/src/pages/login.ejs`, {
                    req: req
                })
            }
        });
}