const { dirname } =     require('path');
const appDir =          dirname(require.main.filename);
const cookieParser =    require('cookie-parser') 

module.exports.configExpress = (express, app, firebaseAdmin) => {
    app.set('view engine', 'ejs');
    app.use(express.static(`${appDir}/public`));
    app.use(cookieParser())

    const port = 3000

    app.listen(port, () => {
        console.log(`Buzos app listening on port ${port}`)
    });

    app.use((req, res, next) => {
        const idToken = req.cookies.idToken || '';
        const accessToken = req.cookies.accessToken || '';
        firebaseAdmin.auth().verifyIdToken(idToken).then(userInfo => {
            res.locals.isLogged = true;
            res.locals.user = userInfo;
            res.locals.accessToken = accessToken;
            next()
        }).catch(err => {
            console.error(err)
            res.locals.isLogged = false;
            next()
        })
    })
}