const express = require("express");
const route = express.Router();

const UserService = require("../../services/UserService")

module.exports = (app) => {
    const UserServiceInstance = new UserService();

    app.use(route);

    route.get('/me', (req, res) => {
        res.send(UserServiceInstance.getUser())
    })
}   