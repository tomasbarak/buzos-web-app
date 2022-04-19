const express =     require('express')
const { dirname } = require('path');
const appDir =      dirname(require.main.filename);

const app =         express()

require(`${appDir}/src/config/config_express`)  .configExpress(express, app)
require(`${appDir}/src/config/config_routes`)   .configRoutes(app, {})

