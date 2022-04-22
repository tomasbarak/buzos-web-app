const { dirname } = require('path');
const appDir = dirname(require.main.filename);
const axios = require('axios');
module.exports.init = (app) => {
    app.get('/', (req, res) => {
        const isLogged = res.locals.isLogged;
        const accessToken = res.locals.accessToken || '';
        let user = res.locals.user || {};
        user.name = String(user.name).split(' ')[0]
        if (isLogged) {
            axios.get('https://graph.microsoft.com/v1.0/me/photo/$value', {
                encoding: null,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                responseType: 'arraybuffer',
            }).then(response => {
                res.render(`${appDir}/src/pages/index.ejs`, {
                    locals: {
                        user: user,
                        photo: "data:" + response.headers["content-type"] + ";base64," + Buffer.from(response.data, 'binary').toString('base64'),
                    }
                })
            }).catch((error) => {
                console.error(error)
                res.render(`${appDir}/src/pages/index.ejs`, {
                    locals: {
                        user: user,
                        photo: ''
                    }
                })
            })
        } else {
            res.redirect('/login')
        }
    });
}