const { dirname } = require('path');
const appDir =      dirname(require.main.filename);

module.exports.configFirebaseAdmin = (admin) => {
    const serviceAccount = require(`${appDir}/src/config/firebase_admin_sdk.json`);
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}