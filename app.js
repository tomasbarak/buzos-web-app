const express =     require('express');
const { dirname } = require('path');
const appDir =      dirname(require.main.filename);

const app =         express();

const firebaseAdmin = require('firebase-admin');

require(`${appDir}/src/config/config_express`)          .configExpress(express, app);
require(`${appDir}/src/config/config_firebase_admin`)   .configFirebaseAdmin(firebaseAdmin);
require(`${appDir}/src/config/config_routes`)           .configRoutes(app, firebaseAdmin);